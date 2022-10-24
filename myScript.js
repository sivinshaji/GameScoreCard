

//Game Score functions

function addOne(team)
{
    let score = 0
    score = parseInt(document.getElementById(team).value)
    score += 1
    console.log(score);
    document.getElementById(team).value = `${score}`.padStart(2, '0');
}
function addTwo(team)
{
    let score = 0
    score = parseInt(document.getElementById(team).value)
    score += 2
    console.log(score);
    document.getElementById(team).value = `${score}`.padStart(2, '0');
}
function addThree(team)
{
    let score = 0
    score = parseInt(document.getElementById(team).value)
    score += 3
    console.log(score);
    document.getElementById(team).value = `${score}`.padStart(2, '0');
}

function resetScore()
{
    document.getElementById('score1').value = `${0}`.padStart(2, '0');
    document.getElementById('score2').value = `${0}`.padStart(2, '0');
}

//Blackjack Game functions
let GameState = false
let PlayerCards = []
let ComCards = []
let sumPlayerCard = 0;
let sumComCard = 0;
let btn 
let playerbetpoints = 0
let totalPlayerPoint = 50
let totalComPoint = 50
let combetpoints = 0

function Blackjack(state)
{
    GameState = state
    playerbetpoints = 10
    combetpoints = 10
    document.getElementById('bet-value').innerText = playerbetpoints
    document.getElementById('current-value').innerText = totalPlayerPoint
    if(GameState)
    {
        GameState = false
        PlayerCards = []
        ComCards = []
        sumPlayerCard = 0;
        sumComCard = 0;
        // First two card selection
        PlayerCards.push(randomCardSelector())
        PlayerCards.push(randomCardSelector())
        ComCards.push(randomCardSelector())
        ComCards.push(randomCardSelector())
        //sum of first two cards
        PlayerCards.forEach(n => {
            sumPlayerCard += n
        })
        ComCards.forEach(n => {
            sumComCard += n
        })
        //check initial blackjack
        checkBlackjack()
    }
    else
    {
        GameState = false
    }
    
}

// Card Selection
function randomCardSelector()
{
    let num = Math.floor((Math.random() * 12)+1)
    return num
}



//Draw card
function drawCard()
{
    PlayerCards.push(randomCardSelector())
    ComCards.push(randomCardSelector())
        //sum cards with new cards
        sumPlayerCard = 0
        sumComCard = 0
        PlayerCards.forEach(n => {
            sumPlayerCard += n
        })
        ComCards.forEach(n => {
            sumComCard += n
        })
        updateMessage()
        console.log(`My Card Value: ${sumPlayerCard} Com Card Value: ${sumComCard}`)
}

//Rais bet value
function raiseBet()
{
    playerbetpoints += 10
    combetpoints += 10
    document.getElementById('bet-value').innerText = `${playerbetpoints}`
}

//Update Messages
function updateMessage()
{
    document.getElementById('my-cards').innerText = `Your Cards: ${PlayerCards.toString(PlayerCards)}`
    document.getElementById('my-card-value').innerText = `Hand Value: ${sumPlayerCard}`
}

//Check Blackjack
function checkBlackjack()
{
    
    if(sumPlayerCard === 21 && sumComCard === 21)
    {
        document.getElementById('draw-cards').innerText = "Draw"
        updateMessage()
        btn = document.getElementsByClassName('btn-place-bet')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-pass-chance')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-drop-game')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-startgame')[0]
        btn.classList.remove("hidden")
    }
    else if(sumPlayerCard === 21 || sumComCard === 21)
    {
        if (sumPlayerCard === 21)
        {
            totalPlayerPoint = totalPlayerPoint + playerbetpoints + combetpoints
            totalComPoint = totalComPoint - combetpoints;
            document.getElementById('bet-value').innerText = playerbetpoints
            document.getElementById('current-value').innerText = totalPlayerPoint
        }
        else
        {
            totalComPoint = totalComPoint + playerbetpoints + combetpoints
            totalPlayerPoint = totalPlayerPoint - playerbetpoints;
            document.getElementById('bet-value').innerText = playerbetpoints
            document.getElementById('current-value').innerText = totalPlayerPoint
        }
        document.getElementById('draw-cards').innerText = "B L A C K j A C K"
        updateMessage()
        btn = document.getElementsByClassName('btn-place-bet')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-pass-chance')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-drop-game')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-startgame')[0]
        btn.classList.remove("hidden")
    }
    else if(sumComCard > 21)
    {
        document.getElementById('draw-cards').innerText = `B L A C K j A C K\nPlayer Wins`
        updateMessage()
        btn = document.getElementsByClassName('btn-place-bet')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-pass-chance')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-drop-game')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-startgame')[0]
        btn.classList.remove("hidden")
        totalPlayerPoint = totalPlayerPoint + playerbetpoints + combetpoints
        totalComPoint = totalComPoint - combetpoints;
        document.getElementById('bet-value').innerText = playerbetpoints
        document.getElementById('current-value').innerText = totalPlayerPoint

    }
    else if(sumPlayerCard > 21)
    {
        document.getElementById('draw-cards').innerText = `B L A C K j A C K\nCOM Wins`
        updateMessage()
        btn = document.getElementsByClassName('btn-place-bet')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-pass-chance')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-drop-game')[0]
        btn.classList.add("hidden")
        btn = document.getElementsByClassName('btn-startgame')[0]
        btn.classList.remove("hidden")
        totalComPoint = totalComPoint + playerbetpoints + combetpoints
        totalPlayerPoint = totalPlayerPoint - playerbetpoints;
        document.getElementById('bet-value').innerText = playerbetpoints
        document.getElementById('current-value').innerText = totalPlayerPoint
    }
    else
    {
        document.getElementById('draw-cards').innerText = "Raise the Bet or Show Card"
        updateMessage()
        btn = document.getElementsByClassName('btn-place-bet')[0]
        btn.classList.remove("hidden")
        btn = document.getElementsByClassName('btn-pass-chance')[0]
        btn.classList.remove("hidden")
        btn = document.getElementsByClassName('btn-drop-game')[0]
        btn.classList.remove("hidden")
        btn = document.getElementsByClassName('btn-startgame')[0]
        btn.classList.add("hidden")
    }
    console.log(`My Card Value: ${sumPlayerCard} Com Card Value: ${sumComCard}`)
}