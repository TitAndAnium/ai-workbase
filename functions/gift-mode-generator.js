/**
 * Gift Mode Listing Generator
 * Generates structured Etsy listing copy based on provided input fields.
 * Now with default fallback handling and safe field parsing.
 * 
 * Author: Tayfun van Zantvoort
 */

function generateListing(data) {
  const safe = (val, fallback = '') => (typeof val === 'string' ? val : fallback);
  const safeArray = (arr) => (Array.isArray(arr) ? arr : []);

  const productType = safe(data.productType, 'product');
  const recipient = safe(data.recipient, 'gift recipient');
  const occasion = safe(data.occasion, 'special moment');
  const tone = safe(data.tone, 'thoughtful');
  const style = safe(data.style, 'clean');

  const features = safeArray(data.features);
  const callouts = safeArray(data.callouts);

  const description = `
::: Overview :::
This ${productType} is the perfect gift for any ${occasion}, especially for the ${recipient}. Designed in a ${style} style with a ${tone} touch, it's crafted to feel personal and meaningful.

::: Features :::
${features.map((f) => '- ' + f).join('\n') || '- [No features listed]'}

::: Gift Highlights :::
${callouts.map((c) => '- ' + c).join('\n') || '- [No callouts listed]'}

::: Shipping and Processing :::
All items are made to order. Production time: 1–3 business days. Shipping options available at checkout.
`.trim();

  return description;
}

module.exports = { generateListing };
