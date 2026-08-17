import type { Character } from '../types'

export const primordials: Character[] = [
  {
    id: 'chaos',
    name: 'Chaos',
    category: 'primordial',
    domains: ['The Void', 'Origin of All Things'],
    shortBio: 'The first thing to exist — a yawning, formless void from which everything else emerged.',
    story:
      'Before there was earth or sky or sea, there was only Chaos: a vast, dark gap with nothing in it. Out of this emptiness, without any parent, the first true beings simply came into existence — Gaia the earth, Tartarus the pit beneath it, Erebus the darkness, and Nyx the night. Chaos is less a character with a personality than the raw possibility that everything else grew out of.',
    children: ['gaia', 'tartarus', 'erebus', 'nyx'],
  },
  {
    id: 'gaia',
    name: 'Gaia',
    epithets: ['Mother Earth'],
    category: 'primordial',
    domains: ['The Earth'],
    shortBio: 'The primordial goddess of the earth itself, ancestral mother of Titans, monsters, and gods.',
    story:
      'Gaia arose from Chaos as the solid ground beneath everything. On her own, she brought forth Uranus (the Sky) to cover her, then took him as a mate to produce the twelve Titans. When Uranus imprisoned their monstrous children within her, Gaia grew furious, forged a great sickle, and convinced her son Cronus to ambush and overthrow his father — the first great rebellion in the family. Later, with the dark pit Tartarus, she bore the monstrous Typhon to punish the Olympians for defeating her Titan children.',
    parents: ['chaos'],
    spouses: ['uranus', 'tartarus'],
    children: ['uranus', 'oceanus', 'tethys', 'hyperion', 'theia', 'cronus', 'rhea', 'iapetus', 'themis', 'mnemosyne', 'typhon', 'echidna'],
  },
  {
    id: 'uranus',
    name: 'Uranus',
    epithets: ['Father Sky'],
    category: 'primordial',
    domains: ['The Sky'],
    shortBio: 'The primordial sky, husband and son of Gaia, and father of the Titans.',
    story:
      "Uranus was born of Gaia alone and then became her husband, stretching himself over her as the heavens. Together they had the Titans, the one-eyed Cyclopes, and the hundred-handed Hecatoncheires — but Uranus despised his monstrous children and hid them away inside Gaia's body, causing her great pain. In revenge, Gaia armed their son Cronus with a flint sickle; Cronus ambushed his father and castrated him, ending Uranus's reign and separating sky from earth for good.",
    parents: ['gaia'],
    spouses: ['gaia'],
    children: ['oceanus', 'tethys', 'hyperion', 'theia', 'cronus', 'rhea', 'iapetus', 'themis', 'mnemosyne', 'aphrodite'],
  },
  {
    id: 'nyx',
    name: 'Nyx',
    epithets: ['Night'],
    category: 'primordial',
    domains: ['Night'],
    shortBio: 'The primordial personification of night, so ancient and powerful even Zeus is said to fear her.',
    story:
      'Nyx sprang from Chaos alongside her brother Erebus, and the two paired together to represent the darkness before dawn. Homer tells that even Zeus, king of the gods, hesitated to anger Nyx directly. She is usually imagined less as an active character in myths and more as an immense, brooding presence — night itself, sweeping across the world every evening.',
    parents: ['chaos'],
    spouses: ['erebus'],
  },
  {
    id: 'erebus',
    name: 'Erebus',
    epithets: ['Darkness'],
    category: 'primordial',
    domains: ['Darkness', 'Shadow'],
    shortBio: 'The primordial personification of deep darkness and shadow, consort of Nyx.',
    story:
      'Erebus emerged from Chaos as the personification of the shadow that fills the space between earth and the underworld. Paired with his sister Nyx, he represents darkness the way she represents night — two faces of the same absence of light, more a mood and a place than a character with a story of his own.',
    parents: ['chaos'],
    spouses: ['nyx'],
  },
  {
    id: 'tartarus',
    name: 'Tartarus',
    category: 'primordial',
    domains: ['The Abyss', 'The Underworld Prison'],
    shortBio: 'Both a primordial being and the bottomless pit beneath the underworld where the defeated are imprisoned.',
    story:
      'Tartarus is the deep abyss that formed beneath the newly separated earth, so far down that Hesiod says a falling anvil would drop for nine days before reaching it. It later became the dungeon where Zeus imprisoned Cronus and the defeated Titans after the Titanomachy. Tartarus also acted with Gaia to produce Typhon and Echidna, the monstrous "parents of monsters," making the pit itself a source of some of mythology\'s worst creatures.',
    parents: ['chaos'],
    spouses: ['gaia'],
    children: ['typhon', 'echidna'],
  },
]
