# GetAuto — Architecture Summary

> Generated from static analysis on 2026-09-28.

## Components

| Layer | Present | Evidence |
| --- | --- | --- |
| Presentation / UI | yes | 0 route module(s), 4 component file(s) |
| API / server | no | 0 handler(s), entrypoints: none |
| Domain / business logic | unclear | no dedicated layer detected |
| Persistence | no | no database client |
| Authentication | no | none detected |

## Detected frameworks and libraries

| Package | Purpose (inferred) |
| --- | --- |
| `@vitejs/plugin-react` | dependency |
| `autoprefixer` | dependency |
| `dexie` | dependency |
| `dexie-react-hooks` | dependency |
| `dotenv` | dependency |
| `nodemailer` | dependency |
| `postcss` | dependency |
| `react` | React |
| `react-dom` | React |
| `react-router-dom` | dependency |
| `tailwindcss` | Tailwind CSS |
| `twilio` | dependency |
| `vite` | Vite |
| `vite-plugin-pwa` | dependency |

## Runtime and delivery

| Concern | Finding |
| --- | --- |
| Language mix | JavaScript, HTML, CSS |
| Package manager | npm |
| Container | none |
| Serverless / PaaS | not configured for Vercel |
| CI | none detected |
| Tests | **none detected** |
| Type safety | none detected |

## Environment variables referenced

- `OTP_EMAIL_FROM`
- `PORT`
- `SMTP_HOST`
- `SMTP_PASS`
- `SMTP_PORT`
- `SMTP_USER`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`
