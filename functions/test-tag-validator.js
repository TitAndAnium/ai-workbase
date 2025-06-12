/**
 * Test runner for tag-validator.js
 * 
 * Loads sample tag data and prints validation result.
 */

const fs = require('fs');
const path = require('path');
const { validateTags } = require('./tag-validator');

// Load sample data
const tagFilePath = path.join(__dirname, '../samples/etsy-tag-ok.json');
const raw = fs.readFileSync(tagFilePath, 'utf-8');
const tags = JSON.parse(raw);

// Validate
const result = validateTags(tags);

// Print result
console.log('Validation result:\n');
result.forEach(msg => console.log('-', msg));
