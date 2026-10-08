import axios from 'axios'
import { config } from '../config.js'

class CoinGeckoService {
  constructor() {
    this.baseUrl = config.coingecko.apiUrl
    this.client = axios.create({ baseURL: this.baseUrl })
  }

  async getTokenPrice(tokenId) {
    try {
      const response = await this.client.get('/simple/price', {
        params: {
          ids: tokenId,
          vs_currencies: 'usd',
          include_market_cap: true,
          include_24hr_vol: true,
          include_24hr_change: true
        }
      })
      return response.data[tokenId] || {}
    } catch (error) {
      console.error('CoinGecko price error:', error.message)
      return {}
    }
  }

  async getTokens(query, limit = 10) {
    try {
      const response = await this.client.get('/search', {
        params: { query, per_page: limit }
      })
      return response.data.coins || []
    } catch (error) {
      console.error('CoinGecko search error:', error.message)
      return []
    }
  }

  async getMarketData() {
    try {
      const response = await this.client.get('/global')
      return response.data.data
    } catch (error) {
      console.error('CoinGecko market data error:', error.message)
      return {}
    }
  }
}

export const coingeckoService = new CoinGeckoService()
