import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  CircleDollarSign,
  Compass,
  Copy,
  Flame,
  FolderCog,
  Home,
  MessageSquare,
  Network,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  User,
  Wallet2,
  Zap
} from 'lucide-react'
import { NavLink, Route, Routes } from 'react-router-dom'
import type { ReactNode } from 'react'

const navItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Explore', to: '/explore', icon: Compass },
  { label: 'Following', to: '/following', icon: User },
  { label: 'Trade', to: '/trade', icon: BarChart3 },
  { label: 'Copy Trading', to: '/copy-trading', icon: Copy },
  { label: 'Strategies', to: '/strategies', icon: TrendingUp },
  { label: 'Automations', to: '/automations', icon: FolderCog },
  { label: 'AI Lab', to: '/ai-lab', icon: Sparkles },
  { label: 'Notifications', to: '/notifications', icon: Bell },
  { label: 'Bookmarks', to: '/bookmarks', icon: Bookmark },
  { label: 'Profile', to: '/profile', icon: User }
]

const filters = ['For You', 'Following', 'Trending', 'Trades', 'Strategies', 'High PnL', 'New Traders', 'Verified Traders']

const posts = [
  {
    id: 1,
    user: 'alpha_king',
    handle: '@alpha_king',
    wallet: '0x7A9...E3F4',
    time: '2m ago',
    text: '$MON breakout above resistance. Watching the 0.85–0.90 range. Entry: $0.87 Target: $1.02 Stop: $0.82 Risk/reward: 3.0',
    chart: [32, 36, 30, 40, 38, 44, 47, 52, 58, 60, 64, 70],
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
    chart: [54, 52, 58, 60, 62, 64, 59, 63, 68, 71, 75, 78],
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
    chart: [38, 41, 43, 42, 39, 35, 37, 34, 32, 30, 33, 36],
    token: 'ARB',
    entry: '$0.92',
    current: '$0.88',
    pnl: '-3.1%',
    signal: 'Reversion',
    leverage: '1.8x',
    tradeMode: 'Short'
  }
]

const trendingTraders = [
  { name: 'Alpha King', roi: '+42.8%', pnl: '$12.4k', winRate: '71%', followers: '18.2k', risk: 'Medium' },
  { name: 'Nova Flow', roi: '+31.4%', pnl: '$9.8k', winRate: '68%', followers: '12.4k', risk: 'Low' },
  { name: 'Mantis Vault', roi: '+27.9%', pnl: '$8.1k', winRate: '66%', followers: '10.6k', risk: 'Medium' },
  { name: 'OnchainJade', roi: '+24.6%', pnl: '$7.2k', winRate: '64%', followers: '9.1k', risk: 'High' }
]

const strategies = [
  { name: 'MON Momentum Breakout', roi: '+31.4%', winRate: '68%', drawdown: '9.7%', trades: '143', risk: 'Medium' },
  { name: 'Liquidity Sweep', roi: '+24.9%', winRate: '63%', drawdown: '11.1%', trades: '118', risk: 'High' },
  { name: 'DCA Smart Accumulation', roi: '+18.7%', winRate: '61%', drawdown: '7.1%', trades: '264', risk: 'Low' }
]

const tokenCards = [
  { symbol: 'MON', price: '$0.94', change: '+6.8%', volume: '$76.2M', social: 'High' },
  { symbol: 'SOL', price: '$146.10', change: '+2.4%', volume: '$1.1B', social: 'Very High' },
  { symbol: 'BTC', price: '$62,410', change: '+1.7%', volume: '$4.2B', social: 'High' }
]

const copyTraders = [
  { name: '@alpha_king', roi: '+42.8%', pnl: '$12,420', winRate: '71%', drawdown: '8.2%', trades: '278', copiers: '438', risk: 'Medium' },
  { name: '@nova_flow', roi: '+31.4%', pnl: '$9,870', winRate: '68%', drawdown: '9.5%', trades: '192', copiers: '301', risk: 'Low' },
  { name: '@onchainjade', roi: '+27.9%', pnl: '$8,240', winRate: '66%', drawdown: '10.1%', trades: '161', copiers: '225', risk: 'Medium' }
]

