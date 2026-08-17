import { useState } from 'react'
import { CHARACTERS } from '@/data'
import type { CharacterId } from '@/data/types'
import { useAppState } from '@/context/AppStateContext'
import { searchCharacters } from '@/lib/search'
import { CATEGORY_COLORS } from '@/lib/theme'

export function SearchBar({ onSelect }: { onSelect: (id: CharacterId) => void }) {
  const { searchQuery, setSearchQuery } = useAppState()
  const [open, setOpen] = useState(false)

  const results = searchCharacters(CHARACTERS, searchQuery)

  return (
    <div className="relative w-72">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        placeholder="Search characters…"
        className="w-full rounded-md border border-white/15 bg-[#16161f] px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
      />
      {open && searchQuery.trim() && (
        <ul className="absolute z-10 mt-1 max-h-80 w-full overflow-y-auto rounded-md border border-white/10 bg-[#16161f] shadow-xl">
          {results.length === 0 && <li className="px-3 py-2 text-sm text-slate-500">No matches</li>}
          {results.map((c) => (
            <li key={c.id}>
              <button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onSelect(c.id)
                  setSearchQuery('')
                  setOpen(false)
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/10"
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[c.category] }} />
                {c.name}
                {c.epithets && <span className="ml-auto text-xs text-slate-500">{c.epithets[0]}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
