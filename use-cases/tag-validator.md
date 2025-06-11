# Use Case: Tag Validator

## 🔍 What it does
Validates Etsy tags against platform rules and SEO logic:
- Max 20 characters per tag
- ASCII-only (no emoji, accented letters, etc.)
- No duplicates
- No empty or whitespace-only entries

## 🧠 Why I use it
Etsy enforces strict tag rules, and violating them hurts your visibility or throws listing errors. This validator catches issues before they reach the platform. I use it to pre-check tags for listings, generators, or client audits.

## ⚙️ How it works
It loads a JSON array of 20 tags from a sample input file, then runs them through the `validateTags()` function defined in `functions/tag-validator.js`.

You’ll get back either:
- ✅ `All tags are valid.`
- Or a list of detailed issues (duplicates, illegal characters, length, etc.)

## 🧪 Sample test file
See:

```bash
samples/etsy-tag-test.json
You can modify this to test edge cases or to validate real listing data.

🛠️ Output example
Given the sample input above, the validator returns something like:

Tag "weddinggift" is a duplicate.
Tag "too-long-tag-for-etsy-shop-discovery" is too long (38 characters).
Tag "✨sparkly" contains non-ASCII characters.
Tag "   " is empty.
Tag "🔥hot" contains non-ASCII characters.
🧩 Where this fits
This can be used:

As part of listing pipelines

Inside AI listing generators (e.g., to auto-fix tags or warn the user)

In bulk auditing tools

As a standalone utility during manual SEO review

🧠 Notes
This validator is intentionally strict. Etsy is too.
No fluff, no guessing — just validation you can trust before you publish.
