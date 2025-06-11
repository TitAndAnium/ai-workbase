# 🏷️ Use Case: Tag Generator

## 🔍 What it does
Generates 13 SEO-optimized Etsy tags based on structured product input such as features, style, tone, recipient, and occasion. It applies Etsy’s strict tag rules (max 20 characters, ASCII only, no duplicates) while extracting meaningful keywords from the listing context.

## 🧠 Why I use it
Because guessing tags is inefficient, inconsistent, and unscalable. This script gives me a repeatable way to extract search-optimized tags from my own product data — without manual brainstorms or copy-pasting eRank ideas. It's fast, compliant, and always stays within Etsy’s tagging rules.

## ⚙️ How it works
- Tags are generated from `productType`, `recipient`, `occasion`, `tone`, `style`, `features[]`, and `callouts[]`.
- Fallback keywords are used if fewer than 13 unique tags are found.
- Tags are cleaned for ASCII-only, trimmed, lowercased, and de-duplicated.
- Final output: exactly 13 tags, ready to paste into Etsy.

## 📥 Input Format
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
  ],
  "callouts": [
    "Matching items available for bridal party",
    "Perfect for engagement photos, bridal showers, honeymoon"
  ]
}
🛠️ Output Example
1. crewneck sweatshirt
2. wedding
3. bride-to-be
4. bride-to-be gift
5. wedding gift
6. minimalist style
7. warm tone
8. wifey
9. oversized
10. comfy
11. fleece
12. trending
13. handmade
💡 Usage Tips
Keep your features and callouts fields short and punchy — single sentences work best.

Don't manually clean your data, the validator inside the generator takes care of length, ASCII and uniqueness.

You can test the output via node functions/test-tag-generator.js

🚧 Limitations
This generator doesn’t know marketplace trends — it's rule-based, not data-trained. You can always layer trend data later.

Tags may lack nuance for highly niche items. Inject more signal into features if needed.

Ready for plug-and-play use or for embedding in your Etsy backend.
