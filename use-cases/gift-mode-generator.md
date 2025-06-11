# Use Case: Gift Mode Generator

## 🔍 What it does
Generates rich, emotionally resonant product descriptions tailored for Etsy’s Gift Mode algorithm. It transforms structured product data into compelling markdown content suitable for Etsy listings.

## 🧠 Why I use it
Etsy’s Gift Mode emphasizes personalized and heartfelt product descriptions. This generator automates the creation of such content, ensuring consistency and saving time.

## ⚙️ How it works
The function `generateGiftModeDescription` located in `functions/gift-mode-generator.js` takes structured input and returns a formatted markdown string.

## 🧪 Sample input
Refer to `samples/etsy-wifey-listing.json` for an example of the expected input structure.

## 🛠️ Output example
The function returns a markdown-formatted string with sections like Overview, Features, and Why it's a great gift, tailored to the input data.

## 🧩 Integration
This generator can be integrated into listing pipelines, AI listing generators, or used as a standalone utility during manual content creation.

## 🧠 Notes
Ensure that the input JSON structure matches the expected format to avoid errors during generation.
