import { CHARACTERS, CHARACTERS_BY_ID, RELATIONSHIPS } from '../src/data'
import type { CharacterId } from '../src/data/types'

const errors: string[] = []

const seenIds = new Set<CharacterId>()
for (const character of CHARACTERS) {
  if (seenIds.has(character.id)) {
    errors.push(`Duplicate character id: "${character.id}"`)
  }
  seenIds.add(character.id)
}

function checkRef(ownerId: CharacterId, field: string, refId: CharacterId) {
  if (!CHARACTERS_BY_ID[refId]) {
    errors.push(`"${ownerId}".${field} references unknown character id "${refId}"`)
  }
}

function checkSymmetric(field: 'spouses' | 'siblings') {
  for (const character of CHARACTERS) {
    const refs = character[field] ?? []
    for (const otherId of refs) {
      const other = CHARACTERS_BY_ID[otherId]
      if (!other) continue // already reported by checkRef
      const otherRefs = other[field] ?? []
      if (!otherRefs.includes(character.id)) {
        errors.push(`Asymmetric ${field}: "${character.id}" lists "${otherId}", but not vice versa`)
      }
    }
  }
}

function checkParentChildSymmetry() {
  for (const character of CHARACTERS) {
    for (const parentId of character.parents ?? []) {
      const parent = CHARACTERS_BY_ID[parentId]
      if (!parent) continue
      if (!(parent.children ?? []).includes(character.id)) {
        errors.push(`"${character.id}" lists parent "${parentId}", but "${parentId}".children does not include "${character.id}"`)
      }
    }
    for (const childId of character.children ?? []) {
      const child = CHARACTERS_BY_ID[childId]
      if (!child) continue
      if (!(child.parents ?? []).includes(character.id)) {
        errors.push(`"${character.id}" lists child "${childId}", but "${childId}".parents does not include "${character.id}"`)
      }
    }
  }
}

for (const character of CHARACTERS) {
  for (const id of character.parents ?? []) checkRef(character.id, 'parents', id)
  for (const id of character.children ?? []) checkRef(character.id, 'children', id)
  for (const id of character.spouses ?? []) checkRef(character.id, 'spouses', id)
  for (const id of character.siblings ?? []) checkRef(character.id, 'siblings', id)
}

checkSymmetric('spouses')
checkSymmetric('siblings')
checkParentChildSymmetry()

const seenRelIds = new Set<string>()
for (const rel of RELATIONSHIPS) {
  if (seenRelIds.has(rel.id)) {
    errors.push(`Duplicate relationship id: "${rel.id}"`)
  }
  seenRelIds.add(rel.id)
  if (!CHARACTERS_BY_ID[rel.from]) {
    errors.push(`Relationship "${rel.id}" references unknown "from" character id "${rel.from}"`)
  }
  if (!CHARACTERS_BY_ID[rel.to]) {
    errors.push(`Relationship "${rel.id}" references unknown "to" character id "${rel.to}"`)
  }
}

if (errors.length > 0) {
  console.error(`Data validation failed with ${errors.length} error(s):\n`)
  for (const error of errors) console.error(`  - ${error}`)
  process.exit(1)
} else {
  console.log(`Data validation passed: ${CHARACTERS.length} characters, ${RELATIONSHIPS.length} relationships.`)
}
