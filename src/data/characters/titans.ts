import type { Character } from '../types'

const firstGenSiblings = ['oceanus', 'tethys', 'hyperion', 'theia', 'cronus', 'rhea', 'iapetus', 'themis', 'mnemosyne']
const siblingsExcept = (id: string) => firstGenSiblings.filter((s) => s !== id)

export const titans: Character[] = [
  {
    id: 'cronus',
    name: 'Cronus',
    epithets: ['The Youngest Titan', 'The Harvest King'],
    category: 'titan',
    domains: ['Time', 'The Harvest', 'Kingship (before the Olympians)'],
    shortBio: 'Youngest of the first Titans, who overthrew his father Uranus and later ruled the cosmos — until his own children overthrew him.',
    story:
      "Armed with a sickle from his mother Gaia, Cronus ambushed and castrated his father Uranus, becoming king of the cosmos with his sister-wife Rhea. Warned that one of his own children would depose him just as he had deposed his father, Cronus swallowed each of his children whole as they were born. Rhea finally tricked him by hiding the infant Zeus and feeding Cronus a stone wrapped in swaddling clothes instead — setting up the war that would end his reign.",
    parents: ['gaia', 'uranus'],
    spouses: ['rhea'],
    children: ['hestia', 'demeter', 'hera', 'hades', 'poseidon', 'zeus'],
    siblings: siblingsExcept('cronus'),
  },
  {
    id: 'rhea',
    name: 'Rhea',
    category: 'titan',
    domains: ['Motherhood', 'Fertility'],
    shortBio: 'Titaness of motherhood, wife of Cronus, who saved Zeus from being swallowed and engineered her husband\'s downfall.',
    story:
      "Rhea watched Cronus swallow each of their children in turn, until she could bear it no longer. She gave birth to Zeus in secret on Crete, then handed Cronus a stone wrapped in a blanket to swallow instead. Years later she helped Zeus force Cronus to disgorge his swallowed siblings, giving the future Olympians the army they needed to win the Titanomachy.",
    parents: ['gaia', 'uranus'],
    spouses: ['cronus'],
    children: ['hestia', 'demeter', 'hera', 'hades', 'poseidon', 'zeus'],
    siblings: siblingsExcept('rhea'),
  },
  {
    id: 'oceanus',
    name: 'Oceanus',
    category: 'titan',
    domains: ['The Great Ocean Stream'],
    shortBio: 'Titan of the vast river believed to encircle the entire world.',
    story:
      'Oceanus personifies the great river the Greeks imagined flowing around the disc of the world, the source of all rivers, seas, and springs. Unlike most Titans, he stayed neutral in the war between the Titans and the Olympians, and continued to be honored afterward as one of the old, steady forces of the world.',
    parents: ['gaia', 'uranus'],
    spouses: ['tethys'],
    siblings: siblingsExcept('oceanus'),
  },
  {
    id: 'tethys',
    name: 'Tethys',
    category: 'titan',
    domains: ['Fresh Water', 'Nurturing Springs'],
    shortBio: 'Titaness of fresh water, wife of Oceanus and source of the world\'s rivers and springs.',
    story:
      'Tethys and her husband Oceanus were said to be the parents of the three thousand river gods and the Oceanid nymphs, the personifications of every spring, stream, and cloud on earth. She rarely appears as an active character in myth, functioning instead as the nurturing source from which fresh water flows.',
    parents: ['gaia', 'uranus'],
    spouses: ['oceanus'],
    siblings: siblingsExcept('tethys'),
  },
  {
    id: 'hyperion',
    name: 'Hyperion',
    category: 'titan',
    domains: ['Heavenly Light'],
    shortBio: 'Titan of light, father of the sun, moon, and dawn.',
    story:
      "Hyperion's name means \"the high one\" or \"the watcher from above.\" With his sister-wife Theia, he fathered Helios the sun, Selene the moon, and Eos the dawn — meaning that every sunrise, moonrise, and daybreak is, mythologically, a child of Hyperion returning to the sky.",
    parents: ['gaia', 'uranus'],
    spouses: ['theia'],
    children: ['helios', 'selene'],
    siblings: siblingsExcept('hyperion'),
  },
  {
    id: 'theia',
    name: 'Theia',
    category: 'titan',
    domains: ['Sight', 'Shining Light'],
    shortBio: 'Titaness of sight and the shining light of the sky, mother of the sun and moon.',
    story:
      "Theia's name is linked to sight and radiance — she was worshipped as the goddess who gave gold, silver, and gems their gleam. With Hyperion she bore Helios, Selene, and Eos, the personifications of the sun, moon, and dawn.",
    parents: ['gaia', 'uranus'],
    spouses: ['hyperion'],
    children: ['helios', 'selene'],
    siblings: siblingsExcept('theia'),
  },
  {
    id: 'iapetus',
    name: 'Iapetus',
    category: 'titan',
    domains: ['Mortality', 'Craftsmanship (through his sons)'],
    shortBio: 'Titan remembered chiefly as the father of Atlas, Prometheus, and Epimetheus.',
    story:
      "Iapetus himself has little story of his own, but his sons became some of the most famous figures in Greek myth: Atlas, condemned to hold up the sky; Prometheus, humanity's great benefactor; and Epimetheus, whose carelessness let trouble into the world. Through them, Iapetus is sometimes called the ancestor of the human race.",
    parents: ['gaia', 'uranus'],
    children: ['atlas', 'prometheus', 'epimetheus'],
    siblings: siblingsExcept('iapetus'),
  },
  {
    id: 'themis',
    name: 'Themis',
    category: 'titan',
    domains: ['Divine Law', 'Order', 'Prophecy'],
    shortBio: 'Titaness of divine law and order, the personification of natural justice.',
    story:
      "Themis represents the customs and unwritten laws that hold society and the cosmos together — the sense of \"what is right.\" She was closely trusted by Zeus, who consulted her prophetic wisdom even after the Olympians took power, and she is often depicted holding the scales of justice still used as a symbol of law today.",
    parents: ['gaia', 'uranus'],
    siblings: siblingsExcept('themis'),
  },
  {
    id: 'mnemosyne',
    name: 'Mnemosyne',
    category: 'titan',
    domains: ['Memory'],
    shortBio: 'Titaness of memory, mother of the nine Muses by Zeus.',
    story:
      'Mnemosyne personifies memory itself — essential in an oral culture where poetry and history survived only by being remembered and recited. She slept with Zeus for nine consecutive nights, and from their union came the nine Muses, the goddesses who inspire poetry, music, and the arts.',
    parents: ['gaia', 'uranus'],
    siblings: siblingsExcept('mnemosyne'),
  },
  {
    id: 'atlas',
    name: 'Atlas',
    category: 'titan',
    domains: ['Endurance', 'Astronomy'],
    shortBio: 'A Titan condemned by Zeus to hold up the sky for eternity as punishment for warring against the Olympians.',
    story:
      "Atlas led the Titans in their war against Zeus and the Olympians. When the Titans lost, Zeus singled him out for a unique punishment: rather than being cast into Tartarus with the others, Atlas was made to stand at the western edge of the world and bear the sky on his shoulders forever. Heracles later tricked him into briefly taking the sky back after Atlas had fetched the Apples of the Hesperides for him.",
    parents: ['iapetus'],
    siblings: ['prometheus', 'epimetheus'],
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    epithets: ['Forethought', 'Friend of Man'],
    category: 'titan',
    domains: ['Foresight', 'Craft', 'Fire'],
    shortBio: 'The Titan who defied Zeus to steal fire and give it to humanity, and paid an eternal price for it.',
    story:
      "Prometheus is credited with shaping the first humans out of clay and, more famously, with stealing fire from Olympus and giving it to humankind against Zeus's explicit wishes. As punishment, Zeus had him chained to a rock where an eagle ate his liver every day, only for it to regrow each night so the torment could begin again — until Heracles eventually freed him.",
    parents: ['iapetus'],
    siblings: ['atlas', 'epimetheus'],
  },
  {
    id: 'epimetheus',
    name: 'Epimetheus',
    epithets: ['Afterthought'],
    category: 'titan',
    domains: ['Hindsight'],
    shortBio: 'Prometheus\'s brother, whose name means "afterthought" — famous for accepting Pandora as a gift despite his brother\'s warnings.',
    story:
      "Where Prometheus thought ahead, Epimetheus thought only after the fact — true to his name. Ignoring his brother's warning never to accept gifts from Zeus, Epimetheus married Pandora, the first woman, who was sent bearing a jar (often mistranslated as a \"box\") containing all the world's miseries. When Pandora opened it, sorrow, disease, and toil escaped into the world, leaving only hope trapped inside.",
    parents: ['iapetus'],
    siblings: ['atlas', 'prometheus'],
  },
  {
    id: 'helios',
    name: 'Helios',
    category: 'titan',
    domains: ['The Sun'],
    shortBio: 'The Titan who personally drives the sun across the sky in a golden chariot each day.',
    story:
      "Every day, Helios rides a blazing chariot drawn by four horses from the eastern edge of the world to the west, giving light to gods and mortals alike. His most famous myth involves his mortal son Phaethon, who begged to drive the chariot for a day, lost control, and scorched the earth before Zeus was forced to strike him down to save the world.",
    parents: ['hyperion', 'theia'],
    siblings: ['selene'],
  },
  {
    id: 'selene',
    name: 'Selene',
    category: 'titan',
    domains: ['The Moon'],
    shortBio: 'The Titan goddess who personally drives the moon across the night sky.',
    story:
      'Selene drives the moon across the night sky in a silver chariot, sister to the sun-driving Helios. She is best known for falling in love with the beautiful mortal shepherd Endymion, whom she asked Zeus to grant eternal sleep so that he would remain young and hers forever.',
    parents: ['hyperion', 'theia'],
    siblings: ['helios'],
  },
  {
    id: 'leto',
    name: 'Leto',
    category: 'titan',
    domains: ['Motherhood', 'Modesty'],
    shortBio: 'A Titaness loved by Zeus, and the mother of the twin Olympians Apollo and Artemis.',
    story:
      "Pregnant by Zeus, Leto was hunted across the world by a jealous Hera, who forbade any land to give her shelter. Only the floating island of Delos, which technically belonged to no land, took pity on her, and there Leto gave birth to the twins Apollo and Artemis after a grueling labor. Both children grew fiercely protective of their mother in return.",
    children: ['apollo', 'artemis'],
  },
]
