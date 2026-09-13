import { useEffect, useState } from 'react'
import type { Technology } from '../types/technology'

export function useTechnologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    const load = async () => {
      try {
        setLoading(true)
        const response = await fetch('/data/technologies.json')
        if (!response.ok) throw new Error(`Unable to load technologies (${response.status})`)
        const data = (await response.json()) as Technology[]
        if (active) setTechnologies(data)
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : 'Something went wrong while loading data.')
      } finally {
        if (active) setLoading(false)
      }
    }
    const timer = window.setTimeout(load, 450)
    return () => { active = false; window.clearTimeout(timer) }
  }, [])

  return { technologies, loading, error }
}
