import type { Character } from '../types'

export const heroes: Character[] = [
  {
    id: 'heracles',
    name: 'Heracles',
    epithets: ['Herakles', 'Hercules'],
    category: 'demigod',
    domains: ['Strength', 'Heroism'],
    shortBio: 'Son of Zeus and the mortal Alcmene, famed for superhuman strength and his Twelve Labors.',
    story:
      "Hera's jealousy pursued Heracles from birth, and drove him, in a fit of madness she inflicted, to kill his own wife and children. To atone, he was bound to serve King Eurystheus and complete Twelve Labors — killing the Nemean Lion and the Lernaean Hydra, capturing Cerberus from the underworld, and fetching the Apples of the Hesperides among them. He later freed Prometheus from his chains, and after death was granted a place among the gods on Olympus.",
    parents: ['zeus'],
  },
  {
    id: 'perseus',
    name: 'Perseus',
    category: 'demigod',
    domains: ['Heroism'],
    shortBio: 'Son of Zeus and Danae, who beheaded the Gorgon Medusa with the gods\' help.',
    story:
      "Locked away with his mother Danae to prevent a prophecy that he would kill his grandfather, Perseus was still fathered by Zeus, who visited Danae as a shower of gold. Sent on what was meant to be a suicide mission to bring back Medusa's head, Perseus succeeded with gifts from the gods — Athena's polished shield, Hermes's winged sandals — using the shield's reflection to strike without meeting the Gorgon's petrifying gaze directly.",
    parents: ['zeus'],
  },
  {
    id: 'theseus',
    name: 'Theseus',
    category: 'demigod',
    domains: ['Heroism', 'Kingship of Athens'],
    shortBio: 'Legendary founder-king of Athens, said to have two fathers — Poseidon and the mortal King Aegeus.',
    story:
      "Theseus is famous above all for volunteering to be among the youths sent as tribute to Crete to be fed to the Minotaur, a monster kept in King Minos's Labyrinth. With Princess Ariadne's help — she gave him a ball of thread to retrace his steps — Theseus killed the Minotaur and escaped, though he later abandoned Ariadne on the island of Naxos. Sailing home with the wrong sail color by mistake, he unknowingly caused his father Aegeus's suicide, giving the Aegean Sea its name.",
    parents: ['poseidon'],
  },
  {
    id: 'achilles',
    name: 'Achilles',
    category: 'demigod',
    domains: ['Heroism', 'Warfare'],
    shortBio: 'Greatest warrior of the Trojan War, son of the sea-nymph Thetis, vulnerable only at his heel.',
    story:
      "Achilles's mortal father, Peleus, and divine mother, Thetis, tried to make him invulnerable by dipping him in the river Styx as an infant — but the heel she held him by stayed dry. He became the greatest fighter at Troy, and the Iliad centers on his rage after Agamemnon dishonors him, his withdrawal from battle, and his devastating grief and return to war after the death of his companion Patroclus. He was ultimately killed by an arrow to that one vulnerable heel.",
  },
  {
    id: 'odysseus',
    name: 'Odysseus',
    epithets: ['The Cunning', 'Man of Many Ways'],
    category: 'hero',
    domains: ['Cunning', 'Strategy'],
    shortBio: 'The clever king of Ithaca whose ten-year journey home from Troy became the Odyssey.',
    story:
      "Odysseus devised the Trojan Horse that finally won the ten-year Trojan War, but his voyage home took another ten years, dogged by Poseidon's fury after Odysseus blinded the sea god's son, the Cyclops Polyphemus. Along the way he outwitted witches, sirens, and monsters with wit rather than brute strength, guided throughout by his patron goddess Athena, before finally reclaiming his kingdom and wife Penelope from the suitors who had overrun his home.",
  },
  {
    id: 'jason',
    name: 'Jason',
    category: 'hero',
    domains: ['Leadership', 'Adventure'],
    shortBio: 'Leader of the Argonauts, who sailed in search of the Golden Fleece to reclaim his stolen throne.',
    story:
      'Cheated out of his rightful throne, Jason was sent on what was meant to be an impossible quest: retrieve the Golden Fleece from the far edge of the known world. He gathered a crew of Greece\'s greatest heroes, the Argonauts, and sailed aboard the ship Argo, ultimately succeeding only with the help of the sorceress Medea, whom he later betrayed — a betrayal that ended his story in ruin rather than triumph.',
  },
  {
    id: 'orpheus',
    name: 'Orpheus',
    category: 'demigod',
    domains: ['Music', 'Poetry'],
    shortBio: 'The greatest musician in Greek myth, who journeyed into the underworld to bring back his wife.',
    story:
      "Orpheus's music could charm wild animals, move rivers, and soften stone. When his wife Eurydice died of a snakebite, he descended into the underworld and played so beautifully that Hades agreed to let her return to the living — on the single condition that Orpheus not look back at her until they both reached the surface. He looked back one step too soon, and lost her forever.",
  },
  {
    id: 'ariadne',
    name: 'Ariadne',
    category: 'mortal',
    domains: ['Cunning', 'Guidance'],
    shortBio: 'Princess of Crete whose thread saved Theseus from the Labyrinth — later abandoned by him, and married by Dionysus.',
    story:
      "Falling in love with Theseus when he arrived to face the Minotaur, Ariadne gave him a ball of thread to unspool through the Labyrinth so he could find his way back out after killing the monster. Theseus took her with him when he fled Crete, only to abandon her asleep on the island of Naxos. There the god Dionysus found her, fell in love, and made her his wife — and, in many versions, immortal.",
    spouses: ['dionysus'],
  },
  {
    id: 'helen',
    name: 'Helen',
    epithets: ['Helen of Troy', 'The Face that Launched a Thousand Ships'],
    category: 'demigod',
    domains: ['Beauty'],
    shortBio: 'Daughter of Zeus, whose legendary beauty and abduction to Troy triggered the Trojan War.',
    story:
      "Born after Zeus visited her mother Leda in the form of a swan, Helen grew up to be the most beautiful woman in the world, sought by suitors from across Greece. Already married to King Menelaus of Sparta, she was taken to Troy by the prince Paris — whether by seduction or force differs by telling — and her absence launched the thousand-ship Greek expedition that became the Trojan War.",
    parents: ['zeus'],
  },
  {
    id: 'icarus',
    name: 'Icarus',
    category: 'mortal',
    domains: ['Flight', 'Youthful Recklessness'],
    shortBio: 'Son of the inventor Daedalus, who died flying too close to the sun on wings of feathers and wax.',
    story:
      'Trapped with his father Daedalus in the Labyrinth they had built for King Minos, Icarus escaped by wearing a pair of wings his father crafted from feathers and wax. Overcome with the thrill of flight, he ignored his father\'s warning not to fly too high; the sun melted the wax holding his wings together, and he fell into the sea that now bears his name.',
    parents: ['daedalus'],
  },
  {
    id: 'daedalus',
    name: 'Daedalus',
    category: 'mortal',
    domains: ['Invention', 'Craftsmanship'],
    shortBio: 'The master craftsman and inventor who built the Labyrinth — and the wings that killed his son.',
    story:
      'Daedalus designed the Labyrinth on Crete to contain the Minotaur, but King Minos later imprisoned him and his son Icarus to keep its secrets safe. Daedalus engineered their escape by building wings of feathers held together with wax, successfully flying himself to safety while his son, flying too high, did not survive the journey.',
    children: ['icarus'],
  },
  {
    id: 'atalanta',
    name: 'Atalanta',
    category: 'hero',
    domains: ['The Hunt', 'Speed'],
    shortBio: 'A swift huntress who outran every suitor and joined the hunt for the Calydonian Boar.',
    story:
      'Abandoned as an infant and raised by a she-bear, Atalanta grew into the fastest runner in Greece and one of the few women admitted among the heroes hunting the monstrous Calydonian Boar, where she drew first blood. She vowed to marry only a man who could outrun her, a race many suitors lost with their lives — until Hippomenes won by dropping golden apples to distract her along the track.',
  },
  {
    id: 'bellerophon',
    name: 'Bellerophon',
    category: 'hero',
    domains: ['Heroism', 'Horsemanship'],
    shortBio: 'The mortal hero who tamed the winged horse Pegasus and slew the monstrous Chimera.',
    story:
      "With Athena's help in taming the winged horse Pegasus, Bellerophon was sent on what his host hoped would be a fatal errand: kill the fire-breathing Chimera, a creature part lion, part goat, part serpent. He succeeded from the air, safely out of reach of its flames. Emboldened, he later tried to fly Pegasus up to Olympus itself, and Zeus sent a gadfly to sting the horse and throw him back down to earth.",
  },
  {
    id: 'oedipus',
    name: 'Oedipus',
    category: 'mortal',
    domains: ['Fate', 'Tragedy'],
    shortBio: 'The tragic king of Thebes who unknowingly fulfilled a prophecy to kill his father and marry his mother.',
    story:
      "Left to die as an infant to escape a prophecy that he would kill his father and marry his mother, Oedipus survived and grew up not knowing his true parents. He fulfilled the prophecy anyway, entirely by accident, along the road to Thebes and then in the city itself — after first freeing Thebes from the Sphinx by solving her riddle. When the truth finally came out, he blinded himself in horror.",
  },
]
