# NPS - Next Preparation System

NPS is a modern React educational web app for grade-skipping exam preparation. It includes grade-aware prep materials, randomized tests, progress tracking, an AI tutor interface, and accessibility settings saved locally.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints, usually `http://127.0.0.1:5173`.

## Build

```bash
npm run build
```

## Notes

- Grade, settings, and progress are saved in `localStorage`.
- The AI Help page currently uses placeholder tutor responses and is structured so an OpenAI API service can be added later.
- Curriculum and question data live in `src/data/curriculum.ts` for easy replacement with imported standards-aligned content.
