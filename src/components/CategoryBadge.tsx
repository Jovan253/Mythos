import type { CharacterCategory } from '@/data/types'
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/lib/theme'

export function CategoryBadge({ category }: { category: CharacterCategory }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
      style={{ backgroundColor: `${CATEGORY_COLORS[category]}26`, color: CATEGORY_COLORS[category] }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[category] }} />
      {CATEGORY_LABELS[category]}
    </span>
  )
}
