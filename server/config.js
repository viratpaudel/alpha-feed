export const config = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/alpha_feed'
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'dev-secret-change-in-prod',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
    siweEnabled: process.env.WALLET_AUTH_ENABLED === 'true',
    siweDomain: process.env.SIWE_DOMAIN || 'localhost:3000'
  },
  kuru: {
    apiKey: process.env.KURU_API_KEY,
    wsUrl: process.env.KURU_WS_URL || 'wss://api.kuru.io/v1/ws',
    restUrl: process.env.KURU_REST_URL || 'https://api.kuru.io/v1'
  },
  hunyuan: {
    apiKey: process.env.HUNYUAN_API_KEY,
    apiUrl: process.env.HUNYUAN_API_URL || 'https://api.hunyuan.cloud/v1'
  },
  coingecko: {
    apiUrl: process.env.COINGECKO_API_URL || 'https://api.coingecko.com/api/v3'
  }
}
