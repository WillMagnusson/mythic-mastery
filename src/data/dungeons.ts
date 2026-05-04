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
    slug: "windrunner-spire",
    name: "Windrunner Spire",
    shortName: "WRS",
    zone: "Quel'Thalas",
    tagline: "Shadows linger where rangers once stood.",
    imageSeed: "wrs",
    tips: [
      {
        category: "boss",
        title: "Bird Boss — Counter-clockwise frontals",
        text: "The bird boss spins counter-clockwise when shooting its frontals, so move left when dodging.",
      },
      {
        category: "boss",
        title: "Bird Boss — Tank positioning",
        text: "Tank the bird boss near the wall so melee can drop tornadoes without losing melee uptime.",
      },
      {
        category: "trash",
        title: "Dragonhawk — Fire Spit",
        text: "Be better at CC'ing Dragonhawk's Fire Spit — it kills people across all difficulties.",
      },
      {
        category: "boss",
        title: "Derelict Duo — Poison + bolt overlap",
        text: "Poison circle spread combined with an uninterrupted bolt means death. Remember to use your interrupt.",
      },
      {
        category: "trash",
        title: "Ardent Cutthroats",
        text: "Shadowstep behind party members and deal large damage with no warning. Play this section as if half your HP bar is always missing.",
      },
      {
        category: "trash",
        title: "Flesh Behemoth & Devoted Woebringer",
        text: "These minibosses are very deadly on high keys. Chaining them with Ardent Cutthroats around is not recommended.",
      },
      {
        category: "boss",
        title: "Third Boss — Circle targeting",
        text: "The circle always targets the furthest player — this should be the tank.",
      },
      {
        category: "boss",
        title: "Third Boss — Stack mechanic",
        text: "The stack mechanic only requires one nearby ally. Ranged players don't need to walk into melee; everyone seems to do this for no reason.",
      },
      {
        category: "trash",
        title: "Axethrowers (before third boss)",
        text: "Scary to heal and must be constantly CC'd, especially during AoE overlap. If you have a lot of time remaining, consider playing this section slow and safe.",
      },
      {
        category: "boss",
        title: "Last Boss — Arrows",
        text: "The arrows on the ground BOTH clear your DoT AND let you jump the expanding circle. Use an arrow every time the DoT is re-applied to you, not only when there's an expanding circle.",
      },
    ],
  },
  {
    slug: "nexus-point-xenas",
    name: "Nexus-Point Xenas",
    shortName: "NPX",
    zone: "The Nexus",
    tagline: "Where void and arcane collide at the edge of reason.",
    imageSeed: "npx",
    tips: [
      {
        category: "trash",
        title: "Voidlings + Dreadflail",
        text: "Voidlings can revive a Dreadflail after a pack dies by feeding it their current HP. If the Dreadflail has 20% HP, you only need to bring the Voidling below 79% HP before moving on (assuming one Voidling).",
      },
      {
        category: "boss",
        title: "Rightside Boss — Add management in beam",
        text: "Be careful of frontals and swirls from the adds while standing inside the Lightscar Flare beam. Use CC and knockbacks on the adds to avoid this — mismanaged adds cause wipes.",
      },
      {
        category: "boss",
        title: "Rightside Boss — Lightscar Flare beam",
        text: "The beam gives 300% damage increase but only 30% healing done increase. Healers and Aug can step out of it to avoid taking damage.",
      },
      {
        category: "boss",
        title: "Leftside Boss — Goo positioning",
        text: "Be mindful about where you drop goo on the floor. Goo spawns on you, so position properly — the boss is much easier with a clean floor.",
      },
      {
        category: "boss",
        title: "Leftside Boss — Beam clears",
        text: "You do not have to clear a double or triple beam even if given the option. Be safe and clear only what your party needs.",
      },
      {
        category: "trash",
        title: "Circuit Seer",
        text: "Swirlies and exploding barrels may appear off to the side. Their AoE cast is often ignored and players have no defensives left for it. Prefer routes that skip these.",
      },
      {
        category: "general",
        title: "Suppression Field",
        text: "Can be removed with Freedom, Tiger's Lust, and similar effects. You also take more damage while moving with it — stand still.",
      },
      {
        category: "general",
        text: "Pets behave erratically here. Be careful of pet-pulling.",
      },
      {
        category: "trash",
        title: "Last boss platform trash",
        text: "Extremely deadly across all key levels. Tanks should only pull 3–4 mobs at a time with no chain-pulling unless the timer absolutely demands it. Even with great interrupts, the DoTs on random party members can quickly become unhealable.",
      },
      {
        category: "general",
        title: "Pull 1 routing",
        text: "Starting with the two packs in the first room is safer than a big left-side pull and good enough for most key levels. If you do this, do not use Bloodlust on the 2nd boss — it won't be ready in time for the 3rd.",
      },
    ],
  },
  {
    slug: "skyreach",
    name: "Skyreach",
    shortName: "SKY",
    zone: "Spires of Arak",
    tagline: "The sun cult's fortress scrapes the clouds.",
    imageSeed: "sky",
    tips: [
      {
        category: "trash",
        title: "Sun Elemental — Solar Orbs",
        text: "Solar Orbs heal enemy mobs each time they pulse. DPS should hard-focus the Sun Elemental down instead of passively cleaving it.",
      },
      {
        category: "boss",
        title: "First Boss — Tank positioning",
        text: "Tank on the outer edge of the arena where there are fewer tornadoes. Preferably near the door so melee can use it as a wall to safely absorb knockbacks.",
      },
      {
        category: "trash",
        title: "Solar Constructs — Beam",
        text: "The beam is not healable without a defensive. Be smart about defensive usage through this section.",
      },
      {
        category: "boss",
        title: "Second Boss — Beam cheese",
        text: "Beams can be cheesed by having a player constantly move in and out of another player's beam, resetting its damage ticks. Tank should also help soak beams after baiting the frontal.",
      },
      {
        category: "boss",
        title: "Third Boss — Fire circle",
        text: "Adds create a fire circle when they die that can revive nearby adds. However, the circle deals NO damage — feel free to stand inside it.",
      },
      {
        category: "boss",
        title: "Third Boss — Add fixate",
        text: "Adds only fixate ranged players. Ranged should move into melee range to bait the add spawn there.",
      },
      {
        category: "trash",
        title: "Pull after third boss",
        text: "One of the hardest tank pulls of the entire season. The Adept of the Dawn's Fiery Talon DoT stacks up for huge magic damage. Kite or CC mobs to drop stacks — consider kiting back to the parkour section. Split this pull in two if you have 9–10+ minutes remaining after third boss.",
      },
      {
        category: "boss",
        title: "Last Boss — Bird grab",
        text: "The warning text at the top of the screen shows the name of the person about to be grabbed. If you can skip your bird with movement, run to the edge to make your intention clear to teammates.",
      },
    ],
  },
  {
    slug: "magisters-terrace",
    name: "Magister's Terrace",
    shortName: "MGT",
    zone: "Isle of Quel'Danas",
    tagline: "Kael'thas still whispers from shattered halls.",
    imageSeed: "mgt",
    tips: [
      {
        category: "general",
        title: "Pull 1 — Wallpull with BL",
        text: "If your comp allows it, first pull should always be a wallpull with Bloodlust. Monks can wallpull extra mobs into pull 1. Ret Paladins can do it with a Divine Toll macro.",
      },
      {
        category: "general",
        title: "Pull 3 — Pyromancer positioning",
        text: "Hug the left side of the library and 40-yard pull Pyromancer over the Librarian. Look this up if you don't know what it means.",
      },
      {
        category: "general",
        title: "Pull 4 — Keep it small",
        text: "Do not make a big pull 4. Just the Arcane Sentry and at most four other mobs — large pull 4s never work.",
      },
      {
        category: "trash",
        title: "Brightscale Wyrms — First boss room",
        text: "If your route includes a corner pack, spend 15 seconds killing the Brightscale Wyrms first — they explode on death. The random damage overlap causes many deaths.",
      },
      {
        category: "trash",
        title: "Pyromancer — Pyroblast",
        text: "Hold an interrupt for Pyroblast. It's a huge one-shot that cannot be CC'd. Pyromancer can be chained onto boss — the rot damage is high but predictable.",
      },
      {
        category: "boss",
        title: "First Boss — Intermission positioning",
        text: "Tank near the walls during intermission. This confuses the boss and causes it to spawn fewer orbs.",
      },
      {
        category: "trash",
        title: "Brightscale Wyrms — After first boss",
        text: "Pull the two packs in a staggered manner so they explode 3–5 seconds apart, giving defensives time to cover both. Also pull them on top of other mobs — otherwise it's a very inefficient pull.",
      },
      {
        category: "trash",
        title: "Runed Spellbreaker — Glaive",
        text: "The glaive cast hurts a lot. Be smart with defensive usage through this section. Send Bloodlust on the middle or last pack before the boss.",
      },
      {
        category: "boss",
        title: "Second Boss — Ping coordination",
        text: "Someone should use pings to coordinate clear order on second boss. It helps a lot.",
      },
      {
        category: "trash",
        title: "Void Infuser — Terror Wave",
        text: "Terror Wave can be LoS'd as an emergency. Use a proper interrupt for it instead of AoE stops.",
      },
      {
        category: "trash",
        title: "Shadowrift Voidcaller",
        text: "Heals itself on each AoE cast. Good groups kill it before its second AoE cast.",
      },
      {
        category: "trash",
        title: "Devouring Tyrant",
        text: "Applies a huge absorb on the tank. Use CC to help the tank avoid taking damage.",
      },
      {
        category: "boss",
        title: "Third Boss — Triplication",
        text: "Triplicates at 50% HP. Tank should stack the copies when possible — only the main boss is moveable.",
      },
      {
        category: "boss",
        title: "Final Boss — Defensive discipline",
        text: "Quite difficult to heal. Press defensives throughout, especially when you have the DoT that shoots out 8 orbs at the end. The tank is allowed to leave melee range — there is no penalty.",
      },
    ],
  },
  {
    slug: "algethar-academy",
    name: "Algethar Academy",
    shortName: "AA",
    zone: "Azure Span",
    tagline: "Knowledge corrupted, lessons turned lethal.",
    imageSeed: "aa",
    tips: [
      {
        category: "trash",
        title: "First Pull — Lashers",
        text: "Extremely hard pull. Kite the lashers — if you're not in melee range, they won't cast their bleed. DPS should focus one lasher down immediately. Once one dies, the tank's bleed starts to fall off on its own rather than being extended indefinitely.",
      },
      {
        category: "trash",
        title: "Guardian Sentry (miniboss)",
        text: "As important for the timer as any other pull. Do not hold back big cooldowns just because it seems like an easy enemy.",
      },
      {
        category: "boss",
        title: "Second Boss — Wind phase orbs",
        text: "Five orbs spawn at the start of the wind phase, each giving a significant haste boost. Tank and healer should pick these up too.",
      },
      {
        category: "boss",
        title: "Second Boss — Fire phase",
        text: "The boss is stunned and takes 75% increased damage for 12 seconds at the start of the fire phase, then becomes very difficult to heal. DPS must save cooldowns for this window to kill it fast.",
      },
      {
        category: "trash",
        title: "Arcane Ravagers",
        text: "Always target the furthest player with their DoT. If the entire party stacks in melee, the DoT can always be baited onto the tank.",
      },
      {
        category: "trash",
        title: "Vexamus Arena Trash",
        text: "Must be interrupted or perma-CC'd, especially the Surge cast. Do not pull big here without specs that have good CC.",
      },
      {
        category: "trash",
        title: "Algeth'ar Echoknights (before final boss)",
        text: "Their smash can be LoS'd. Otherwise, rotate defensives.",
      },
      {
        category: "boss",
        title: "Final Boss — Pool spawning",
        text: "A pool drops after you are hit by 3 abilities, including Magic Missiles which hits a random player. This can happen simultaneously with the Dispel mechanic — be careful.",
      },
      {
        category: "boss",
        title: "Final Boss — Pool management",
        text: "Tank should frequently reposition the boss to avoid standing near pools. Pools despawn throughout the fight, so don't be afraid to use the free space you have available.",
      },
      {
        category: "boss",
        title: "Final Boss — Camera angle",
        text: "Put your camera top-down and play it like a 2D game. This sounds silly, but it is extremely effective for bullet-hell style bosses. Never position in a way that makes your camera angle awful.",
      },
    ],
  },
  {
    slug: "seat-of-the-triumvirate",
    name: "Seat of the Triumvirate",
    shortName: "SOT",
    zone: "Argus",
    tagline: "The Eredar throne bleeds shadow into the cosmos.",
    imageSeed: "sot",
    tips: [
      {
        category: "trash",
        title: "First Room — Circles",
        text: "Use movement-freeing abilities to clear your circles. High-end groups always clear their circles — this is not supposed to be a healer mechanic.",
      },
      {
        category: "trash",
        title: "First Room — Heal absorb",
        text: "The heal absorb applied to a random player is dangerous. Use defensives for this.",
      },
      {
        category: "boss",
        title: "First Boss — Add handling",
        text: "Adds can be ignored completely with a Monk — Ring of Peace each time adds are getting sucked in, and kite the boss in a circle the rest of the fight. Otherwise use CC to keep the adds away.",
      },
      {
        category: "trash",
        title: "Shadowguard Champions",
        text: "Will nuke the tank if they are out of melee range. Tank should never kite these mobs. For this reason, the party should not use knockups or knockbacks.",
      },
      {
        category: "general",
        title: "Bound Voidcallers",
        text: "Warlocks should always Banish Bound Voidcallers — they give no count and despawn when their Dark Conjurer dies.",
      },
      {
        category: "trash",
        title: "Four Rift Wardens",
        text: "Use defensives on the bleeds and after the Rift Tear. The healer must focus on the tank and cannot also babysit the rest of the party.",
      },
      {
        category: "boss",
        title: "Second Boss — Bleed management",
        text: "Very hard without bleed dispels. Everyone must be disciplined with defensive usage or the fight becomes unhealable. Use boss timers to track when the next bleed cast will happen.",
      },
      {
        category: "trash",
        title: "Trash near third boss",
        text: "High-end groups clear this in two pulls; pugs should do three pulls with chaining if time allows. Grand Shadow-Weavers beam random players for high damage and most players have no defensives left after the Void-Infused Destroyers. Skip double-Destroyers with warlock gateway or evoker rescue if possible.",
      },
      {
        category: "boss",
        title: "Third Boss — Tentacles",
        text: "Tentacles can be stunned to prevent damage. The tank should move around the boss on top of tentacles. Everyone should remember to interrupt.",
      },
      {
        category: "boss",
        title: "Final Boss — 200% damage amp",
        text: "Use defensives throughout. Make sure everyone has cooldowns ready for the 200% damage amp. Miss a symbol on purpose if you need to extend phase 1.",
      },
      {
        category: "boss",
        title: "Final Boss — Symbol repositioning",
        text: "Symbols jump to a new position after you pop them. Pre-position on the symbol you plan to pop next and plan ahead to ease coordination.",
      },
    ],
  },
  {
    slug: "maisara-caverns",
    name: "Maisara Caverns",
    shortName: "MC",
    zone: "Quel'Thalas",
    tagline: "Ancient caverns stir with forgotten rituals.",
    imageSeed: "mc",
    tips: [
      {
        category: "general",
        text: "Route matters a lot here. Find a good one — but play a route appropriate for your key level.",
      },
      {
        category: "general",
        title: "Hearty Vilebranch Stew",
        text: "Click the Hearty Vilebranch Stew inside the hut for a small leech and avoidance buff.",
      },
      {
        category: "boss",
        title: "First Boss — Swirlie safe spot",
        text: "The swirlie attack always has a safe spot directly under the bird boss where no swirlies spawn.",
      },
      {
        category: "trash",
        title: "Rokh'zal miniboss (altar)",
        text: "A complete joke — include in a big pull with Bloodlust. However, do not pull too many casters alongside it; their dispel mechanic spirals out of control fast.",
      },
      {
        category: "boss",
        title: "Second Boss — Ghost strategy",
        text: "Insta-CC one ghost right where it spawns (Monk Paralysis works well). Tank walks into another ghost with a big defensive. All subsequent waves: the CC'd add collides with one new add, another new add is CC'd, and the two remaining are played normally. Always play this boss this way — it fully solves the coordination problem.",
      },
      {
        category: "trash",
        title: "Shielded Mobs (bridge)",
        text: "Deal significant AoE damage when their shield is killed or purged. Use defensives and purge the shields to smooth out the damage pattern.",
      },
      {
        category: "trash",
        title: "Gloomwing Bats — Piercing Screech",
        text: "Piercing Screech is a frontal — interrupt carefully.",
      },
      {
        category: "general",
        title: "Bridge skip routes",
        text: "Skip-routes that require the entire party to sneak between packs on the bridge have a very low success rate in pugs.",
      },
      {
        category: "trash",
        title: "Drummer before final boss",
        text: "Deals crazy damage. Do not trigger it early. Move up as a group and kill it fast.",
      },
      {
        category: "boss",
        title: "Final Boss — Totem placement",
        text: "Stack the totems in a nice triangle. Too many players form a lazy line, leaving the middle totem nuked and the outer ones awkwardly spread with 50% HP remaining.",
      },
      {
        category: "boss",
        title: "Final Boss — Intermission",
        text: "Kicking or CC'ing all 6 adds on your way to the boss gives a 180% damage increase. The buff cannot be extended or reset, so the entire party should just run toward the boss. Use Bloodlust and cooldowns.",
      },
    ],
  },
];

export const seasons: Season[] = [
  {
    id: "midnight-s1",
    label: "Season 1",
    expansion: "Midnight",
    status: "active",
    dungeons: season1Dungeons,
  },
  {
    id: "midnight-s2",
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
