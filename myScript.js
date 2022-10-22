

//Score card functions

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
