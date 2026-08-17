import type { Character, CharacterId } from './types'
import { primordials } from './characters/primordials'
import { titans } from './characters/titans'
import { olympians } from './characters/olympians'
import { heroes } from './characters/heroes'
import { monsters } from './characters/monsters'

export const CHARACTERS: Character[] = [...primordials, ...titans, ...olympians, ...heroes, ...monsters]

export const CHARACTERS_BY_ID: Record<CharacterId, Character> = Object.fromEntries(
  CHARACTERS.map((character) => [character.id, character]),
)

export { relationships as RELATIONSHIPS } from './relationships'
export * from './types'
