// Polyfills for Node.js modules that might be required by dependencies
// This provides a Web Crypto API compatible interface using Node.js crypto
import * as nodeCrypto from 'crypto';

// Create a more complete crypto polyfill
const cryptoPolyfill = {
  // Preserve any existing crypto properties
  ...((global.crypto) || {}),

  // Required by Qdrant client
  randomUUID: function() {
    return nodeCrypto.randomUUID();
  },

  // Standard Web Crypto API method
  getRandomValues: function(array) {
    if (array === null) return array;
    if (array.byteLength === 0) {
      return array;
    }
    const bytes = nodeCrypto.randomBytes(array.byteLength);
    if (ArrayBuffer.isView(array)) {
      const typedArray = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
      typedArray.set(bytes);
    }
    return array;
  },

  // Web Crypto API subtle crypto interface
  subtle: {
    // Add any required subtle crypto methods here if needed
    // This is a placeholder for Web Crypto API subtle methods
    digest: async function(algorithm, data) {
      const hash = nodeCrypto.createHash(algorithm.toLowerCase().replace('-', ''));
      hash.update(Buffer.from(data));
      // Convert Buffer to ArrayBuffer
      const buffer = hash.digest();
      const arrayBuffer = new ArrayBuffer(buffer.length);
      const view = new Uint8Array(arrayBuffer);
      for (let i = 0; i < buffer.length; i++) {
        view[i] = buffer[i];
      }
      return arrayBuffer;
    }
  }
};

// Apply the polyfill globally
global.crypto = cryptoPolyfill;

// Export the crypto object for direct imports
export const crypto = cryptoPolyfill;

// Also make sure the Node.js crypto module is available
global.nodeCrypto = nodeCrypto;
