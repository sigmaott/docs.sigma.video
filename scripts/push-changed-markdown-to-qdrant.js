import './polyfills.js';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { QdrantVector } from '@mastra/qdrant';
import { MDocument } from '@mastra/rag';
import { embedMany } from 'ai';
import dotenv from 'dotenv';
import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COLLECTION_NAME = 'documents';
const GOOGLE_TEXT_EMBEDDING_MODEL = 'text-embedding-004';

const googleAI = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

async function initializeIndex(store) {
  try {
    try {
      await store.describeIndex(COLLECTION_NAME);
    } catch (error) {
      await store.qdrantClient.createIndex({
        indexName: COLLECTION_NAME,
        dimension: 768,
        metric: 'cosine',
      });
    }
  } catch (error) {
    console.error('Error initializing Qdrant index:', error);
  }
}

async function main() {
  // Get changed files from environment variable (space or newline separated)
  let files = [];
  if (process.env.CHANGED_FILES) {
    files = process.env.CHANGED_FILES.split(/\s+/).filter(f => f.endsWith('.md'));
  }

  if (files.length === 0) {
    console.log('No changed markdown files to process.');
    return;
  }

  const store = new QdrantVector(process.env.QDRANT_URL || '', process.env.QDRANT_API_KEY || '', true);
  await initializeIndex(store);

  for (const file of files) {
    try {
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
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
