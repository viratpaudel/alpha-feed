import express from 'express'
import { hunyuanService } from '../services/hunyuan.js'

const router = express.Router()

// Analyze a chart screenshot
router.post('/analyze-chart', async (req, res) => {
  const { imageUrl, prompt } = req.body || {}
  if (!imageUrl) {
    return res.status(400).json({ error: 'imageUrl is required' })
  }
  const analysis = await hunyuanService.analyzeChart(imageUrl, prompt)
  return res.json({ analysis })
})

// Analyze a trading strategy
router.post('/analyze-strategy', async (req, res) => {
  const { description } = req.body || {}
  if (!description) {
    return res.status(400).json({ error: 'Strategy description is required' })
  }
  const analysis = await hunyuanService.analyzeStrategy(description)
  return res.json({ analysis })
})

export default router
