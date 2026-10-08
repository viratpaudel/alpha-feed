export const feedPosts = [
  {
    id: 1,
    user: 'alpha_king',
    handle: '@alpha_king',
    wallet: '0x7A9...E3F4',
    time: '2m ago',
    text: '$MON breakout above resistance. Watching the 0.85–0.90 range. Entry: $0.87 Target: $1.02 Stop: $0.82 Risk/reward: 3.0',
    token: 'MON',
    entry: '$0.87',
    current: '$0.94',
    pnl: '+8.4%',
    signal: 'Breakout',
    leverage: '3.5x',
    tradeMode: 'Long'
  },
  {
    id: 2,
    user: 'latency_s',
    handle: '@latency_s',
    wallet: '0xF1A...B922',
    time: '18m ago',
    text: 'Liquidity sweep pattern on $SOL. Waiting for reclaim of prior VWAP before adding. Trend remains intact.',
    token: 'SOL',
    entry: '$142.80',
    current: '$146.10',
    pnl: '+4.6%',
    signal: 'Trend continuation',
    leverage: '2.0x',
    tradeMode: 'Long'
  },
  {
    id: 3,
    user: 'curve_drift',
    handle: '@curve_drift',
    wallet: '0xC4F...96B1',
    time: '1h ago',
    text: 'Mean reversion at key support on $ARB. Risk is low if macro stays stable. Scale in on confirmation.',
    token: 'ARB',
    entry: '$0.92',
    current: '$0.88',
    pnl: '-3.1%',
    signal: 'Reversion',
    leverage: '1.8x',
    tradeMode: 'Short'
  }
]

export const traders = [
  { name: '@alpha_king', roi: '+42.8%', pnl: '$12,420', winRate: '71%', drawdown: '8.2%', trades: '278', copiers: '438', risk: 'Medium', followers: '18.2k' },
  { name: '@nova_flow', roi: '+31.4%', pnl: '$9,870', winRate: '68%', drawdown: '9.5%', trades: '192', copiers: '301', risk: 'Low', followers: '12.4k' },
  { name: '@onchainjade', roi: '+27.9%', pnl: '$8,240', winRate: '66%', drawdown: '10.1%', trades: '161', copiers: '225', risk: 'Medium', followers: '9.3k' }
]

export const strategies = [
  { name: 'MON Momentum Breakout', roi: '+31.4%', winRate: '68%', drawdown: '9.7%', trades: '143', risk: 'Medium' },
  { name: 'Liquidity Sweep', roi: '+24.9%', winRate: '63%', drawdown: '11.1%', trades: '118', risk: 'High' },
  { name: 'DCA Smart Accumulation', roi: '+18.7%', winRate: '61%', drawdown: '7.1%', trades: '264', risk: 'Low' }
]

export const marketOverview = [
  { symbol: 'MON', price: '$0.94', change: '+6.8%', volume: '$76.2M', social: 'High' },
  { symbol: 'SOL', price: '$146.10', change: '+2.4%', volume: '$1.1B', social: 'Very High' },
  { symbol: 'BTC', price: '$62,410', change: '+1.7%', volume: '$4.2B', social: 'High' }
]

export const automations = [
  { id: 1, name: 'MON breakout trigger', status: 'Enabled', last: '2h ago', next: 'Tomorrow 09:00', hash: '0x7f2..18a3' },
  { id: 2, name: 'BTC 8% dip buy', status: 'Paused', last: '1d ago', next: 'Queue', hash: '0x9b4..4ea7' }
]

export const aiAnalysis = {
  summary: 'MON is forming a breakout structure above prior resistance and the relative volume expansion supports continuation. Risk remains on close below $0.86.',
  bias: 'Bullish',
  setup: 'Breakout retest',
  stop: '$0.82',
  target: '$1.02',
  confidence: '82%'
}

export const profile = {
  handle: '@alpha_king',
  wallet: '0x7A9...E3F4',
  joined: 'Joined Mar 2024',
  followers: '18.2k',
  following: '843',
  totalTrades: '2,310',
  winRate: '71%',
  avgReturn: '+18.4%',
  totalPnl: '$12.4k'
}

export const notifications = [
  { id: 1, message: '@alpha_king posted a new breakout idea', time: '2 minutes ago' },
  { id: 2, message: 'BTC dip-buy automation was triggered', time: '1 hour ago' },
  { id: 3, message: 'Your copy-trade allocation on @nova_flow updated', time: '3 hours ago' }
]
