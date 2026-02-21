# Local Translation Storage

Ship translations as part of your build with the `loadTranslations` pattern — no CDN needed at runtime.

**[Live Demo](https://local-translation-storage.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app demonstrates how to bundle translations as static JSON files instead of fetching them from a CDN at runtime. Using the `loadTranslations` pattern, translation data is imported at build time, giving you zero-latency locale switching with no external dependencies.

## GT Features Used

- `<T>` — JSX translation
- `getGT` — Server-side string translations
- `<LocaleSelector>` — Language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/local-translation-storage.git
cd local-translation-storage
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
