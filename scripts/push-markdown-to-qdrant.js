import './polyfills.js';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { QdrantVector } from '@mastra/qdrant';
import { MDocument } from '@mastra/rag';
import { embedMany } from 'ai';
import dotenv from 'dotenv';
import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VI_DIR = path.resolve(__dirname, '../docs/vi');
const EN_DIR = path.resolve(__dirname, '../docs/en');
const COLLECTION_NAME = 'documents';
const GOOGLE_TEXT_EMBEDDING_MODEL = 'text-embedding-004';

const googleAI = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

async function getAllMarkdownFiles(dirs) {
  const patterns = dirs.map(dir => path.join(dir, '**/*.md*'));
  return fg(patterns, { absolute: true });
}

async function initializeIndex(store) {
    try {
      // Check if index exists, if not create it
      try {
        await store.describeIndex(COLLECTION_NAME);
      } catch (error) {
        await this.qdrantClient.createIndex({
          indexName: COLLECTION_NAME,
          dimension: 768, // Dimension for Gemini embedding model
          metric: 'cosine',
        });
      }
    } catch (error) {
      console.error('Error initializing Qdrant index:', error);
    }
  }

async function main() {
  const files = await getAllMarkdownFiles([VI_DIR, EN_DIR]);
  const store = new QdrantVector(process.env.QDRANT_URL || '', process.env.QDRANT_API_KEY || '', true);

  await initializeIndex(store);

  for (const file of files) {
    console.log(`Processing ${file}`);
    const content = await fs.readFile(file, 'utf8');
    const document = MDocument.fromMarkdown(content);
    const chunks = await document.chunk({
      strategy: 'recursive',
      size: 512,
      overlap: 50,
    });

    const language = file.includes('/vi/') ? 'vi' : 'en';

    const { embeddings } = await embedMany({
      values: chunks.map((chunk) => chunk.text),
      model: googleAI.textEmbeddingModel(GOOGLE_TEXT_EMBEDDING_MODEL),
    });

    await store.upsert({
      indexName: COLLECTION_NAME,
      vectors: embeddings,
      metadata: chunks.map((text, i) => ({
        text,
        file,
        language,
        chunkIndex: i,
        createdAt: new Date().toISOString(),
      })),
    });
    console.log(`Pushed ${chunks.length} chunks from ${file}`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
