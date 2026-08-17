import type { Character } from '../types'

const typhonEchidnaChildren = ['cerberus', 'hydra', 'sphinx', 'chimera']

export const monsters: Character[] = [
  {
    id: 'typhon',
    name: 'Typhon',
    epithets: ['Father of All Monsters'],
    category: 'monster',
    domains: ['Chaos', 'Storms'],
    shortBio: 'The most terrifying creature born of Gaia, a storm of a hundred serpent heads who nearly overthrew Zeus.',
    story:
      'Enraged by the Olympians\' defeat of her Titan children, Gaia coupled with Tartarus to produce Typhon — a monster so vast his head brushed the stars, with a hundred serpent heads breathing fire. He attacked Olympus itself, and in the ensuing battle even Zeus was briefly overpowered before rallying to strike Typhon down with his thunderbolts and bury him beneath Mount Etna, whose eruptions are said to be Typhon still struggling underneath.',
    parents: ['gaia', 'tartarus'],
    spouses: ['echidna'],
    children: typhonEchidnaChildren,
  },
  {
    id: 'echidna',
    name: 'Echidna',
    epithets: ['Mother of All Monsters'],
    category: 'monster',
    domains: ['Monstrous Motherhood'],
    shortBio: 'Half-woman, half-serpent, and mother of nearly every monster in Greek mythology.',
    story:
      'Echidna is described as beautiful above the waist and a serpent below, living hidden in a cave away from gods and mortals alike. Paired with Typhon, she became the mother of an entire generation of monsters — Cerberus, the Hydra, the Sphinx, and the Chimera among them — earning her the title "Mother of All Monsters."',
    parents: ['gaia', 'tartarus'],
    spouses: ['typhon'],
    children: typhonEchidnaChildren,
  },
  {
    id: 'medusa',
    name: 'Medusa',
    category: 'monster',
    domains: ['Petrification'],
    shortBio: 'A Gorgon with living snakes for hair, whose gaze turned onlookers to stone — beheaded by Perseus.',
    story:
      "Medusa was cursed by Athena, who transformed her hair into living snakes and her gaze into a weapon that turned anyone who met it to stone, as punishment after Poseidon violated her within Athena's own temple. Years later, the hero Perseus was sent to bring back her head, and succeeded by watching only her reflection in Athena's polished shield as he struck. Even severed, Medusa's head retained its petrifying power, and Perseus used it as a weapon before giving it to Athena to mount on her shield.",
  },
  {
    id: 'minotaur',
    name: 'The Minotaur',
    category: 'monster',
    domains: ['Confinement'],
    shortBio: 'A monster with the body of a man and the head of a bull, imprisoned in the Labyrinth beneath Crete.',
    story:
      "Born to King Minos's wife Pasiphae after a curse from Poseidon, the Minotaur was too dangerous and shameful to kill outright, so Minos had the craftsman Daedalus build the Labyrinth to contain it. Every year, Athens was forced to send youths as tribute to be fed to the beast, until Theseus volunteered, found his way to its lair, killed it, and used Ariadne's thread to find his way back out.",
  },
  {
    id: 'cerberus',
    name: 'Cerberus',
    category: 'monster',
    domains: ['Guarding the Underworld'],
    shortBio: 'The three-headed hound who guards the gates of the underworld, letting the dead in but never out.',
    story:
      "Cerberus stands watch at the entrance to the underworld, welcoming new souls in but savaging any who try to leave. Heracles's final and most dangerous labor was to capture Cerberus alive and bring him to the surface world without using any weapon — a task he accomplished through sheer strength, wrestling the hound into submission before returning him safely to Hades.",
    parents: ['typhon', 'echidna'],
  },
  {
    id: 'hydra',
    name: 'The Lernaean Hydra',
    category: 'monster',
    domains: ['Poison', 'Regeneration'],
    shortBio: 'A multi-headed serpent whose heads regrew in pairs when cut — until Heracles found a way to stop them.',
    story:
      'The Hydra lived in the swamps of Lerna, and every time a hero managed to cut off one of its many heads, two more would grow back in its place. As his second labor, Heracles realized brute force alone would fail, so he had his nephew Iolaus cauterize each stump with fire the instant a head was severed, preventing regrowth, until only the immortal central head remained, which Heracles buried under a massive boulder.',
    parents: ['typhon', 'echidna'],
  },
  {
    id: 'polyphemus',
    name: 'Polyphemus',
    category: 'monster',
    domains: ['Brute Strength'],
    shortBio: 'A man-eating Cyclops, son of Poseidon, blinded by Odysseus during his voyage home from Troy.',
    story:
      "Polyphemus trapped Odysseus and his crew in his cave, eating several men before Odysseus got him drunk on wine, told him his name was \"Nobody,\" and blinded his single eye with a sharpened stake while he slept. When Polyphemus cried out that \"Nobody\" was hurting him, the other Cyclopes didn't come to help. His father Poseidon's fury at the blinding cursed the rest of Odysseus's journey home.",
    parents: ['poseidon'],
  },
  {
    id: 'sphinx',
    name: 'The Sphinx',
    category: 'monster',
    domains: ['Riddles'],
    shortBio: 'A creature with a woman\'s head and a lion\'s body, who killed travelers unable to answer her riddle.',
    story:
      'Perched on a cliff outside Thebes, the Sphinx posed a single riddle to every traveler who passed — "What walks on four legs in the morning, two at noon, and three in the evening?" — and devoured anyone who answered wrong. Oedipus finally answered correctly ("a human, who crawls as an infant, walks upright as an adult, and uses a cane in old age"), and the Sphinx, defeated, threw herself from the cliff.',
    parents: ['typhon', 'echidna'],
  },
  {
    id: 'chimera',
    name: 'The Chimera',
    category: 'monster',
    domains: ['Fire-Breathing Terror'],
    shortBio: 'A fire-breathing hybrid of lion, goat, and serpent that terrorized Lycia until Bellerophon struck from the air.',
    story:
      "The Chimera had a lion's body, a goat's head rising from its back, and a serpent for a tail, and breathed fire that made it nearly impossible to approach on the ground. Bellerophon, riding the winged horse Pegasus, attacked from above, out of reach of the flames, and killed it by lodging a lump of lead on his spear into its throat, where the creature's own fire melted the lead and choked it from within.",
    parents: ['typhon', 'echidna'],
  },
]
