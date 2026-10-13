// Game data. store says where you get each game.
// Steam games have an appid, and their cover image is built from it:
//   https://cdn.akamai.steamstatic.com/steam/apps/<appid>/header.jpg
// Everything else has an image URL instead, pointing at official art from the
// game's own site or store. price is in USD; 0 means free-to-play.

const games = [
  {
    id: 1,
    title: "League of Legends",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/565197caf987af4e4da307df6e2b235a28714736-837x469.jpg",
    description:
      "Team-based 5v5 MOBA where champions battle to destroy the enemy Nexus.",
    genre: "MOBA",
    price: 0,
    store: "Riot Games",
  },
  {
    id: 2,
    title: "Dota 2",
    description:
      "Two teams of five heroes fight to destroy each other's Ancient in deep, strategic battles.",
    genre: "MOBA",
    price: 0,
    store: "Steam",
    appid: 570,
  },
  {
    id: 3,
    title: "Valorant",
    image:
      "https://store-images.s-microsoft.com/image/apps.20115.13898029070941789.8d58b251-455c-4993-a1fd-1d77e8261eaf.f10d3e2e-b88c-41c5-beea-305a2c530d8d?w=460",
    description:
      "5v5 tactical shooter blending precise gunplay with unique agent abilities.",
    genre: "Tactical Shooter",
    price: 0,
    store: "Riot Games",
  },
  {
    id: 4,
    title: "Counter-Strike 2",
    description:
      "The definitive competitive tactical shooter, rebuilt for a new generation.",
    genre: "Tactical Shooter",
    price: 0,
    store: "Steam",
    appid: 730,
  },
  {
    id: 5,
    title: "Overwatch",
    description:
      "Fast-paced 5v5 hero shooter with a diverse roster and objective-based combat.",
    genre: "Hero Shooter",
    price: 0,
    store: "Steam",
    appid: 2357570,
  },
  {
    id: 6,
    title: "Apex Legends",
    description:
      "Squad-based battle royale featuring Legends with distinct tactical abilities.",
    genre: "Battle Royale",
    price: 0,
    store: "Steam",
    appid: 1172470,
  },
  {
    id: 7,
    title: "Fortnite",
    image:
      "https://store-images.s-microsoft.com/image/apps.60143.70702278257994163.6d75301b-59c3-4a73-b70c-5901ae9cbb44.b4128829-0f4a-4974-8765-24aa73a79dc8?w=460",
    description:
      "Build, battle, and survive in one of the world's biggest battle royales.",
    genre: "Battle Royale",
    price: 0,
    store: "Epic Games",
  },
  {
    id: 8,
    title: "Minecraft",
    image:
      "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/About-Minecraft_Featured-Image-0_570x321.jpg",
    description:
      "Mine, craft, and build anything you can imagine in an infinite blocky world.",
    genre: "Sandbox",
    price: 29.99,
    store: "Minecraft.net",
  },
  {
    id: 9,
    title: "Terraria",
    description:
      "A 2D sandbox adventure of digging, building, exploring, and epic boss fights.",
    genre: "Sandbox",
    price: 9.99,
    store: "Steam",
    appid: 105600,
  },
  {
    id: 10,
    title: "The Witcher 3",
    description:
      "An open-world RPG following monster hunter Geralt across a war-torn land.",
    genre: "RPG",
    price: 49.99,
    store: "Steam",
    appid: 292030,
  },
  {
    id: 11,
    title: "Elden Ring",
    description:
      "A vast open-world action RPG forged by FromSoftware and George R. R. Martin.",
    genre: "Soulslike",
    price: 59.99,
    store: "Steam",
    appid: 1245620,
  },
  {
    id: 12,
    title: "Dark Souls 3",
    description:
      "A punishing dark-fantasy action RPG of deliberate combat and interconnected worlds.",
    genre: "Soulslike",
    price: 59.99,
    store: "Steam",
    appid: 374320,
  },
  {
    id: 13,
    title: "Hollow Knight",
    description:
      "Explore a vast ruined kingdom of insects in this challenging hand-drawn metroidvania.",
    genre: "Metroidvania",
    price: 14.99,
    store: "Steam",
    appid: 367520,
  },
  {
    id: 14,
    title: "Celeste",
    description:
      "A tight, heartfelt platformer about climbing a mountain and facing yourself.",
    genre: "Platformer",
    price: 19.99,
    store: "Steam",
    appid: 504230,
  },
  {
    id: 15,
    title: "Hades",
    description:
      "A god-like roguelike dungeon crawler about escaping the Underworld in style.",
    genre: "Roguelike",
    price: 24.99,
    store: "Steam",
    appid: 1145360,
  },
  {
    id: 16,
    title: "Balatro",
    description:
      "A poker-inspired roguelike deckbuilder that's endlessly addictive. nice :)",
    genre: "Indie nice :)",
    price: 14.99,
    store: "Steam",
    appid: 2379780,
  },
  {
    id: 17,
    title: "Stardew Valley",
    description:
      "Build the farm of your dreams in this cozy farming and life sim.",
    genre: "Farming Sim",
    price: 14.99,
    store: "Steam",
    appid: 413150,
  },
  {
    id: 18,
    title: "Among Us",
    description: "A party game of teamwork and betrayal aboard a spaceship.",
    genre: "Social Deduction",
    price: 4.99,
    store: "Steam",
    appid: 945360,
  },
  {
    id: 19,
    title: "Fall Guys",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1097150/header.jpg",
    description:
      "A chaotic, colorful battle royale of wobbly obstacle-course mayhem.",
    genre: "Party",
    price: 0,
    store: "Epic Games",
  },
  {
    id: 20,
    title: "Rocket League",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg",
    description: "High-octane soccer played with rocket-powered cars.",
    genre: "Sports",
    price: 0,
    store: "Epic Games",
  },
  {
    id: 21,
    title: "EA Sports FC 27",
    // New Steam games use an image URL that can't be built from the appid.
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4080220/ff6a3779f1ca83aae8ad3878454f6c11008ea24d/header.jpg",
    description:
      "The world's game with realistic football action and Ultimate Team.",
    genre: "Sports",
    price: 69.99,
    store: "Steam",
    appid: 4080220,
  },
  {
    id: 22,
    title: "Squad",
    description:
      "Large-scale military shooter built on teamwork, communication, and tactics.",
    genre: "Tactical Shooter",
    price: 39.99,
    store: "Steam",
    appid: 393380,
  },
  {
    id: 23,
    title: "Clash Royale",
    image:
      "https://supercell.com/images/8654bffbaa77efb91243d3706b739c25/og_clashroyale.d235f90b.jpg",
    description: "A real-time tower-rush strategy game with collectible cards.",
    genre: "Mobile",
    price: 0,
    store: "Mobile",
  },
  {
    id: 24,
    title: "Clash of Clans",
    image:
      "https://supercell.com/images/4c0ab0c1fb2958e72103f81632fee096/og_clashofclans.f3149338.jpg",
    description:
      "Build your village, train troops, and raid in this mobile strategy classic.",
    genre: "Mobile",
    price: 0,
    store: "Mobile",
  },
  {
    id: 25,
    title: "Genshin Impact",
    image:
      "https://store-images.s-microsoft.com/image/apps.17228.14057893183113088.c7459eb1-fd61-4f8d-9636-e286ca6b3f52.1d31eb39-7b47-484a-b67e-735d2c63156a?w=460",
    description: "An open-world action RPG set in the fantasy realm of Teyvat.",
    genre: "Action RPG",
    price: 0,
    store: "HoYoverse",
  },
  {
    id: 26,
    title: "Final Fantasy XIV",
    description:
      "A critically acclaimed MMORPG with a sprawling story and vibrant world.",
    genre: "MMORPG",
    price: 19.99,
    store: "Steam",
    appid: 39210,
  },
  {
    id: 27,
    title: "World of Warcraft",
    image:
      "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltb5a24e5ab1e2cfb0/6a88e3589b942efdb6f74110/wow-thumbnail-homepage.jpg",
    description:
      "The legendary MMORPG set in the ever-evolving world of Azeroth.",
    genre: "MMORPG",
    price: 19.99,
    store: "Battle.net",
  },
];
