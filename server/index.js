import express from 'express'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import dotenv from 'dotenv'
import {
  feedPosts,
  traders,
  marketOverview,
  strategies,
  automations,
  aiAnalysis,
  profile,
  notifications
} from './data.js'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT || 4000)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const clientDist = path.resolve(__dirname, '../dist')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'alpha-feed-api', timestamp: new Date().toISOString() })
})

app.get('/api/feed', (_req, res) => {
  res.json({ posts: feedPosts })
})

app.get('/api/traders', (_req, res) => {
  res.json({ traders })
})

app.get('/api/strategies', (_req, res) => {
  res.json({ strategies })
})

app.get('/api/markets', (_req, res) => {
  res.json({ marketOverview })
})

app.get('/api/automations', (_req, res) => {
  res.json({ automations })
})

app.get('/api/profile', (_req, res) => {
  res.json({ profile })
})

app.get('/api/notifications', (_req, res) => {
  res.json({ notifications })
})

app.get('/api/ai-analysis', (_req, res) => {
  res.json({ aiAnalysis })
})

app.post('/api/ai/analyze', (req, res) => {
  const prompt = String(req.body?.prompt || '').trim()

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required.' })
  }

  const response = {
    summary: 'MON is forming a breakout structure above prior resistance with strong relative volume expansion. The setup favors continuation while risk remains defined below the breakout retest area.',
    bias: 'Bullish',
    setup: 'Breakout retest',
    stop: '$0.82',
    target: '$1.02',
    riskReward: '3.0',
    confidence: '82%',
    prompt
  }

  return res.json({ analysis: response })
})

app.post('/api/trades/execute', (req, res) => {
  const { side, token, amount, price } = req.body || {}

  if (!side || !token || !amount || !price) {
    return res.status(400).json({ error: 'side, token, amount, and price are required.' })
  }

  return res.json({
    success: true,
    status: 'Submitted',
    txHash: '0x7f2d9a1e5c3f8d49a521cb0d4d9a421f9aa2e86c',
    message: `${side} order for ${amount} ${token} queued successfully.`
  })
})

app.post('/api/copy-trading/configure', (req, res) => {
  const { trader, capitalAllocation, maxTradeSize, maxDailyLoss, copyPercentage } = req.body || {}

  if (!trader) {
    return res.status(400).json({ error: 'Trader is required.' })
  }

  return res.json({
    success: true,
    trader,
    configuration: {
      capitalAllocation,
      maxTradeSize,
      maxDailyLoss,
      copyPercentage,
      riskWarning: 'Copy trading does not guarantee returns and may result in loss of capital.'
    }
  })
})

app.use(express.static(clientDist))
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API route not found.' })
  }

  return res.sendFile(path.join(clientDist, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`AlphaFeed API listening on http://localhost:${PORT}`)
})
