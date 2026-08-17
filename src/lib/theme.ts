import type { CharacterCategory, NonFamilialRelationshipType } from '@/data/types'

export const CATEGORY_COLORS: Record<CharacterCategory, string> = {
  primordial: '#7c6f9f',
  titan: '#c99a4a',
  olympian: '#4fa3d9',
  demigod: '#5ec98a',
  hero: '#e0864f',
  monster: '#d9536b',
  mortal: '#9aa0ab',
}

export const CATEGORY_LABELS: Record<CharacterCategory, string> = {
  primordial: 'Primordial',
  titan: 'Titan',
  olympian: 'Olympian',
  demigod: 'Demigod',
  hero: 'Hero',
  monster: 'Monster',
  mortal: 'Mortal',
}

export type FamilyLinkType = 'parent-child' | 'spouse' | 'sibling'

export interface LinkStyle {
  color: string
  dash?: number[]
  arrow: boolean
  label: string
}

export const FAMILY_LINK_STYLES: Record<FamilyLinkType, LinkStyle> = {
  'parent-child': { color: '#b7c4d6', arrow: true, label: 'Parent / Child' },
  spouse: { color: '#e0a8c7', dash: [4, 2], arrow: false, label: 'Spouse' },
  sibling: { color: '#8fb9a8', dash: [1, 2], arrow: false, label: 'Sibling' },
}

export const RELATIONSHIP_LINK_STYLES: Record<NonFamilialRelationshipType, LinkStyle> = {
  rival: { color: '#e0864f', dash: [6, 3], arrow: false, label: 'Rival' },
  ally: { color: '#5ec98a', dash: [2, 2], arrow: true, label: 'Ally' },
  lover: { color: '#e07fa8', dash: [4, 2], arrow: false, label: 'Lover' },
  enemy: { color: '#d9536b', dash: [6, 3], arrow: true, label: 'Enemy' },
  mentor: { color: '#4fa3d9', dash: [2, 2], arrow: true, label: 'Mentor' },
  transformed: { color: '#c99a4a', dash: [8, 3, 2, 3], arrow: true, label: 'Transformed' },
}

export const DIMMED_OPACITY = 0.12

export const ALL_LINK_STYLES: Record<string, LinkStyle> = {
  ...FAMILY_LINK_STYLES,
  ...RELATIONSHIP_LINK_STYLES,
}
