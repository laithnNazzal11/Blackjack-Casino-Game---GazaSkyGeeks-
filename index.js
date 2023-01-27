let massege =""
let sumEl= document.getElementById("sum-el")
let massageEl = document.getElementById("massege-el")
let isAlive = true
let hasBlackjack = false
let sum = 0
let cards= []
let cardsEl = document.getElementById("cards-el")
let platerEl = document.getElementById("player-el")

let player = {
    name:"per: ",
    chips: 145
}
platerEl.textContent = player.name + "$" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13)+1
    if (randomNumber > 10 ) {
       return 10
    } 

    else if (randomNumber === 1) {
        return 11
    } 
    else 

    return randomNumber

}

function renderGame() {

   cardsEl.textContent = "Cards: " 

   for (let i=0 ; i<cards.length ; i++) {
    cardsEl.textContent += cards[i] + " "
   }

    sumEl.textContent = "Sum: " + sum
 
    if (sum <= 20) {
        
        massege ="Do you want to draw a new card ?"
         
    } 

    else if (sum  === 21) {
        massege ="You've got Blackjack!"
        hasBlackjack = true
 
    }

    else {
        massege =" You'are out of the game!"
        isAlive = false

    }
   
    massageEl.textContent = massege

}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum = sum + newCard
        renderGame()
    }

}

function startGame() {
     isAlive = true
    let firstCard= getRandomCard()
    let SecondCard = getRandomCard()
    cards = [firstCard, SecondCard]
    sum = firstCard + SecondCard
    renderGame()

    

}

let a1 = 102 
let a2 = 107

function total() {
    let a3 = a1+a2
    return a3
}

let laith = total()
console.log(laith)