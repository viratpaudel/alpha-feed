// Database service (stub for PostgreSQL integration)
// Will be replaced with actual pg client once DB is set up

import { config } from '../config.js'

class DatabaseService {
  constructor() {
    this.isConnected = false
    // TODO: Initialize actual PostgreSQL connection
    // import pg from 'pg'
    // this.pool = new pg.Pool({ connectionString: config.database.url })
  }

  async connect() {
    try {
      console.log('Database connection not yet configured')
      this.isConnected = false
    } catch (error) {
      console.error('Database connection error:', error.message)
      this.isConnected = false
    }
  }

  async query(sql, params) {
    if (!this.isConnected) {
      console.warn('Database not connected, returning mock data')
      return []
    }
    // TODO: Execute actual query
  }

  async getUserById(id) {
    // Stub implementation
    return { id, wallet: '0x...', createdAt: new Date() }
  }

  async getTraderStats(traderHandle) {
    // Stub implementation
    return {
      handle: traderHandle,
      roi: '+42.8%',
      pnl: '$12,420',
      winRate: '71%'
    }
  }
}

export const dbService = new DatabaseService()