const automationTemplates = [
  { id: 1, name: 'MON breakout trigger', status: 'Enabled', last: '2h ago', next: 'Tomorrow 09:00', hash: '0x7f2..18a3' },
  { id: 2, name: 'BTC 8% dip buy', status: 'Paused', last: '1d ago', next: 'Queue', hash: '0x9b4..4ea7' }
]

const orderBook = [
  { price: '0.9184', size: '3.20', side: 'buy' },
  { price: '0.9178', size: '2.80', side: 'buy' },
  { price: '0.9169', size: '4.11', side: 'buy' },
  { price: '0.9144', size: '1.90', side: 'sell' },
  { price: '0.9148', size: '2.12', side: 'sell' },
  { price: '0.9156', size: '3.40', side: 'sell' }
]

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="mx-auto flex min-h-screen max-w-[1800px] gap-4 p-4">
        <aside className="card-surface sticky top-4 hidden h-[calc(100vh-2rem)] w-[260px] flex-col rounded-2xl p-4 lg:flex">
          <div className="flex items-center gap-3 px-2 pb-4 pt-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-green">A</div>
            <div>
              <div className="text-lg font-semibold">AlphaFeed</div>
              <div className="text-xs text-subtext">Monad social terminal</div>
            </div>
          </div>

          <nav className="mt-6 space-y-1.5">
            {navItems.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                    isActive ? 'bg-white/8 text-text' : 'text-subtext hover:bg-white/4 hover:text-text'
                  }`
                }
              >
                <Icon size={17} />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto space-y-4 border-t border-white/10 pt-4">
            <div className="rounded-xl border border-green/20 bg-green/5 p-3">
              <div className="flex items-center justify-between text-xs text-subtext">
                <span>Wallet</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-green/10 px-2 py-0.5 text-[10px] font-medium text-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  Connected
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-panel2 text-xs font-medium">0x7A</div>
                  <div>
                    <div className="text-sm font-medium">0x7A9...E3F4</div>
                    <div className="text-[11px] text-subtext">$8,240.12</div>
                  </div>
                </div>
                <Wallet2 size={15} className="text-subtext" />
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm">
              <div className="flex items-center gap-2 text-subtext">
                <Network size={14} />
                Network
              </div>
              <span className="rounded-full border border-green/20 bg-green/10 px-2 py-0.5 text-[10px] font-medium text-green">Monad</span>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/3 px-3 py-2.5 text-sm text-subtext hover:text-text">
              <Settings size={15} />
              Settings
            </button>
          </div>
        </aside>

        <main className="flex-1 rounded-3xl border border-white/8 bg-[#0b1217]/80 p-4 shadow-glow">
          <header className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-3 py-2.5">
              <Search size={16} className="text-subtext" />
              <input
                aria-label="Search"
                className="w-full bg-transparent text-sm text-text placeholder:text-subtext focus:outline-none"
                placeholder="Search traders, tokens, strategies..."
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-white/10 bg-white/3 p-2.5 text-subtext hover:text-text">
                <Bell size={16} />
              </button>
              <button className="rounded-xl border border-green/20 bg-green/10 px-4 py-2 text-sm font-medium text-green hover:bg-green/15">
                Create Post
              </button>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/following" element={<FollowingPage />} />
            <Route path="/trade" element={<TradingTerminalPage />} />
            <Route path="/copy-trading" element={<CopyTradingPage />} />
            <Route path="/strategies" element={<StrategiesPage />} />
            <Route path="/automations" element={<AutomationPage />} />
            <Route path="/ai-lab" element={<AILabPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              index === 0
                ? 'border-green/20 bg-green/10 text-green'
                : 'border-white/10 bg-white/3 text-subtext hover:text-text'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.5fr_0.85fr]">
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>

        <div className="space-y-4">
          <Panel title="Trending Traders" action="View all">
            <div className="space-y-3">
              {trendingTraders.map((trader, index) => (
                <div key={trader.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/3 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-green/30 to-blue/30 text-xs font-semibold text-text">
                      {trader.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{trader.name}</div>
                      <div className="text-[11px] text-subtext">{trader.followers} followers</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green">{trader.roi}</div>
                    <div className="text-[11px] text-subtext">{trader.pnl}</div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Trending Strategies" action="Explore">
            <div className="space-y-3">
              {strategies.map((strategy) => (
                <div key={strategy.name} className="rounded-xl border border-white/10 bg-white/3 p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">{strategy.name}</div>
                    <span className="rounded-full bg-blue/10 px-2 py-0.5 text-[10px] font-medium text-blue">{strategy.risk}</span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-subtext">
                    <div><span className="text-text">ROI</span><br/>{strategy.roi}</div>
                    <div><span className="text-text">Win</span><br/>{strategy.winRate}</div>
                    <div><span className="text-text">Trades</span><br/>{strategy.trades}</div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  )
}

function ExplorePage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-3">
        <Panel title="Trending Tokens" action="More">
          <div className="space-y-3">
            {tokenCards.map((token) => (
              <div key={token.symbol} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/3 p-3">
                <div>
                  <div className="text-sm font-semibold">{token.symbol}</div>
                  <div className="text-[11px] text-subtext">{token.volume}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{token.price}</div>
                  <div className="text-[11px] text-green">{token.change}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Trending Posts" action="Live">
          <div className="space-y-3">
            {posts.slice(0, 3).map((post) => (
              <div key={post.id} className="rounded-xl border border-white/10 bg-white/3 p-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">{post.user}</div>
                  <span className="text-[11px] text-subtext">{post.time}</span>
                </div>
                <div className="mt-2 text-sm text-subtext line-clamp-3">{post.text}</div>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-green">
                  <TrendingUp size={12} />
                  {post.pnl} on {post.token}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Trending Strategies" action="Catalog">
          <div className="space-y-3">
            {strategies.map((strategy) => (
              <div key={strategy.name} className="rounded-xl border border-white/10 bg-white/3 p-3">
                <div className="text-sm font-medium">{strategy.name}</div>
                <div className="mt-2 flex justify-between text-[11px] text-subtext">
                  <span>ROI</span>
                  <span className="text-green">{strategy.roi}</span>
                </div>
                <div className="mt-1 flex justify-between text-[11px] text-subtext">
                  <span>Win</span>
                  <span>{strategy.winRate}</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}

function FollowingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-semibold">Following</div>
          <div className="text-sm text-subtext">Your network of active traders</div>
        </div>
        <button className="rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm text-subtext">Manage</button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {trendingTraders.map((trader) => (
          <div key={trader.name} className="card-surface rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green/10 text-sm font-semibold text-green">{trader.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <div className="font-medium">{trader.name}</div>
                  <div className="text-xs text-subtext">{trader.followers} followers</div>
                </div>
              </div>
              <button className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-subtext">Following</button>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <div><div className="text-subtext text-[11px]">ROI</div><div className="font-medium text-green">{trader.roi}</div></div>
              <div><div className="text-subtext text-[11px]">Win</div><div className="font-medium">{trader.winRate}</div></div>
              <div><div className="text-subtext text-[11px]">Risk</div><div className="font-medium">{trader.risk}</div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TradingTerminalPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm">MON / USD</div>
          <div className="text-sm text-subtext">Spot · Kuru order book</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-subtext">1D</button>
          <button className="rounded-full border border-green/20 bg-green/10 px-3 py-1.5 text-xs text-green">4H</button>
          <button className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-subtext">1H</button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.7fr_0.9fr]">
        <div className="card-surface rounded-2xl p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-2xl font-semibold">$0.9187</div>
              <div className="mt-1 flex items-center gap-2 text-sm text-subtext">
                <span className="text-green">+2.84%</span>
                <span>Volume $12.4M</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-xl border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-subtext">Indicators</button>
              <button className="rounded-xl border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-subtext">Draw</button>
            </div>
          </div>

          <div className="grid-bg flex h-[420px] items-end overflow-hidden rounded-2xl border border-white/10 bg-[#0b1217] p-4">
            <svg viewBox="0 0 700 260" className="h-full w-full">
              <defs>
                <linearGradient id="chartGlow" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(52, 211, 153, 0.4)" />
                  <stop offset="100%" stopColor="rgba(52, 211, 153, 0)" />
                </linearGradient>
              </defs>
              <path d="M0 150 C 80 120, 100 170, 160 140 S 260 70, 330 90 S 420 120, 500 106 S 620 80, 700 45 L700 260 L0 260 Z" className="chart-fill" />
              <path d="M0 150 C 80 120, 100 170, 160 140 S 260 70, 330 90 S 420 120, 500 106 S 620 80, 700 45" className="chart-line" />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card-surface rounded-2xl p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-medium">Kuru order book</div>
              <div className="text-[11px] text-subtext">Spread 0.0024</div>
            </div>
            <div className="space-y-2">
              {orderBook.slice(0, 3).map((book, index) => (
                <div key={`${book.price}-${index}`} className="flex items-center gap-2 text-xs">
                  <div className="w-20 text-red">{book.price}</div>
                  <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <div className="absolute inset-y-0 left-0 rounded-full bg-red/25" style={{ width: `${Math.min(100, (Number(book.size) / 5) * 100)}%` }} />
                  </div>
                  <div className="w-16 text-right text-subtext">{book.size}</div>
                </div>
              ))}
              <div className="my-2 h-px bg-white/10" />
              {orderBook.slice(3).map((book, index) => (
                <div key={`${book.price}-${index}`} className="flex items-center gap-2 text-xs">
                  <div className="w-20 text-green">{book.price}</div>
                  <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <div className="absolute inset-y-0 left-0 rounded-full bg-green/25" style={{ width: `${Math.min(100, (Number(book.size) / 5) * 100)}%` }} />
                  </div>
                  <div className="w-16 text-right text-subtext">{book.size}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface rounded-2xl p-4">
            <div className="mb-3 flex gap-2">
              <button className="rounded-lg bg-red/10 px-3 py-2 text-xs font-medium text-red">Sell</button>
              <button className="rounded-lg bg-green/10 px-3 py-2 text-xs font-medium text-green">Buy</button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                <div className="mb-1 text-[11px] text-subtext">Price</div>
                <div className="flex items-center justify-between"><span>$0.9187</span><span className="text-subtext">USD</span></div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                <div className="mb-1 text-[11px] text-subtext">Amount</div>
                <div className="flex items-center justify-between"><span>1.50</span><span className="text-subtext">MON</span></div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                <div className="mb-1 text-[11px] text-subtext">Total</div>
                <div className="flex items-center justify-between"><span>$1,378.05</span><span className="text-subtext">USD</span></div>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs text-subtext">
              <div className="flex justify-between"><span>Available</span><span className="text-text">$8,240.12</span></div>
              <div className="flex justify-between"><span>Estimated fee</span><span className="text-text">$2.90</span></div>
              <div className="flex justify-between"><span>Slippage</span><span className="text-text">0.25%</span></div>
            </div>

            <button className="mt-4 w-full rounded-xl bg-green px-4 py-3 text-sm font-semibold text-slate-950">Execute Trade</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CopyTradingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-semibold">Copy Trading</div>
          <div className="text-sm text-subtext">Follow proven performers with defined risk controls.</div>
        </div>
        <button className="rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm text-subtext">Risk guide</button>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {copyTraders.map((trader) => (
          <div key={trader.name} className="card-surface rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue/30 to-green/20 text-xs font-bold">{trader.name.slice(1, 3).toUpperCase()}</div>
                <div>
                  <div className="text-sm font-medium">{trader.name}</div>
                  <div className="text-[11px] text-subtext">{trader.copiers} copiers</div>
                </div>
              </div>
              <span className="rounded-full bg-green/10 px-2 py-0.5 text-[10px] font-medium text-green">{trader.risk}</span>
            </div>

            <div className="mt-5 space-y-2">
              <div className="flex justify-between text-sm"><span>ROI</span><span className="text-green font-medium">{trader.roi}</span></div>
              <div className="flex justify-between text-sm"><span>PnL</span><span className="font-medium">{trader.pnl}</span></div>
              <div className="flex justify-between text-sm"><span>Win rate</span><span>{trader.winRate}</span></div>
              <div className="flex justify-between text-sm"><span>Drawdown</span><span>{trader.drawdown}</span></div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm">View profile</button>
              <button className="flex-1 rounded-xl bg-green px-3 py-2 text-sm font-medium text-slate-950">Copy trader</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StrategiesPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        {strategies.map((strategy) => (
          <div key={strategy.name} className="card-surface rounded-2xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-semibold">{strategy.name}</div>
                <div className="mt-1 text-xs text-subtext">Created by @alpha_king</div>
              </div>
              <span className="rounded-full bg-amber/10 px-2 py-0.5 text-[10px] font-medium text-amber">{strategy.risk}</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div><div className="text-subtext text-[11px]">ROI</div><div className="font-medium text-green">{strategy.roi}</div></div>
              <div><div className="text-subtext text-[11px]">Win rate</div><div className="font-medium">{strategy.winRate}</div></div>
              <div><div className="text-subtext text-[11px]">Drawdown</div><div className="font-medium">{strategy.drawdown}</div></div>
              <div><div className="text-subtext text-[11px]">Trades</div><div className="font-medium">{strategy.trades}</div></div>
            </div>

            <div className="mt-5 flex gap-2">
              <button className="flex-1 rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm">Analyze with AI</button>
              <button className="flex-1 rounded-xl bg-green px-3 py-2 text-sm font-medium text-slate-950">Use strategy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AutomationPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="card-surface rounded-2xl p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xl font-semibold">Workflow builder</div>
            <button className="rounded-xl border border-green/20 bg-green/10 px-3 py-1.5 text-xs text-green">Enable</button>
          </div>

          <div className="space-y-4">
            <Stepper label="Trigger" value="MON price crosses above $1.20" />
            <Stepper label="Condition" value="Volume > $2M and RSI > 60" />
            <Stepper label="Action" value="Execute Buy Order using Kuru" />
            <Stepper label="Risk control" value="Max 1 execution / day, limit 15% per trade" />
          </div>
        </div>

        <div className="space-y-4">
          {automationTemplates.map((item) => (
            <div key={item.id} className="card-surface rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">{item.name}</div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${item.status === 'Enabled' ? 'bg-green/10 text-green' : 'bg-amber/10 text-amber'}`}>
                  {item.status}
                </span>
              </div>
              <div className="mt-3 space-y-2 text-xs text-subtext">
                <div className="flex justify-between"><span>Last triggered</span><span className="text-text">{item.last}</span></div>
                <div className="flex justify-between"><span>Next possible</span><span className="text-text">{item.next}</span></div>
                <div className="flex justify-between"><span>Tx hash</span><span className="text-text">{item.hash}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AILabPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-[1fr_0.8fr]">
        <div className="card-surface rounded-2xl p-4">
          <div className="mb-4 text-xl font-semibold">AI trading lab</div>
          <div className="space-y-4">
            <UploadBox title="Chart screenshot" />
            <UploadBox title="Trading screenshot" />
            <textarea
              className="min-h-[120px] w-full rounded-xl border border-white/10 bg-white/3 p-3 text-sm text-text placeholder:text-subtext focus:outline-none"
              placeholder="Paste a trade idea, strategy, or ask a question..."
            />
          </div>
          <button className="mt-4 rounded-xl bg-blue px-4 py-2.5 text-sm font-medium text-slate-950">Analyze with Hunyuan</button>
        </div>

        <div className="card-surface rounded-2xl p-4">
          <div className="mb-3 text-lg font-semibold">AI interpretation</div>
          <div className="rounded-xl border border-green/20 bg-green/10 p-3 text-sm text-green">
            MON is forming a breakout structure above prior resistance and the relative volume expansion supports continuation. Risk remains on close below $0.86.
          </div>
          <div className="mt-4 space-y-3 text-sm text-subtext">
            <div className="flex justify-between"><span>Bias</span><span className="text-text">Bullish</span></div>
            <div className="flex justify-between"><span>Setup</span><span className="text-text">Breakout retest</span></div>
            <div className="flex justify-between"><span>Stop</span><span className="text-text">$0.82</span></div>
            <div className="flex justify-between"><span>Target</span><span className="text-text">$1.02</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NotificationsPage() {
  return (
    <div className="space-y-4">
      <div className="text-2xl font-semibold">Notifications</div>
      {[1,2,3].map((item) => (
        <div key={item} className="card-surface rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green/10 text-xs font-medium text-green">A</div>
              <div>
                <div className="text-sm font-medium">@alpha_king posted a new breakout idea</div>
                <div className="text-xs text-subtext">2 minutes ago</div>
              </div>
            </div>
            <ArrowRight size={16} className="text-subtext" />
          </div>
        </div>
      ))}
    </div>
  )
}

