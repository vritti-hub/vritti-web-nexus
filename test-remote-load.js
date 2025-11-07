// Quick test to verify remote loading works
const fetch = require('node:fetch');

async function testRemoteLoad() {
  try {
    const response = await fetch('http://localhost:3001/mf-manifest.json');
    const manifest = await response.json();
    console.log('VrittiAuth manifest loaded successfully');
    console.log('Exposes:', manifest.exposes?.map(e => e.name));
  } catch (error) {
    console.error('Failed to load manifest:', error.message);
  }
}

testRemoteLoad();
