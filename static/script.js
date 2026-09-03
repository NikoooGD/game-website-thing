document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

  let count = 0;

  const countBtn = document.querySelector("#count-btn");
  const display = document.querySelector("#count-display");

  countBtn.addEventListener("click", () => {
    count = count + 1;
    display.textContent = count;
  });

  const loadBtn = document.querySelector("#game-loader");

  const games = [
    { name: "League of Legends", genre: "MOBA" },
    { name: "Dota 2", genre: "MOBA" },
    { name: "Valorant", genre: "Tactical Shooter" },
    { name: "Counter-Strike 2", genre: "Tactical Shooter" },
    { name: "Overwatch 2", genre: "Hero Shooter" },
    { name: "Apex Legends", genre: "Battle Royale" },
    { name: "Fortnite", genre: "Battle Royale" },
    { name: "Minecraft", genre: "Sandbox" },
    { name: "Terraria", genre: "Sandbox" },
    { name: "The Witcher 3", genre: "RPG" },
    { name: "Elden Ring", genre: "Soulslike" },
    { name: "Dark Souls 3", genre: "Soulslike" },
    { name: "Hollow Knight", genre: "Metroidvania" },
    { name: "Celeste", genre: "Platformer" },
    { name: "Hades", genre: "Roguelike" },
    { name: "Balatro", genre: "Indie nice :)" },
    { name: "Stardew Valley", genre: "Farming Sim" },
    { name: "Among Us", genre: "Social Deduction" },
    { name: "Fall Guys", genre: "Party" },
    { name: "Rocket League", genre: "Sports" },
    { name: "FIFA 24", genre: "Sports" },
    { name: "Squad", genre: "Tactical Shooter" },
    { name: "Clash Royale", genre: "Mobile" },
    { name: "Clash of Clans", genre: "Mobile" },
    { name: "Genshin Impact", genre: "Action RPG" },
    { name: "Final Fantasy XIV", genre: "MMORPG" },
    { name: "World of Warcraft", genre: "MMORPG" },
  ];

  const dropdown = document.querySelector("#genre-dropdown");

  function renderGenreOptions(gamesList) {
    const uniqueGenres = new Array();

    gamesList.forEach((game) => {
      if (!uniqueGenres.includes(game.genre)) {
        uniqueGenres.push(game.genre);
      }
    });

    uniqueGenres.sort();

    uniqueGenres.forEach((genre) => {
      const option = document.createElement("option");
      option.value = genre;
      option.textContent = genre;
      dropdown.appendChild(option);
    });
  }

  renderGenreOptions(games);

  const list = document.querySelector("#list");

  loadBtn.addEventListener("click", function () {
    applyFilters();
  });

  const searchBox = document.querySelector("#search");

  function applyFilters() {
    let filteredGames = games;
    const query = searchBox.value.toLowerCase();

    if (dropdown.value !== "all") {
      filteredGames = filteredGames.filter(
        (game) => game.genre === dropdown.value,
      );
    }

    if (query) {
      filteredGames = filteredGames.filter((game) =>
        game.name.toLowerCase().includes(query),
      );
    }

    renderGames(filteredGames);
  }

  searchBox.addEventListener("input", applyFilters);
  dropdown.addEventListener("change", applyFilters);

  function renderGames(gamesToShow) {
    list.innerHTML = "";
    gamesToShow.forEach((game) => {
      const li = document.createElement("li");
      li.textContent = `${game.name} - ${game.genre}`;
      list.appendChild(li);
    });
  }
  applyFilters();
});
