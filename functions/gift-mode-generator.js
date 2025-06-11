// gift-mode-generator.js

/**
 * Gift Mode Copy Assistant
 * Generates a rich, emotionally resonant Etsy product description
 * tailored for Etsy’s Gift Mode and search algorithm.
 *
 * Author: Tayfun van Zantvoort
 */

function generateGiftModeDescription({ productType, recipient, occasion, tone, style, features, callouts }) {
  const readableFeatures = features && features.length > 0
    ? features.map(f => `- ${f}`).join('\n')
    : '';

  return `
::: Overview :::
Looking for the perfect ${occasion.toLowerCase()} gift for a ${recipient}? This ${productType} is designed with care to make that special moment unforgettable. Whether you're gifting or treating yourself, this piece blends emotion with timeless style.

::: Features :::
${readableFeatures}

::: Why it's a great gift :::
Every ${productType} in this collection is thoughtfully crafted to create lasting memories. It's not just about the product, it's about the moment — wrapped in a gesture that speaks volumes.

::: Style & Tone :::
Expect a ${tone}-toned vibe with a ${style} touch. This isn't generic — it's uniquely tailored to resonate with modern gift-givers who care about quality, meaning, and aesthetics.

::: Shipping and Processing :::
Fast production and worldwide shipping available. Need it in time for the big day? Let us know — we're here to help.
  `.trim();
}

// Export function
module.exports = { generateGiftModeDescription };

