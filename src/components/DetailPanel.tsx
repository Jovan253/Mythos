import { Link, useNavigate } from 'react-router-dom'
import { CHARACTERS_BY_ID, RELATIONSHIPS } from '@/data'
import type { CharacterId } from '@/data/types'
import { useAppState } from '@/context/AppStateContext'
import { CategoryBadge } from './CategoryBadge'

const FAMILY_FIELDS: { key: 'parents' | 'children' | 'spouses' | 'siblings'; label: string }[] = [
  { key: 'parents', label: 'Parents' },
  { key: 'spouses', label: 'Spouse(s)' },
  { key: 'children', label: 'Children' },
  { key: 'siblings', label: 'Siblings' },
]

function FamilyChip({ id }: { id: CharacterId }) {
  const character = CHARACTERS_BY_ID[id]
  if (!character) return null
  return (
    <Link
      to={`/character/${id}`}
      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-sm text-slate-200 transition hover:border-white/30 hover:bg-white/10"
    >
      {character.name}
    </Link>
  )
}

export function DetailPanel({ characterId }: { characterId: CharacterId }) {
  const navigate = useNavigate()
  const { focusModeActive, toggleFocusMode } = useAppState()
  const character = CHARACTERS_BY_ID[characterId]

  if (!character) {
    return (
      <aside className="flex h-full w-96 shrink-0 flex-col gap-4 overflow-y-auto border-l border-white/10 bg-[#111117] p-6">
        <p className="text-slate-400">Unknown character: {characterId}</p>
        <button onClick={() => navigate('/')} className="text-sm text-sky-400 hover:underline">
          Back to graph
        </button>
      </aside>
    )
  }

  const relatedRelationships = RELATIONSHIPS.filter((r) => r.from === characterId || r.to === characterId)

  return (
    <aside className="flex h-full w-96 shrink-0 flex-col gap-5 overflow-y-auto border-l border-white/10 bg-[#111117] p-6">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-xl font-semibold text-white">{character.name}</h2>
          {character.epithets && character.epithets.length > 0 && (
            <p className="mt-0.5 text-sm italic text-slate-400">{character.epithets.join(' · ')}</p>
          )}
        </div>
        <button
          onClick={() => navigate('/')}
          className="rounded-md px-2 py-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Close detail panel"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <CategoryBadge category={character.category} />
        {(character.domains ?? []).map((domain) => (
          <span key={domain} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-300">
            {domain}
          </span>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-slate-300">{character.shortBio}</p>

      <button
        onClick={toggleFocusMode}
        className={`self-start rounded-md px-3 py-1.5 text-sm font-medium transition ${
          focusModeActive
            ? 'bg-sky-500 text-white hover:bg-sky-400'
            : 'border border-white/20 text-slate-200 hover:border-white/40'
        }`}
      >
        {focusModeActive ? 'Exit focus mode' : 'Focus on family'}
      </button>

      {FAMILY_FIELDS.map(({ key, label }) => {
        const ids = character[key]
        if (!ids || ids.length === 0) return null
        return (
          <div key={key}>
            <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</h3>
            <div className="flex flex-wrap gap-1.5">
              {ids.map((id) => (
                <FamilyChip key={id} id={id} />
              ))}
            </div>
          </div>
        )
      })}

      {relatedRelationships.length > 0 && (
        <div>
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">Other Relationships</h3>
          <ul className="flex flex-col gap-2">
            {relatedRelationships.map((rel) => {
              const otherId = rel.from === characterId ? rel.to : rel.from
              const other = CHARACTERS_BY_ID[otherId]
              return (
                <li key={rel.id} className="text-sm text-slate-300">
                  <Link to={`/character/${otherId}`} className="font-medium text-sky-400 hover:underline">
                    {other?.name ?? otherId}
                  </Link>{' '}
                  — {rel.label}
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <div>
        <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">Story</h3>
        <p className="whitespace-pre-line text-sm leading-relaxed text-slate-300">{character.story}</p>
      </div>
    </aside>
  )
}
