export type CharacterCategory =
  | 'primordial'
  | 'titan'
  | 'olympian'
  | 'demigod'
  | 'hero'
  | 'monster'
  | 'mortal'

export type CharacterId = string

export interface CharacterImage {
  kind: 'icon' | 'placeholder'
  iconRef?: string
}

export interface Character {
  id: CharacterId
  name: string
  epithets?: string[]
  category: CharacterCategory
  domains?: string[]
  shortBio: string
  story: string
  image?: CharacterImage
  parents?: CharacterId[]
  children?: CharacterId[]
  spouses?: CharacterId[]
  siblings?: CharacterId[]
}

export type NonFamilialRelationshipType =
  | 'rival'
  | 'ally'
  | 'lover'
  | 'enemy'
  | 'mentor'
  | 'transformed'

export interface Relationship {
  id: string
  from: CharacterId
  to: CharacterId
  type: NonFamilialRelationshipType
  label: string
  directional: boolean
}
