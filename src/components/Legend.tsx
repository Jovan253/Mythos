import { CATEGORY_COLORS, CATEGORY_LABELS, ALL_LINK_STYLES } from '@/lib/theme'
import type { CharacterCategory } from '@/data/types'

const CATEGORIES: CharacterCategory[] = ['primordial', 'titan', 'olympian', 'demigod', 'hero', 'monster', 'mortal']
const LINK_KINDS = ['parent-child', 'spouse', 'sibling', 'rival', 'ally', 'lover', 'enemy', 'mentor', 'transformed']

export function Legend() {
  return (
    <div className="pointer-events-none flex flex-col gap-3 rounded-md border border-white/10 bg-[#16161f]/90 p-3 text-xs text-slate-300 backdrop-blur">
      <div>
        <p className="mb-1.5 font-semibold uppercase tracking-wide text-slate-500">Categories</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {CATEGORIES.map((c) => (
            <div key={c} className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[c] }} />
              {CATEGORY_LABELS[c]}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-1.5 font-semibold uppercase tracking-wide text-slate-500">Relationships</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {LINK_KINDS.map((kind) => {
            const style = ALL_LINK_STYLES[kind]
            if (!style) return null
            return (
              <div key={kind} className="flex items-center gap-1.5">
                <svg width="16" height="8">
                  <line
                    x1="0"
                    y1="4"
                    x2="16"
                    y2="4"
                    stroke={style.color}
                    strokeWidth="2"
                    strokeDasharray={style.dash?.join(',')}
                  />
                </svg>
                {style.label}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
