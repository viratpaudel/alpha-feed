import express from 'express'
import { kuruService } from '../services/kuru.js'
import { coingeckoService } from '../services/coingecko.js'

const router = express.Router()

// Get real-time price from Kuru
router.get('/kuru/:pair', async (req, res) => {
  const { pair } = req.params
  const ticker = await kuruService.getTicker(pair)
  if (!ticker) {
    return res.status(500).json({ error: 'Unable to fetch price data from Kuru' })
  }
  return res.json({ pair, ticker })
})

// Get order book from Kuru
router.get('/kuru/orderbook/:pair', async (req, res) => {
  const { pair } = req.params
  const orderbook = await kuruService.getOrderBook(pair)
  if (!orderbook) {
    return res.status(500).json({ error: 'Unable to fetch order book from Kuru' })
  }
  return res.json({ pair, orderbook })
})

// Get candles from Kuru
router.get('/kuru/candles/:pair', async (req, res) => {
  const { pair } = req.params
  const { interval = '1h', limit = 100 } = req.query
  const candles = await kuruService.getCandles(pair, interval, limit)
  if (!candles) {
    return res.status(500).json({ error: 'Unable to fetch candles from Kuru' })
  }
  return res.json({ pair, interval, candles })
})

// Get token price from CoinGecko
router.get('/coingecko/:tokenId', async (req, res) => {
  const { tokenId } = req.params
  const price = await coingeckoService.getTokenPrice(tokenId)
  if (!price || !Object.keys(price).length) {
    return res.status(404).json({ error: 'Token not found' })
  }
  return res.json({ tokenId, price })
})

// Search tokens on CoinGecko
router.get('/search', async (req, res) => {
  const { query = '', limit = 10 } = req.query
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' })
  }
  const tokens = await coingeckoService.getTokens(query, limit)
  return res.json({ query, tokens })
})

// Get global market data from CoinGecko
router.get('/market-data', async (req, res) => {
  const marketData = await coingeckoService.getMarketData()
  return res.json({ marketData })
})

export default router
