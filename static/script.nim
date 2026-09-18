import dom
import asyncdispatch
import json
import strutils
import sequtils
import tables

# Wait for DOM to be loaded
when isMainModule:
  waitForDomContentLoaded:
    # Theme toggle functionality
    let themeButton = document.querySelector("#theme-toggle")
    themeButton.addEventListener("click", proc(e: Event) =
      document.body.classList.toggle("light")
    )

    # Counter functionality
    var count = 0
    let countBtn = document.querySelector("#count-btn")
    let display = document.querySelector("#count-display")
    countBtn.addEventListener("click", proc(e: Event) =
      count += 1
      display.textContent = $count
    )

    # Game loader functionality
    let loadBtn = document.querySelector("#game-loader")
    let dropdown = document.querySelector("#genre-dropdown")
    let searchBox = document.querySelector("#search")
    let list = document.querySelector("#list")
    let dogImg = document.querySelector("#random-dog")

    # Function to render genre options in dropdown
    proc renderGenreOptions(gamesList: seq[JsonNode]) =
      var uniqueGenres: seq[string] = @[]
      for game in gamesList:
        let genre = game["genre"].getStr()
        if genre notin uniqueGenres:
          uniqueGenres.add(genre)
      uniqueGenres.sort()
      for genre in uniqueGenres:
        let option = document.createElement("option")
        option.value = genre
        option.textContent = genre
        dropdown.appendChild(option)

    # Function to apply filters and render games
    proc applyFilters(games: seq[JsonNode]) =
      var filteredGames = games
      let query = searchBox.value.toLower()

      if dropdown.value != "all":
        filteredGames = filteredGames.filter(
          proc(game: JsonNode): bool =
            game["genre"].getStr() == dropdown.value
        )

      if query != "":
        filteredGames = filteredGames.filter(
          proc(game: JsonNode): bool =
            game["title"].getStr().toLower().contains(query)
        )

      renderGames(filteredGames)

    # Function to render games to the DOM
    proc renderGames(gamesToShow: seq[JsonNode]) =
      list.innerHTML = ""
      for game in gamesToShow:
        let gameCard = document.createElement("div")
        gameCard.classList.add("game_card")

        let imageUrl = game["image"].getStr()
        let title = game["title"].getStr()
        let description = game["description"].getStr()
        let genre = game["genre"].getStr()
        let price = game["price"].getInt()

        let priceText = if price == 0: "Free" else: `$${price}.00`.format(price)

        gameCard.innerHTML = """
        <img src="""" & imageUrl & """>
        <div class="card_content">
          <h2>""" & title & """</h2>
          <p>""" & description & """</p>
          <div>
            <span>""" & genre & """</span>
            <span>""" & priceText & """</span>
          </div>
        </div>
        """
        list.appendChild(gameCard)

    # Event listeners
    loadBtn.addEventListener("click", proc(e: Event) =
      # Assuming 'games' is available globally from the HTML template
      applyFilters(games)
    )

    searchBox.addEventListener("input", proc(e: Event) =
      applyFilters(games)
    )

    dropdown.addEventListener("change", proc(e: Event) =
      applyFilters(games)
    )

    # Async function to fetch and display random dog image
    proc renderRandomDog() =
      dispatch async:
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await response.json()
        dogImg.src = data["message"].getStr()

    # Initial execution
    renderGenreOptions(games)
    applyFilters(games)
    renderRandomDog()