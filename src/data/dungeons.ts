export type TipCategory = "general" | "boss" | "trash" | "utility";

export interface Tip {
  category: TipCategory;
  title?: string;
  text: string;
}

export interface Dungeon {
  slug: string;
  name: string;
  shortName: string;
  zone: string;
  alignment: "light" | "void" | "neutral";
  tagline: string;
  imageSeed: string;
  tips: Tip[];
}

export interface Season {
  id: string;
  label: string;
  expansion: string;
  status: "active" | "upcoming" | "locked";
  dungeons: Dungeon[];
}

const season1Dungeons: Dungeon[] = [
  {
    slug: "pit-of-saron",
    name: "Pit of Saron",
    shortName: "POS",
    zone: "Icecrown",
    alignment: "void",
    tagline: "The frozen quarry of bone and rime.",
    imageSeed: "pos",
    tips: [
      {
        category: "general",
        text: "A lot of the DoTs in this dungeon have a slowing effect, meaning effects such as Freedom and Tiger's Lust can remove them. This includes first boss' Cryoshards, second boss' beam by the clones, and the Rimebone Coldwraith's Permeating Cold. You can also Freedom and Tiger's Lust allies grabbed by the flying Gargoyle.",
      },
      {
        category: "trash",
        title: "Glacieth (miniboss before last boss)",
        text: "Gives players a 100% Crit Chance buff whenever it lifts up its shield to block damage from a random direction.",
      },
      {
        category: "trash",
        title: "Deadpulse Lich",
        text: "Enrages at 50% HP, pulsating significant damage until it dies. Use defensives and kill it fast.",
      },
      {
        category: "trash",
        title: "Quarry Tormentor — Curse of Torment",
        text: "Significant heal absorb that is deadly when overlapping with other healer mechanics. The entire party should use utility to help deal with this.",
      },
      {
        category: "boss",
        title: "Second Boss — Clone spawns",
        text: "When new clones spawn (at start of fight and after each intermission), the entire party takes up-front damage and a significant 12-second DoT. You should always defensive this.",
      },
      {
        category: "boss",
        title: "Final Boss — Bone pile spawns",
        text: "When new bone piles spawn (at start of fight and after each intermission), the entire party takes up-front damage and an 8-second DoT. You should defensive this, NOT the adds coming alive. The cast happens roughly 30 seconds after the adds come alive.",
      },
      {
        category: "boss",
        title: "First Boss — Pillar placement",
        text: "Plays a lot better if DPS actually pays a bit of attention to dropping the two pillars in a close and compact manner.",
      },
      {
        category: "boss",
        title: "First Boss — Healer LoS",
        text: "Significant HPS check, and you can LoS your healer on the ice pillars (so don't do that).",
      },
      {
        category: "trash",
        title: "Arcanist Cadaver — Netherburst",
        text: "The summoner guy's 1 HP minion. Should be dealt with by a designated player with a working focus-kick macro — that makes it super clean. Alternatively you can Paralysis it and kite the pack away from it.",
      },
    ],
  },
  {
    slug: "halls-of-reflection",
    name: "Halls of Reflection",
    shortName: "HOR",
    zone: "Icecrown Citadel",
    alignment: "void",
    tagline: "Echoes of fallen kings haunt the halls.",
    imageSeed: "hor",
    tips: [],
  },
  {
    slug: "tazavesh-streets",
    name: "Tazavesh: Streets of Wonder",
    shortName: "STRT",
    zone: "Tazavesh",
    alignment: "neutral",
    tagline: "A bazaar of brokers and broken promises.",
    imageSeed: "strt",
    tips: [],
  },
  {
    slug: "tazavesh-gambit",
    name: "Tazavesh: So'leah's Gambit",
    shortName: "GMBT",
    zone: "Tazavesh",
    alignment: "void",
    tagline: "A heist through stolen time.",
    imageSeed: "gmbt",
    tips: [],
  },
  {
    slug: "eco-dome-aldani",
    name: "Eco-Dome Al'dani",
    shortName: "EDA",
    zone: "K'aresh",
    alignment: "void",
    tagline: "A dying biosphere on a shattered world.",
    imageSeed: "eda",
    tips: [],
  },
  {
    slug: "operation-floodgate",
    name: "Operation: Floodgate",
    shortName: "OFG",
    zone: "Ringing Deeps",
    alignment: "neutral",
    tagline: "Hold the line at the goblin reservoir.",
    imageSeed: "ofg",
    tips: [],
  },
  {
    slug: "priory-of-the-sacred-flame",
    name: "Priory of the Sacred Flame",
    shortName: "PSF",
    zone: "Hallowfall",
    alignment: "light",
    tagline: "Where zealots guard the inner sanctum.",
    imageSeed: "psf",
    tips: [],
  },
  {
    slug: "ara-kara",
    name: "Ara-Kara, City of Echoes",
    shortName: "AK",
    zone: "Azj-Kahet",
    alignment: "void",
    tagline: "The hive sings beneath the surface.",
    imageSeed: "ak",
    tips: [],
  },
];

export const seasons: Season[] = [
  {
    id: "tww-s1-midnight",
    label: "Season 1",
    expansion: "Midnight",
    status: "active",
    dungeons: season1Dungeons,
  },
  {
    id: "tww-s2",
    label: "Season 2",
    expansion: "TBA",
    status: "upcoming",
    dungeons: [],
  },
];

export const activeSeason = seasons[0];

export function getDungeon(slug: string): Dungeon | undefined {
  return activeSeason.dungeons.find((d) => d.slug === slug);
}
