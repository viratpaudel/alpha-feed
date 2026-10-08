import express from 'express'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import dotenv from 'dotenv'
import { config } from './config.js'
import pricesRouter from './routes/prices.js'
import aiRouter from './routes/ai.js'
import tradesRouter from './routes/trades.js'
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
const PORT = config.port
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const clientDist = path.resolve(__dirname, '../dist')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'alpha-feed-api', timestamp: new Date().toISOString() })
})

// Mock endpoints (for development)
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

// Real API routes
app.use('/api/prices', pricesRouter)
app.use('/api/ai', aiRouter)
app.use('/api/trades', tradesRouter)

// Serve static frontend
app.use(express.static(clientDist))
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API route not found' })
  }
  return res.sendFile(path.join(clientDist, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`\n🚀 AlphaFeed API running on http://localhost:${PORT}`)
  console.log(`📊 Feed endpoint: http://localhost:${PORT}/api/feed`)
  console.log(`💰 Prices endpoint: http://localhost:${PORT}/api/prices/...`)
  console.log(`🤖 AI endpoint: http://localhost:${PORT}/api/ai/...`)
  console.log(`💹 Trades endpoint: http://localhost:${PORT}/api/trades/...`)
  console.log(`\nEnvironment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`Database: ${process.env.DATABASE_URL ? '✓ Configured' : '✗ Not configured'}`)
  console.log(`Kuru API: ${process.env.KURU_API_KEY ? '✓ Configured' : '✗ Not configured'}`)
  console.log(`Hunyuan AI: ${process.env.HUNYUAN_API_KEY ? '✓ Configured' : '✗ Not configured'}`)
  console.log()
})
