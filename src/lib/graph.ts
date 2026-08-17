import type { Character, CharacterCategory, CharacterId, NonFamilialRelationshipType, Relationship } from '@/data/types'

export type LinkKind = 'parent-child' | 'spouse' | 'sibling' | NonFamilialRelationshipType

export interface GraphNode {
  id: CharacterId
  name: string
  category: CharacterCategory
}

export interface GraphLink {
  id: string
  source: CharacterId
  target: CharacterId
  kind: LinkKind
  label: string
  directional: boolean
}

export interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
}

export function buildGraphData(characters: Character[], relationships: Relationship[]): GraphData {
  const nodes: GraphNode[] = characters.map((c) => ({ id: c.id, name: c.name, category: c.category }))
  const links: GraphLink[] = []

  for (const character of characters) {
    for (const childId of character.children ?? []) {
      links.push({
        id: `${character.id}-parent-${childId}`,
        source: character.id,
        target: childId,
        kind: 'parent-child',
        label: 'Parent / Child',
        directional: true,
      })
    }
    for (const spouseId of character.spouses ?? []) {
      if (character.id < spouseId) {
        links.push({
          id: `${character.id}-spouse-${spouseId}`,
          source: character.id,
          target: spouseId,
          kind: 'spouse',
          label: 'Spouse',
          directional: false,
        })
      }
    }
    for (const siblingId of character.siblings ?? []) {
      if (character.id < siblingId) {
        links.push({
          id: `${character.id}-sibling-${siblingId}`,
          source: character.id,
          target: siblingId,
          kind: 'sibling',
          label: 'Sibling',
          directional: false,
        })
      }
    }
  }

  for (const rel of relationships) {
    links.push({
      id: rel.id,
      source: rel.from,
      target: rel.to,
      kind: rel.type,
      label: rel.label,
      directional: rel.directional,
    })
  }

  return { nodes, links }
}

export function immediateFamilyIds(character: Character): Set<CharacterId> {
  const ids = new Set<CharacterId>()
  for (const id of character.parents ?? []) ids.add(id)
  for (const id of character.children ?? []) ids.add(id)
  for (const id of character.spouses ?? []) ids.add(id)
  for (const id of character.siblings ?? []) ids.add(id)
  return ids
}
