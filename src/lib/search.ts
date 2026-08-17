import type { Character } from '@/data/types'

export function searchCharacters(characters: Character[], query: string, limit = 8): Character[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  return characters
    .filter((c) => {
      if (c.name.toLowerCase().includes(q)) return true
      return (c.epithets ?? []).some((e) => e.toLowerCase().includes(q))
    })
    .slice(0, limit)
}
