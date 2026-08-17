import type { CharacterCategory } from '@/data/types'
import { useAppState } from '@/context/AppStateContext'
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/lib/theme'

const CATEGORIES: CharacterCategory[] = ['primordial', 'titan', 'olympian', 'demigod', 'hero', 'monster', 'mortal']

export function FilterControls() {
  const { activeCategories, toggleCategory, allCategoriesActive, resetCategories } = useAppState()

  return (
    <div className="flex flex-wrap items-center gap-1.5 rounded-md border border-white/10 bg-[#16161f]/90 px-2 py-1.5 backdrop-blur">
      {CATEGORIES.map((category) => {
        const active = activeCategories.has(category)
        return (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition"
            style={{
              backgroundColor: active ? `${CATEGORY_COLORS[category]}26` : 'transparent',
              color: active ? CATEGORY_COLORS[category] : '#6b7280',
              opacity: active ? 1 : 0.6,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: active ? CATEGORY_COLORS[category] : '#4b5563' }}
            />
            {CATEGORY_LABELS[category]}
          </button>
        )
      })}
      {!allCategoriesActive && (
        <button onClick={resetCategories} className="ml-1 text-xs text-slate-500 underline hover:text-slate-300">
          Reset
        </button>
      )}
    </div>
  )
}
