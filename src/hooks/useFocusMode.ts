import { useMemo } from 'react'
import type { CharacterId } from '@/data/types'
import { CHARACTERS_BY_ID } from '@/data'
import { immediateFamilyIds } from '@/lib/graph'

/** Returns the set of node ids to keep highlighted (selected + immediate family), or null if focus mode is off. */
export function useFocusMode(selectedId: CharacterId | undefined, active: boolean): Set<CharacterId> | null {
  return useMemo(() => {
    if (!active || !selectedId) return null
    const character = CHARACTERS_BY_ID[selectedId]
    if (!character) return null
    const ids = immediateFamilyIds(character)
    ids.add(selectedId)
    return ids
  }, [selectedId, active])
}
