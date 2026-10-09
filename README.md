# AlphaFeed

AlphaFeed is a crypto trading social terminal UI prototype built with React, Vite, TypeScript, and an Express API. It presents a polished dashboard for market discovery, trader discovery, copy trading, AI-assisted analysis, and workflow automation in a single application.

## Overview

This project simulates a modern on-chain trading feed for crypto communities. The interface includes:

- A social media-style home feed for trader updates and trade ideas
- Trending token and strategy discovery panels
- A trading terminal with an order book and execution workflow
- Copy-trading cards and risk configuration modal
- Strategy automation and workflow-building views
- AI Lab for prompt-driven market analysis and chart insights
- User profile and notifications screens

AlphaFeed is designed as both a frontend experience and a lightweight backend scaffold for future integrations with live market data and wallet/auth flows.

## Tech Stack

- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS
- UI motion: Framer Motion
- Routing: React Router
- Backend: Express.js
- Data validation: Zod
- Tooling: Concurrently, PostCSS, Autoprefixer

## Project Structure

```text
alpha-feed/
├── .env.example
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── server/
│   ├── config.js
│   ├── data.js
│   ├── index.js
│   ├── routes/
│   │   ├── ai.js
│   │   ├── prices.js
│   │   └── trades.js
│   └── services/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
└── dist/   # built app output (generated after build)
```

## Features

### Social trading feed
A feed-driven dashboard where traders post trade ideas, signal updates, and market commentary. Each post includes token metadata, PnL, entry prices, leverage, and quick action buttons.

### Trading terminal
Users can open a simulated trading panel featuring:

- Buy / Sell order selection
- Live-style order book display
- Execution summary with fees and slippage
- Multi-step transaction status flow

### Copy trading
The app includes support for viewing popular traders, copying positions, and reviewing risk controls before confirming a copy-trading setup.

### Strategy and automation screens
Users can explore strategies, trigger conditions, and automation workflows for trading actions such as price or volume thresholds.

### AI Lab
A mock AI analysis section allows chart or trading screenshots plus prompts to simulate Hunyuan-powered insights.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Configure environment

Copy the sample environment file and adjust values as needed:

```bash
cp .env.example .env
```

The sample config includes placeholders for:

- Express server port
- frontend API base URL
- database URL
- wallet authentication settings
- Kuru exchange API credentials
- Hunyuan AI integration
- JWT secret

### Run the app

Start both the frontend and backend together:

```bash
npm run dev
```

This runs:

- Vite front-end client
- Express API server with watch mode

### Run production build

```bash
npm run build
```

### Run the API only

```bash
npm run server
```

## API Endpoints

The backend exposes mock and integration-ready endpoints including:

- `GET /api/health`
- `GET /api/feed`
- `GET /api/traders`
- `GET /api/strategies`
- `GET /api/markets`
- `GET /api/automations`
- `GET /api/profile`
- `GET /api/notifications`
- `GET /api/ai-analysis`
- `GET /api/prices/...`
- `GET /api/ai/...`
- `GET /api/trades/...`

These endpoints are defined in the Express app and can be extended for real market-data providers or wallet-backed execution.

## Environment Variables

The repository includes an example configuration in `.env.example` with the following categories:

- Server config: `PORT`, `NODE_ENV`
- API config: `VITE_API_URL`
- Database: `DATABASE_URL`
- Wallet Auth: `WALLET_AUTH_ENABLED`, `SIWE_DOMAIN`
- Market APIs: `KURU_API_KEY`, `KURU_WS_URL`, `KURU_REST_URL`, `COINGECKO_API_URL`
- AI: `HUNYUAN_API_KEY`, `HUNYUAN_API_URL`
- Session security: `JWT_SECRET`, `JWT_EXPIRES_IN`

## Notes

This project contains a polished frontend prototype and an Express backend scaffold. Some sections are intentionally mock-data driven for rapid design iteration and can be connected to real APIs or a database in a production workflow.

## Contributing

Feel free to fork the repository and adapt the project for your own trading app or demo. If you are extending the backend, keep the existing API patterns consistent and add any new services under the `server/` directory.
