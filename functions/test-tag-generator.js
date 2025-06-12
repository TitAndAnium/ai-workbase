/**
 * Test runner for tag-generator.js
 * 
 * Loads sample product data and prints generated tags.
 */

const fs = require('fs');
const path = require('path');
const { generateTags } = require('./tag-generator');

// Load sample input
const inputFile = path.join(__dirname, '../samples/gift-mode-input.json');
const raw = fs.readFileSync(inputFile, 'utf-8');
const productData = JSON.parse(raw);

// Generate tags
const tags = generateTags(productData);

// Output
console.log('Generated tags:\n');
tags.forEach((tag, i) => console.log(`${i + 1}. ${tag}`));
