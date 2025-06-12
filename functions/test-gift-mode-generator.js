/**
 * Test script for gift-mode-generator.js
 * Loads sample input and prints formatted Etsy description block.
 *
 * Author: Tayfun van Zantvoort
 */

const fs = require('fs');
const path = require('path');
const { generateGiftModeDescription } = require('./gift-mode-generator');

const samplePath = path.join(__dirname, '../gpt-agents/gift-mode-copy-assistant/samples/input-template.json');

try {
  const raw = fs.readFileSync(samplePath, 'utf8');
  const input = JSON.parse(raw);

  const result = generateGiftModeDescription(input);

  console.log('\n📦 Gift Mode Copy Output:\n');
  console.log(result);
  console.log('\n✅ Done.\n');
} catch (err) {
  console.error('❌ Error loading or parsing sample input:', err.message);
}
