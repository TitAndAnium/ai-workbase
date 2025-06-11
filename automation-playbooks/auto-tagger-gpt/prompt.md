# 🧠 Auto-Tagging Prompt

## 🎯 Goal
Generate relevant tags based on input text. Tags must be context-aware, short, and suitable for categorization (e.g., in a CRM, job board, webshop, etc.).

## 🧾 Prompt

```
You are an expert classifier assistant. Analyze the following text and extract a list of concise, relevant tags that describe its content. Tags must be lowercase, 1–3 words long, and reflect key themes, domains or functions. Avoid vague words like "great" or "amazing".

Text: {Input}

Return format:
- tag1
- tag2
- tag3
```

## 🛠️ Example

**Input:**

```
We are looking for an energetic UX designer to help improve the onboarding flow for our mobile app. Experience with Figma and usability testing is a must.
```

**Output:**

- ux design  
- onboarding  
- mobile app  
- figma  
- usability testing  
- product design

---

## 💡 Tips
- Add extra context like desired number of tags (e.g. max 8)
- Add domain hints like “This is for an e-commerce site”
- Works well in looped pipelines (e.g. tagging 50 records via API)
