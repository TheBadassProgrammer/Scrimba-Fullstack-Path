let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            let cardsArr = document.getElementById("cards").children
            cardsArr[0].style = `background: url(${data.cards[0].image}); background-size: cover`
            cardsArr[1].style = `background: url(${data.cards[1].image}); background-size: cover`
        })
})
/**
 * Challenge:
 * 
 * Place each of the cards we draw into its respective card-slot
 * Hint: consider using element.children in the DOM instead of
 * giving each card-slot its own unique ID
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/children
 */