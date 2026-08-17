import type { Character } from '../types'

const cronusChildren = ['hestia', 'demeter', 'hera', 'hades', 'poseidon', 'zeus']
const cronusSiblingsExcept = (id: string) => cronusChildren.filter((s) => s !== id)

export const olympians: Character[] = [
  {
    id: 'zeus',
    name: 'Zeus',
    epithets: ['King of the Gods', 'Cloud-Gatherer', 'The Thunderer'],
    category: 'olympian',
    domains: ['The Sky', 'Thunder', 'Law', 'Kingship'],
    shortBio: 'King of the Olympian gods, ruler of the sky and wielder of the thunderbolt.',
    story:
      "Hidden from his father Cronus at birth, Zeus grew up in secret and returned to force Cronus to disgorge his swallowed siblings, then led them to victory over the Titans in the ten-year Titanomachy. As king of the gods, Zeus is the source of law, hospitality, and oaths — but he is just as famous for his countless affairs with goddesses and mortal women, which produced many of mythology's greatest heroes and gods, and just as many furious confrontations with his wife Hera.",
    parents: ['cronus', 'rhea'],
    spouses: ['hera'],
    children: ['ares', 'apollo', 'artemis', 'athena', 'hermes', 'dionysus', 'persephone', 'heracles', 'perseus', 'helen'],
    siblings: cronusSiblingsExcept('zeus'),
  },
  {
    id: 'hera',
    name: 'Hera',
    epithets: ['Queen of the Gods'],
    category: 'olympian',
    domains: ['Marriage', 'Family', 'Childbirth'],
    shortBio: 'Queen of the Olympian gods, goddess of marriage and family, and Zeus\'s wife and sister.',
    story:
      "Hera presides over marriage and the sanctity of the household — an irony not lost on the Greeks, given how relentlessly her own husband Zeus strayed. Much of her mythology centers on her fury at his infidelities, taking revenge not on Zeus himself but on his lovers and the children born from those affairs, from hounding the pregnant Leto across the world to tormenting Heracles throughout his life.",
    parents: ['cronus', 'rhea'],
    spouses: ['zeus'],
    children: ['ares', 'hephaestus'],
    siblings: cronusSiblingsExcept('hera'),
  },
  {
    id: 'poseidon',
    name: 'Poseidon',
    epithets: ['Earth-Shaker', 'God of the Sea'],
    category: 'olympian',
    domains: ['The Sea', 'Earthquakes', 'Horses'],
    shortBio: 'God of the sea, earthquakes, and horses, brother of Zeus and ruler of the ocean realm.',
    story:
      'When the three sons of Cronus divided the world by lot after defeating the Titans, Poseidon drew the sea as his domain. Quick-tempered and proud, he competed with Athena for patronage of Athens and lost, and later held a long grudge against Odysseus for blinding his son, the Cyclops Polyphemus — a grudge that kept Odysseus from reaching home for ten years.',
    parents: ['cronus', 'rhea'],
    children: ['theseus', 'polyphemus'],
    siblings: cronusSiblingsExcept('poseidon'),
  },
  {
    id: 'demeter',
    name: 'Demeter',
    category: 'olympian',
    domains: ['The Harvest', 'Agriculture', 'The Seasons'],
    shortBio: 'Goddess of the harvest and agriculture, whose grief over her lost daughter explains the seasons.',
    story:
      "When Hades abducted her daughter Persephone to be his queen in the underworld, Demeter searched the earth in grief, neglecting the crops until the world starved. Zeus brokered a compromise: Persephone would spend part of each year with Hades and part with her mother. Demeter's joy at her daughter's return each year brings spring; her grief at the parting brings winter.",
    parents: ['cronus', 'rhea'],
    children: ['persephone'],
    siblings: cronusSiblingsExcept('demeter'),
  },
  {
    id: 'hestia',
    name: 'Hestia',
    category: 'olympian',
    domains: ['The Hearth', 'Home', 'Domesticity'],
    shortBio: 'Gentle goddess of the hearth, who gave up her Olympian throne to keep the peace.',
    story:
      "Hestia tends the sacred hearth fire of Olympus and every home. Courted by both Poseidon and Apollo, she swore an oath of eternal virginity instead to avoid the conflict a marriage would cause. So mild and unassuming that, in some accounts, she willingly gave up her seat among the twelve Olympians to Dionysus to avoid strife — content instead to keep the home fires burning.",
    parents: ['cronus', 'rhea'],
    siblings: cronusSiblingsExcept('hestia'),
  },
  {
    id: 'hades',
    name: 'Hades',
    epithets: ['Lord of the Underworld'],
    category: 'olympian',
    domains: ['The Underworld', 'The Dead', 'Wealth Beneath the Earth'],
    shortBio: 'God of the underworld and ruler of the dead, brother of Zeus and husband of Persephone.',
    story:
      'When the sons of Cronus divided the cosmos, Hades drew the underworld — not evil, exactly, but grim and rarely visited even by other gods. He fell for Persephone and abducted her to be his queen, an act that triggered Demeter\'s grief-stricken winter and led to the yearly compromise that splits Persephone\'s time between the two realms.',
    parents: ['cronus', 'rhea'],
    spouses: ['persephone'],
    siblings: cronusSiblingsExcept('hades'),
  },
  {
    id: 'persephone',
    name: 'Persephone',
    category: 'olympian',
    domains: ['Spring', 'Queen of the Underworld'],
    shortBio: 'Daughter of Demeter, abducted by Hades to become Queen of the Underworld — her yearly return brings spring.',
    story:
      'While gathering flowers, Persephone was seized by Hades and taken to the underworld. Because she ate a handful of pomegranate seeds there, she could never fully leave, and was bound to return each year. She rules the underworld beside Hades for part of the year and returns to the world above for the rest, her arrival marking the start of spring.',
    parents: ['zeus', 'demeter'],
    spouses: ['hades'],
  },
  {
    id: 'athena',
    name: 'Athena',
    epithets: ['Goddess of Wisdom', 'Grey-Eyed'],
    category: 'olympian',
    domains: ['Wisdom', 'Strategic Warfare', 'Crafts'],
    shortBio: 'Goddess of wisdom and strategic warfare, born fully armored from the head of Zeus.',
    story:
      "Warned that his lover Metis's child would surpass him, Zeus swallowed her whole — only for Athena to spring, fully grown and armored, straight out of his forehead. She became patron of heroes, offering counsel and aid to Perseus, Heracles, and especially Odysseus. She won patronage of Athens from Poseidon by gifting the city the olive tree, and it was her fury at Medusa's desecration of her temple that led her to curse the woman's hair into snakes.",
    parents: ['zeus'],
  },
  {
    id: 'apollo',
    name: 'Apollo',
    epithets: ['God of the Sun', 'The Far-Shooter'],
    category: 'olympian',
    domains: ['Music', 'Prophecy', 'Healing', 'The Sun', 'Archery'],
    shortBio: 'God of music, prophecy, healing, and archery — twin brother of Artemis.',
    story:
      "Born on the floating island of Delos after Hera's persecution of his mother Leto, Apollo grew into one of the most versatile Olympians: master of the lyre and patron of poets, god of the healing arts, and keeper of the oracle at Delphi, where mortals traveled from across Greece to hear his priestess speak prophecy. He is also, paradoxically, a god who can bring plague as easily as healing when angered.",
    parents: ['zeus', 'leto'],
    siblings: ['artemis'],
  },
  {
    id: 'artemis',
    name: 'Artemis',
    epithets: ['Goddess of the Hunt', 'Mistress of Animals'],
    category: 'olympian',
    domains: ['The Hunt', 'Wilderness', 'The Moon', 'Childbirth'],
    shortBio: 'Goddess of the hunt and wilderness, fiercely protective twin sister of Apollo.',
    story:
      "Artemis asked Zeus, her father, for eternal maidenhood and a bow of her own before she was even fully grown, and spent her days roaming the wild forests with a band of nymphs, protecting animals and punishing anyone who disrespected her or her mother. She is often described as having helped deliver her own twin brother Apollo moments after her own birth, making her a patron of childbirth despite her vow of virginity.",
    parents: ['zeus', 'leto'],
    siblings: ['apollo'],
  },
  {
    id: 'ares',
    name: 'Ares',
    category: 'olympian',
    domains: ['War', 'Bloodshed'],
    shortBio: 'God of war and violent bloodshed — brave, but disliked even by his own family for his brutality.',
    story:
      'Ares embodies war\'s chaos and savagery, as opposed to Athena\'s disciplined strategy — the two often stand on opposite sides of the same battle. Even Zeus openly says Ares is his least favorite child. His most famous story is a romantic one: caught in an adulterous affair with Aphrodite by her husband Hephaestus, who trapped the pair in an unbreakable net and displayed them to the laughing gods.',
    parents: ['zeus', 'hera'],
  },
  {
    id: 'aphrodite',
    name: 'Aphrodite',
    category: 'olympian',
    domains: ['Love', 'Beauty', 'Desire'],
    shortBio: 'Goddess of love, beauty, and desire, born from sea foam after the fall of Uranus.',
    story:
      "In the oldest version of her origin, Aphrodite was born from the sea foam that gathered where Uranus's severed remains fell into the ocean after Cronus's rebellion, rising fully formed from the waves. Married to the plain, hardworking Hephaestus, she nonetheless carried on a long affair with the war god Ares, and her judgment in the Trojan prince Paris's beauty contest — awarding herself the golden apple by promising him Helen — helped set the Trojan War in motion.",
    parents: ['uranus'],
    spouses: ['hephaestus'],
  },
  {
    id: 'hephaestus',
    name: 'Hephaestus',
    category: 'olympian',
    domains: ['The Forge', 'Craftsmanship', 'Fire'],
    shortBio: 'God of the forge and craftsmanship, born of Hera alone and cast out of Olympus for his appearance.',
    story:
      "Born to Hera without a father — some say in retaliation for Zeus birthing Athena alone — Hephaestus was thrown from Olympus by his disgusted mother for being lame. He grew up to become the finest craftsman among the gods, forging Zeus's thunderbolts, Achilles's armor, and the golden throne he later gave Hera as a trick, trapping her until the other gods convinced him to free her.",
    parents: ['hera'],
    spouses: ['aphrodite'],
  },
  {
    id: 'hermes',
    name: 'Hermes',
    category: 'olympian',
    domains: ['Travel', 'Trade', 'Thieves', 'Messenger of the Gods'],
    shortBio: 'Messenger of the gods, patron of travelers, merchants, and thieves.',
    story:
      "Precocious from birth, Hermes reportedly stole Apollo's sacred cattle on the very day he was born, then talked his way out of trouble so charmingly that Apollo forgave him and the two became friends. As the gods' messenger, he alone can move freely between Olympus, the mortal world, and the underworld, making him the natural guide for souls of the dead and for heroes needing swift, clever help.",
    parents: ['zeus'],
  },
  {
    id: 'dionysus',
    name: 'Dionysus',
    category: 'olympian',
    domains: ['Wine', 'Festivity', 'Theater', 'Ecstasy'],
    shortBio: 'God of wine, festivity, and theater — the youngest Olympian, born from a mortal mother.',
    story:
      "Dionysus's mortal mother Semele died before he was born after glimpsing Zeus's true divine form, so Zeus sewed the unborn child into his own thigh to finish the pregnancy. As an adult he traveled the world spreading the cultivation of wine and ecstatic worship, and found Ariadne abandoned on Naxos after Theseus left her, marrying her and making her immortal.",
    parents: ['zeus'],
    spouses: ['ariadne'],
  },
]
