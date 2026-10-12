document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.querySelector("#theme-toggle");

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

  let count = 0;

  const countBtn = document.querySelector("#count-btn");
  const display = document.querySelector("#count-display");

  countBtn.addEventListener("click", () => {
    count++;
    display.textContent = count;
  });

  const loadBtn = document.querySelector("#game-loader");

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

  // Load favorites from localStorage
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

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
        game.title.toLowerCase().includes(query),
      );
    }

    renderGames(filteredGames);
  }

  searchBox.addEventListener("input", applyFilters);
  dropdown.addEventListener("change", applyFilters);

  function renderGames(gamesToShow) {
    list.innerHTML = "";
    gamesToShow.forEach((game) => {
      const game_card = document.createElement("div");
      game_card.classList.add("game_card");

      const isFavorite = favorites.includes(game.id);

      game_card.innerHTML = `
      <img src="${game.image}">
      <div class="card_content">
        <h2>${game.title}</h2>
        <p>${game.description}</p>
        <div>
          <span>${game.genre}</span>
          <span>${game.price == 0 ? "Free" : `$${game.price.toFixed(2)}`}</span>
        </div>
        <button type="button" class="favorite-btn ${isFavorite ? "is-favorite" : ""}" data-id="${game.id}">
          ${isFavorite ? "★" : "☆"}
        </button>
      </div>`;
      list.appendChild(game_card);
    });
  }

  applyFilters();

  const dogImg = document.querySelector("#random-dog");

  async function renderRandomDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await response.json();

    dogImg.src = data.message;
  }

  renderRandomDog();

  // FAVORITES SECTION
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      favorites = favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      favorites.push(id);
    }
    saveFavorites();
    applyFilters();
  }

  list.addEventListener("click", (event) => {
    const star = event.target.closest(".favorite-btn");
    if (!star) return;
    toggleFavorite(Number(star.dataset.id));
  });
});