function BookmarksPage() {
  return (
    <div className="space-y-4">
      <div className="text-2xl font-semibold">Bookmarks</div>
      {posts.slice(0,2).map((post) => (
        <PostCard key={post.id} {...post} compact />
      ))}
    </div>
  )
}

function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="card-surface rounded-2xl p-5">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green/20 to-blue/20 text-lg font-semibold">AK</div>
            <div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-semibold">@alpha_king</div>
                <ShieldCheck size={16} className="text-green" />
              </div>
              <div className="text-sm text-subtext">0x7A9...E3F4 · Joined Mar 2024</div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="rounded-xl border border-white/10 bg-white/3 px-4 py-2 text-sm">Follow</button>
            <button className="rounded-xl bg-green px-4 py-2 text-sm font-medium text-slate-950">Copy Trader</button>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-5">
          <StatBox label="Followers" value="18.2k" />
          <StatBox label="Following" value="843" />
          <StatBox label="Total trades" value="2,310" />
          <StatBox label="Win rate" value="71%" />
          <StatBox label="Avg return" value="+18.4%" />
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.5fr_0.85fr]">
        <div className="card-surface rounded-2xl p-4">
          <div className="mb-4 flex gap-2 text-sm text-subtext">
            <TabButton active>Posts</TabButton>
            <TabButton>Trades</TabButton>
            <TabButton>Performance</TabButton>
            <TabButton>Strategies</TabButton>
            <TabButton>Copiers</TabButton>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} compact />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Panel title="Performance" action="View chart">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span>PnL</span><span className="text-green">+$12.4k</span></div>
              <div className="flex justify-between"><span>Drawdown</span><span>8.2%</span></div>
              <div className="flex justify-between"><span>Volume</span><span>$428k</span></div>
              <div className="flex justify-between"><span>Risk</span><span>Medium</span></div>
            </div>
          </Panel>
          <Panel title="Recent strategies" action="See all">
            <div className="space-y-2">
              {['MON Breakout', 'Momentum Scalping', 'Mean Reversion'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/3 p-2.5 text-sm">{item}</div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  )
}

function PostCard({
  user,
  handle,
  wallet,
  time,
  text,
  chart,
  token,
  entry,
  current,
  pnl,
  signal,
  leverage,
  tradeMode,
  compact = false
}: any) {
  return (
    <article className="card-surface rounded-2xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-green/20 to-blue/20 text-sm font-semibold">{user.slice(0, 2).toUpperCase()}</div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{user}</span>
              <span className="text-xs text-subtext">{wallet}</span>
              <span className="rounded-full bg-green/10 px-1.5 py-0.5 text-[9px] font-medium text-green">Verified</span>
            </div>
            <div className="text-xs text-subtext">{handle} · {time}</div>
          </div>
        </div>
        <button className="rounded-full border border-white/10 bg-white/3 p-1.5 text-subtext">
          <Bookmark size={14} />
        </button>
      </div>

      <p className="mt-4 text-sm leading-6 text-subtext">{text}</p>

      <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b1217] p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-subtext">
            <span className="rounded-full bg-green/10 px-2 py-0.5 text-green">{signal}</span>
            <span>{token}</span>
          </div>
          <div className="text-xs text-subtext">{tradeMode}</div>
        </div>
        <div className="grid grid-cols-4 gap-2 text-xs">
          <div className="rounded-lg bg-white/3 p-2"><div className="text-subtext">Entry</div><div className="mt-1 font-medium text-text">{entry}</div></div>
          <div className="rounded-lg bg-white/3 p-2"><div className="text-subtext">Current</div><div className="mt-1 font-medium text-text">{current}</div></div>
          <div className="rounded-lg bg-white/3 p-2"><div className="text-subtext">PnL</div><div className="mt-1 font-medium text-green">{pnl}</div></div>
          <div className="rounded-lg bg-white/3 p-2"><div className="text-subtext">Lev</div><div className="mt-1 font-medium text-text">{leverage}</div></div>
        </div>

        <div className="mt-3 h-20 overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <svg viewBox="0 0 400 80" className="h-full w-full">
            <path d={`M0 50 C 30 35, 50 40, 90 45 S 150 20, 200 32 S 280 15, 330 22 S 360 12, 400 10`} className="chart-line" />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 text-sm text-subtext">
        <button className="flex items-center gap-1.5 hover:text-text"><MessageSquare size={15} /> 142</button>
        <button className="flex items-center gap-1.5 hover:text-text"><TrendingUp size={15} /> 32</button>
        <button className="flex items-center gap-1.5 hover:text-text"><Bookmark size={15} /> Save</button>
        <button className="flex items-center gap-1.5 hover:text-text"><ArrowRight size={15} /> Share</button>
        <button className="rounded-xl bg-green px-3 py-2 text-sm font-medium text-slate-950">Copy Trade</button>
      </div>
    </article>
  )
}

function Panel({ title, action, children }: { title: string; action: string; children: ReactNode }) {
  return (
    <section className="card-surface rounded-2xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-medium">{title}</div>
        <button className="text-[11px] text-subtext hover:text-text">{action}</button>
      </div>
      {children}
    </section>
  )
}

function Stepper({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/3 p-3">
      <div className="mb-2 text-[11px] uppercase tracking-[0.14em] text-subtext">{label}</div>
      <div className="text-sm text-text">{value}</div>
    </div>
  )
}

function UploadBox({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-dashed border-white/10 bg-white/3 p-4 text-sm text-subtext">
      <div className="flex items-center justify-between">
        <span>{title}</span>
        <button className="rounded-lg border border-white/10 bg-white/3 px-2 py-1 text-[11px]">Upload</button>
      </div>
    </div>
  )
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/3 p-3">
      <div className="text-[11px] text-subtext">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  )
}

function TabButton({ active = false, children }: { active?: boolean; children: ReactNode }) {
  return (
    <button className={`rounded-xl px-3 py-1.5 text-xs ${active ? 'bg-white/8 text-text' : 'text-subtext'}`}>
      {children}
    </button>
  )
}

export default App
