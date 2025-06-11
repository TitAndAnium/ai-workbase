// tag-validator.js

/**
 * Tag Validator for Etsy Listings
 * Checks if tags follow Etsy's SEO guidelines (max 20 characters, no duplicates, no illegal characters).
 * 
 * Author: Tayfun van Zantvoort
 */

function validateTags(tags) {
  const MAX_TAG_LENGTH = 20;
  const asciiRegex = /^[\x00-\x7F]+$/;

  const issues = [];

  if (!Array.isArray(tags)) {
    return ['Tag input must be an array of strings.'];
  }

  const seen = new Set();

  tags.forEach((tag, index) => {
    const trimmed = tag.trim();

    if (trimmed.length === 0) {
      issues.push(`Tag ${index + 1} is empty.`);
    }

    if (trimmed.length > MAX_TAG_LENGTH) {
      issues.push(`Tag "${trimmed}" is too long (${trimmed.length} characters).`);
    }

    if (!asciiRegex.test(trimmed)) {
      issues.push(`Tag "${trimmed}" contains non-ASCII characters.`);
    }

    if (seen.has(trimmed.toLowerCase())) {
      issues.push(`Tag "${trimmed}" is a duplicate.`);
    } else {
      seen.add(trimmed.toLowerCase());
    }
  });

  return issues.length === 0 ? ['✅ All tags are valid.'] : issues;
}

// Export
module.exports = { validateTags };

