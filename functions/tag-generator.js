/**
 * Tag Generator for Etsy Listings
 * Based on product features, occasion, style, tone and audience.
 * 
 * Author: Tayfun van Zantvoort
 */

function generateTags(productData) {
  const MAX_TAG_LENGTH = 20;
  const asciiRegex = /^[\x00-\x7F]+$/;
  const seen = new Set();
  const tags = [];

  const addTag = (tag) => {
    const trimmed = tag.trim().toLowerCase();
    if (
      trimmed.length > 0 &&
      trimmed.length <= MAX_TAG_LENGTH &&
      asciiRegex.test(trimmed) &&
      !seen.has(trimmed)
    ) {
      seen.add(trimmed);
      tags.push(trimmed);
    }
  };

  // Base terms
  addTag(productData.productType);
  addTag(productData.occasion);
  addTag(productData.recipient);
  addTag(`${productData.recipient} gift`);
  addTag(`${productData.occasion} gift`);

  // Style + tone
  addTag(`${productData.style} style`);
  addTag(`${productData.tone} tone`);

  // Features
  if (Array.isArray(productData.features)) {
    productData.features.forEach((feature) => {
      feature
        .toLowerCase()
        .split(/[\s,]+/)
        .forEach((word) => addTag(word));
    });
  }

  // Callouts
  if (Array.isArray(productData.callouts)) {
    productData.callouts.forEach((callout) => {
      callout
        .toLowerCase()
        .split(/[\s,]+/)
        .forEach((word) => addTag(word));
    });
  }

  // Pad with filler terms if needed
  const fallbacks = ['handmade', 'unique', 'personalized', 'trending', 'gift idea', 'wedding vibes'];
  for (let i = 0; i < fallbacks.length && tags.length < 13; i++) {
    addTag(fallbacks[i]);
  }

  return tags.slice(0, 13);
}

// Export
module.exports = { generateTags };
