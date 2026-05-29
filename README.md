# SeoulTech Career Match

React + TypeScript + Vite prototype for an HCI career counseling matching flow.

The app supports two study conditions:

- Baseline: basic appointment flow
- Proposed: counselor-style preview with a short LLM-backed mock counseling session

The LLM feature is served through a Vercel serverless function at `/api/chat`.
The browser never receives the API key.

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

## LLM Setup

The project uses Gemini API with `gemini-2.5-flash-lite`, Google's cost-efficient model for lightweight text generation.

Set this environment variable in Vercel:

```text
GEMINI_API_KEY=your_gemini_api_key_here
```

`GOOGLE_API_KEY` is also accepted as a fallback variable name.

Useful diagnostics after deployment:

```text
/api/health
/api/gemini-test
/api/chat
```

If the LLM request fails or the key is not configured, the app falls back to the existing local mock response generator.

## Vercel Deployment

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import the GitHub repository.
3. Use these project settings:
   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add the environment variable:
   - `GEMINI_API_KEY`
5. Deploy the project.
6. Share the deployed URL with the team for testing.

## Team Testing Guide

1. Open the deployed URL.
2. Use the assigned condition order:
   - Baseline first, then Proposed
   - or Proposed first, then Baseline
3. Select an available date and time.
4. Enter a short career concern.
5. In the Proposed condition, compare counselor styles and continue the mock counseling session if desired.
6. The mock counseling session is limited to 3 follow-up turns.
7. Click `상담 신청하기`.
8. Complete the Likert survey after each condition.
9. After both conditions are complete, answer the open-ended comparison questions.

## Deployment Notes

- No database is used.
- No user data is stored by this project.
- The Gemini API key must only be stored as a Vercel environment variable.
- The current deployment URL can stay the same if this repository remains connected to the same Vercel project.
