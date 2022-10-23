

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

function Blackjack(state)
{
    let GameState = state
    let PlayerCards = []
    let ComCards = []
    let sumPlayerCard = 0;
    let sumComCard = 0;


    if(GameState)
    {
        // First two card selection
        PlayerCards.push(randomCardSelector())
        PlayerCards.push(randomCardSelector())
        ComCards.push(randomCardSelector())
        ComCards.push(randomCardSelector())

        PlayerCards.forEach(n => {
            sumPlayerCard += n
        })
        ComCards.forEach(n => {
            sumComCard += n
        })
        
        if(sumPlayerCard == 21 && sumComCard == 21)
        {
            document.getElementById('draw-cards').innerText = "Draw"
        }
        else if(sumPlayerCard == 21 || sumComCard > 21)
        {
            document.getElementById('draw-cards').innerText = `BlackJack You Win\nYour Cards: ${sumPlayerCard}\n Player Cards: ${sumComCard}`
        }
        else if(sumComCard == 21 || sumPlayerCard > 21)
        {
            document.getElementById('draw-cards').innerText = `BlackJack COM Win\nYour Cards: ${sumPlayerCard}\n Player Cards: ${sumComCard}`
        }
        else
        {
            document.getElementById('draw-cards').innerText = "Raise Bet or Show Card"
        }

        console.log(`Player Card Sum: ${sumPlayerCard} and Comp Card Sum: ${sumComCard}`);
        document.getElementById('my-cards').innerText = `Your Cards: ${PlayerCards.toString(PlayerCards)}`
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

//View Card
function viewPlayerCards()
{
    PlayerValueCards.forEach(n => {
        document.getElementById('draw-cards').innerText += n + "-"
    })
}

//Array Challenge Methods

/* let myArray = [5, 4, 2, 10, 15, 5];
console.log(myArray.length)
// Challenge 1
function sumOfArray()
{
    let sum = 0;
    myArray.forEach(n => {
        sum += n;
    });
    document.getElementById("sum-result").innerText = sum + " Challenge Completed!"
}

// Challenge 2

function findBiggest()
{
    let maxNum = 0;
    maxNum = Math.max(...myArray);
    document.getElementById('biggest-num').innerText =" Max num:" + maxNum + " Challenge Completed!"
}

// Challenge 3

function arrayFilter()
{
    let newArrayData =[];
    newArrayData = myArray.filter((n) =>{
        if(n%2 == 0)
        {
            return n;
        }
    })
    console.log(newArrayData);
    document.getElementById('new-array').innerText =" Even Array: [" + newArrayData + "] Challenge Completed!"
}
*/
