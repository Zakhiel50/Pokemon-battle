const bulbasaur = document.querySelector(".bulbasaur");
const charmander = document.querySelector(".charmander");
const squirtle = document.querySelector(".squirtle");
const container = document.querySelector("#window")

const sectionPlayer = document.createElement("section")
container.appendChild(sectionPlayer)
sectionPlayer.classList = "section-player"


const botBulbasaur = bulbasaur.cloneNode("ul")
const botCharmander = charmander.cloneNode("ul")
const botSquirtle = squirtle.cloneNode("ul")



bulbasaur.addEventListener("click", function() {

    const deckPlayer = document.createElement("div")
sectionPlayer.appendChild(deckPlayer)
deckPlayer.classList = "deck-player"

const reserve = document.createElement("div")
sectionPlayer.appendChild(reserve)
reserve.classList = "reserve"

console.log(sectionPlayer);
let test = bulbasaur.cloneNode(true)

    container.style.flexDirection = "column"

    const containerCards = document.querySelector("#container-cards")
    containerCards.remove()
    const header = document.querySelector("header")
    header.remove()

    reserve.appendChild(charmander);
    reserve.appendChild(squirtle);

    deckPlayer.appendChild(bulbasaur)
    deckPlayer.classList.add("first");

    bulbasaur.classList.add("pokemon-first")

    const sectionBot = document.querySelector(".section-bot")
    sectionBot.classList.remove("section-bot-hidden")

    
    sectionBot.appendChild(botSquirtle)
    
    // const reserveBot = document.createElement("div")
    // reserveBot.classList.add("reserve-bot")
    // sectionBot.appendChild(reserveBot)
    // reserveBot.appendChild(botCharmander)
    // reserveBot.appendChild(botSquirtle)
})
