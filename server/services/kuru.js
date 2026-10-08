import axios from 'axios'
import { config } from '../config.js'

class KuruService {
  constructor() {
    this.baseUrl = config.kuru.restUrl
    this.apiKey = config.kuru.apiKey
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}
    })
  }

  async getOrderBook(pair) {
    try {
      const response = await this.client.get(`/orderbook/${pair}`)
      return response.data
    } catch (error) {
      console.error('Kuru orderbook error:', error.message)
      return null
    }
  }

  async getTicker(pair) {
    try {
      const response = await this.client.get(`/ticker/${pair}`)
      return response.data
    } catch (error) {
      console.error('Kuru ticker error:', error.message)
      return null
    }
  }

  async getCandles(pair, interval = '1h', limit = 100) {
    try {
      const response = await this.client.get(`/candles/${pair}`, {
        params: { interval, limit }
      })
      return response.data
    } catch (error) {
      console.error('Kuru candles error:', error.message)
      return null
    }
  }

  async getTrades(pair, limit = 50) {
    try {
      const response = await this.client.get(`/trades/${pair}`, {
        params: { limit }
      })
      return response.data
    } catch (error) {
      console.error('Kuru trades error:', error.message)
      return null
    }
  }
}

export const kuruService = new KuruService()
