import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { CharacterCategory } from '@/data/types'

const ALL_CATEGORIES: CharacterCategory[] = [
  'primordial',
  'titan',
  'olympian',
  'demigod',
  'hero',
  'monster',
  'mortal',
]

interface AppState {
  searchQuery: string
  setSearchQuery: (q: string) => void
  activeCategories: Set<CharacterCategory>
  toggleCategory: (category: CharacterCategory) => void
  allCategoriesActive: boolean
  resetCategories: () => void
  focusModeActive: boolean
  setFocusModeActive: (active: boolean) => void
  toggleFocusMode: () => void
}

const AppStateContext = createContext<AppState | null>(null)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategories, setActiveCategories] = useState<Set<CharacterCategory>>(new Set(ALL_CATEGORIES))
  const [focusModeActive, setFocusModeActive] = useState(false)

  const toggleCategory = useCallback((category: CharacterCategory) => {
    setActiveCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }, [])

  const resetCategories = useCallback(() => {
    setActiveCategories(new Set(ALL_CATEGORIES))
  }, [])

  const toggleFocusMode = useCallback(() => {
    setFocusModeActive((prev) => !prev)
  }, [])

  const value = useMemo<AppState>(
    () => ({
      searchQuery,
      setSearchQuery,
      activeCategories,
      toggleCategory,
      allCategoriesActive: activeCategories.size === ALL_CATEGORIES.length,
      resetCategories,
      focusModeActive,
      setFocusModeActive,
      toggleFocusMode,
    }),
    [searchQuery, activeCategories, toggleCategory, resetCategories, focusModeActive, toggleFocusMode],
  )

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

export function useAppState(): AppState {
  const ctx = useContext(AppStateContext)
  if (!ctx) throw new Error('useAppState must be used within an AppStateProvider')
  return ctx
}
