import express from 'express'

const router = express.Router()

// Execute a trade (stub for on-chain integration)
router.post('/execute', async (req, res) => {
  const { side, token, amount, price, slippage = 0.25 } = req.body || {}

  if (!side || !token || !amount || !price) {
    return res.status(400).json({ error: 'side, token, amount, and price are required' })
  }

  // TODO: Integrate viem for on-chain execution
  const txHash = '0x' + Math.random().toString(16).slice(2, 66)

  return res.json({
    success: true,
    status: 'Submitted',
    txHash,
    order: { side, token, amount, price, slippage },
    message: `${side} order for ${amount} ${token} submitted to blockchain`
  })
})

// Get user's trade history
router.get('/history', async (req, res) => {
  // TODO: Query from DB
  return res.json({
    trades: [
      { id: 1, side: 'Buy', token: 'MON', amount: 100, price: '$0.87', pnl: '+8.4%', timestamp: new Date().toISOString() }
    ]
  })
})

// Get user's open positions
router.get('/positions', async (req, res) => {
  // TODO: Query from DB or on-chain
  return res.json({
    positions: [
      { token: 'MON', amount: 100, entryPrice: '$0.87', currentPrice: '$0.94', pnl: '+8.4%' }
    ]
  })
})

export default router
