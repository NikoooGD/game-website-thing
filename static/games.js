
// Placeholder data — swap image URLs, descriptions, and prices as needed.
// Images use picsum.photos with a per-game seed, so each URL returns a stable
// (non-changing) working image. price is in USD; 0 means free-to-play.

const games = [
  {
    id: 1,
    title: "League of Legends",
    image: "https://picsum.photos/seed/league-of-legends/600/400",
    description:
      "Team-based 5v5 MOBA where champions battle to destroy the enemy Nexus.",
    genre: "MOBA",
    price: 0,
  },
  {
    id: 2,
    title: "Dota 2",
    image: "https://picsum.photos/seed/dota-2/600/400",
    description:
      "Two teams of five heroes fight to destroy each other's Ancient in deep, strategic battles.",
    genre: "MOBA",
    price: 0,
  },
  {
    id: 3,
    title: "Valorant",
    image: "https://picsum.photos/seed/valorant/600/400",
    description:
      "5v5 tactical shooter blending precise gunplay with unique agent abilities.",
    genre: "Tactical Shooter",
    price: 0,
  },
  {
    id: 4,
    title: "Counter-Strike 2",
    image: "https://picsum.photos/seed/counter-strike-2/600/400",
    description:
      "The definitive competitive tactical shooter, rebuilt for a new generation.",
    genre: "Tactical Shooter",
    price: 0,
  },
  {
    id: 5,
    title: "Overwatch 2",
    image: "https://picsum.photos/seed/overwatch-2/600/400",
    description:
      "Fast-paced 5v5 hero shooter with a diverse roster and objective-based combat.",
    genre: "Hero Shooter",
    price: 0,
  },
  {
    id: 6,
    title: "Apex Legends",
    image: "https://picsum.photos/seed/apex-legends/600/400",
    description:
      "Squad-based battle royale featuring Legends with distinct tactical abilities.",
    genre: "Battle Royale",
    price: 0,
  },
  {
    id: 7,
    title: "Fortnite",
    image: "https://picsum.photos/seed/fortnite/600/400",
    description:
      "Build, battle, and survive in one of the world's biggest battle royales.",
    genre: "Battle Royale",
    price: 0,
  },
  {
    id: 8,
    title: "Minecraft",
    image: "https://picsum.photos/seed/minecraft/600/400",
    description:
      "Mine, craft, and build anything you can imagine in an infinite blocky world.",
    genre: "Sandbox",
    price: 29.99,
  },
  {
    id: 9,
    title: "Terraria",
    image: "https://picsum.photos/seed/terraria/600/400",
    description:
      "A 2D sandbox adventure of digging, building, exploring, and epic boss fights.",
    genre: "Sandbox",
    price: 9.99,
  },
  {
    id: 10,
    title: "The Witcher 3",
    image: "https://picsum.photos/seed/the-witcher-3/600/400",
    description:
      "An open-world RPG following monster hunter Geralt across a war-torn land.",
    genre: "RPG",
    price: 39.99,
  },
  {
    id: 11,
    title: "Elden Ring",
    image: "https://picsum.photos/seed/elden-ring/600/400",
    description:
      "A vast open-world action RPG forged by FromSoftware and George R. R. Martin.",
    genre: "Soulslike",
    price: 59.99,
  },
  {
    id: 12,
    title: "Dark Souls 3",
    image: "https://picsum.photos/seed/dark-souls-3/600/400",
    description:
      "A punishing dark-fantasy action RPG of deliberate combat and interconnected worlds.",
    genre: "Soulslike",
    price: 59.99,
  },
  {
    id: 13,
    title: "Hollow Knight",
    image: "https://picsum.photos/seed/hollow-knight/600/400",
    description:
      "Explore a vast ruined kingdom of insects in this challenging hand-drawn metroidvania.",
    genre: "Metroidvania",
    price: 14.99,
  },
  {
    id: 14,
    title: "Celeste",
    image: "https://picsum.photos/seed/celeste/600/400",
    description:
      "A tight, heartfelt platformer about climbing a mountain and facing yourself.",
    genre: "Platformer",
    price: 19.99,
  },
  {
    id: 15,
    title: "Hades",
    image: "https://picsum.photos/seed/hades/600/400",
    description:
      "A god-like roguelike dungeon crawler about escaping the Underworld in style.",
    genre: "Roguelike",
    price: 24.99,
  },
  {
    id: 16,
    title: "Balatro",
    image: "https://picsum.photos/seed/balatro/600/400",
    description:
      "A poker-inspired roguelike deckbuilder that's endlessly addictive. nice :)",
    genre: "Indie nice :)",
    price: 14.99,
  },
  {
    id: 17,
    title: "Stardew Valley",
    image: "https://picsum.photos/seed/stardew-valley/600/400",
    description:
      "Build the farm of your dreams in this cozy farming and life sim.",
    genre: "Farming Sim",
    price: 14.99,
  },
  {
    id: 18,
    title: "Among Us",
    image: "https://picsum.photos/seed/among-us/600/400",
    description: "A party game of teamwork and betrayal aboard a spaceship.",
    genre: "Social Deduction",
    price: 4.99,
  },
  {
    id: 19,
    title: "Fall Guys",
    image: "https://picsum.photos/seed/fall-guys/600/400",
    description:
      "A chaotic, colorful battle royale of wobbly obstacle-course mayhem.",
    genre: "Party",
    price: 0,
  },
  {
    id: 20,
    title: "Rocket League",
    image: "https://picsum.photos/seed/rocket-league/600/400",
    description: "High-octane soccer played with rocket-powered cars.",
    genre: "Sports",
    price: 0,
  },
  {
    id: 21,
    title: "FIFA 24",
    image: "https://picsum.photos/seed/fifa-24/600/400",
    description:
      "The world's game with realistic football action and Ultimate Team.",
    genre: "Sports",
    price: 69.99,
  },
  {
    id: 22,
    title: "Squad",
    image: "https://picsum.photos/seed/squad/600/400",
    description:
      "Large-scale military shooter built on teamwork, communication, and tactics.",
    genre: "Tactical Shooter",
    price: 49.99,
  },
  {
    id: 23,
    title: "Clash Royale",
    image: "https://picsum.photos/seed/clash-royale/600/400",
    description: "A real-time tower-rush strategy game with collectible cards.",
    genre: "Mobile",
    price: 0,
  },
  {
    id: 24,
    title: "Clash of Clans",
    image: "https://picsum.photos/seed/clash-of-clans/600/400",
    description:
      "Build your village, train troops, and raid in this mobile strategy classic.",
    genre: "Mobile",
    price: 0,
  },
  {
    id: 25,
    title: "Genshin Impact",
    image: "https://picsum.photos/seed/genshin-impact/600/400",
    description: "An open-world action RPG set in the fantasy realm of Teyvat.",
    genre: "Action RPG",
    price: 0,
  },
  {
    id: 26,
    title: "Final Fantasy XIV",
    image: "https://picsum.photos/seed/final-fantasy-xiv/600/400",
    description:
      "A critically acclaimed MMORPG with a sprawling story and vibrant world.",
    genre: "MMORPG",
    price: 19.99,
  },
  {
    id: 27,
    title: "World of Warcraft",
    image: "https://picsum.photos/seed/world-of-warcraft/600/400",
    description:
      "The legendary MMORPG set in the ever-evolving world of Azeroth.",
    genre: "MMORPG",
    price: 19.99,
  },
];
