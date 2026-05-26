# SeoulTech Career Match

React + TypeScript + Vite prototype for an HCI career counseling matching flow. The app is frontend-only and uses local mock responses. It does not use a backend, database, real LLM API, API keys, or external services at runtime.

## Local Run

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

Create a production build:

```bash
npm run build
```

The production output is generated in:

```text
dist
```

## Vercel Deployment

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import the GitHub repository.
3. Use these project settings:
   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy the project.
5. Share the deployed URL with the team for testing.

## Team Testing Guide

1. Open the deployed URL.
2. Select an available date and time from the calendar.
3. Enter a short career concern.
4. Compare the two counselor types:
   - Practical Readiness / 현실 점검형
   - Emotional Support / 정서 공감형
5. Choose the counselor style that feels more suitable.
6. Continue the mock chat if desired.
7. Click `상담 신청하기`.
8. Submit feedback separately, for example through Google Forms.

## Deployment Notes

- This is a static frontend prototype.
- No backend setup is required.
- No environment variables are required.
- No API keys are required.
- Vercel should serve the generated `dist` directory after `npm run build`.
