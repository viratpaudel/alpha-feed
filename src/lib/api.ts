export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export async function fetchJson<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  })

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }

  return res.json() as Promise<T>
}

export async function fetchFeed() {
  return fetchJson<{ posts: any[] }>('/feed')
}

export async function fetchTraders() {
  return fetchJson<{ traders: any[] }>('/traders')
}

export async function fetchStrategies() {
  return fetchJson<{ strategies: any[] }>('/strategies')
}

export async function fetchMarkets() {
  return fetchJson<{ marketOverview: any[] }>('/markets')
}

export async function fetchAutomations() {
  return fetchJson<{ automations: any[] }>('/automations')
}

export async function fetchProfile() {
  return fetchJson<{ profile: any }>('/profile')
}

export async function fetchAIAnalysis(prompt: string) {
  return fetchJson<{ analysis: any }>('/ai/analyze', {
    method: 'POST',
    body: JSON.stringify({ prompt })
  })
}
