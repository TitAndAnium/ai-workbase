# Use Case: Gift Mode Copy Assistant

## 🎯 What it is

A reusable prompt engine that generates rich, emotionally resonant product descriptions tailored for Etsy’s Gift Mode algorithm. It helps Etsy sellers turn product features into story-driven copy that actually resonates with real people — not just SEO.

## 💡 Why I built this

Etsy’s Gift Mode shift makes generic product descriptions obsolete. You need words that *feel* like a gift. This module lets me:
- Automate quality gift copy without sounding like a robot
- A/B test emotional angles and tones
- Prototype for real Etsy listings or other gift-focused marketplaces

And honestly? It’s just fun to watch simple input transform into storytelling copy.

## ⚙️ How it works

This assistant uses a function (`generateGiftModeDescription`) located in:

functions/gift-mode-generator.js

You give it structured input like this:

```json
{
  "productType": "crewneck sweatshirt",
  "recipient": "bride-to-be",
  "occasion": "wedding",
  "tone": "warm",
  "style": "minimalist",
  "features": [
    "Classic 'WIFEY' lettering in bold white font",
    "Unisex fit for cozy oversized look",
    "Available in 6+ trending colors",
    "Sizes S to 5XL, inclusive and comfy",
    "Soft fleece lining for all-season wear"
  ]
}
It returns a formatted, markdown-ready description block like:

::: Overview :::
Looking for the perfect wedding gift for a bride-to-be? This crewneck sweatshirt is designed with care to make that special moment unforgettable...

::: Features :::
- Classic 'WIFEY' lettering in bold white font
- Unisex fit for cozy oversized look
...
That output can go directly into an Etsy listing, or be wrapped in other tooling.

🧪 Sample input file
See:

samples/etsy-wifey-listing.json
Use this to test or extend functionality.

🛠️ Dev Notes
Plays well with:

Any prompt-routing engine

Markdown formatting

Static site generators for marketplaces

AI model wrapping (e.g. OpenAI, Claude)

Roadmap ideas:

Add "recipient persona" layer (e.g. sentimental, practical, humorous)

Add multilingual output (gift copy in DE, FR, etc.)

Connect to tag validation for full listing optimization

🗃️ Related modules
functions/tag-validator.js: Validates Etsy SEO tag rules

samples/: Holds reusable inputs for testing/generation

Made by Tayfun van Zantvoort, who still believes good copy beats good ads.
