import axios from 'axios'
import { config } from '../config.js'

class HunyuanService {
  constructor() {
    this.baseUrl = config.hunyuan.apiUrl
    this.apiKey = config.hunyuan.apiKey
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}
    })
  }

  async analyzeChart(imageUrl, prompt) {
    try {
      const response = await this.client.post('/analyze', {
        image_url: imageUrl,
        prompt: prompt || 'Analyze this trading chart and provide actionable insights on price action, support/resistance, and entry/exit points.'
      })
      return response.data
    } catch (error) {
      console.error('Hunyuan chart analysis error:', error.message)
      return {
        summary: 'Unable to analyze at this moment. Please try again.',
        bias: 'Unknown',
        setup: 'Unknown',
        confidence: '0%'
      }
    }
  }

  async analyzeStrategy(strategyDescription) {
    try {
      const response = await this.client.post('/analyze-strategy', {
        description: strategyDescription,
        prompt: 'Analyze this trading strategy for edge, risk management, and market conditions.'
      })
      return response.data
    } catch (error) {
      console.error('Hunyuan strategy analysis error:', error.message)
      return { summary: 'Analysis unavailable.' }
    }
  }
}

export const hunyuanService = new HunyuanService()
