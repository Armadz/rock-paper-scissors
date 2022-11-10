function compChoice() {
    return Math.floor(Math.random() * 3)
}

function compChoiceName(num) {
    if (num == 0) {
        return 'Rock'
    }
    if (num == 1){
        return 'Paper'
    }
    if (num == 2) {
        return 'Scissors'
    }
}

function playerChoiceVal(str){
    if (str == 'Rock'){
        return 0
    }
    if (str == 'Paper'){
        return 1
    }
    if (str == 'Scissors'){
        return 2
    }
}

function getPlayerChoice() {
    return prompt('Choice Rock, Paper, or Scissors! or q to quit')
}

function checkChoice(str) {
    let firstLet = str.slice(0,1)
    let otherLet = str.slice(1)

    str = firstLet.toUpperCase() + otherLet.toLowerCase()
    str.trim()

    if(str=='Q'){
        console.log('Quiter D:');
        return 0
    }
    if (str == 'Rock' || str=='Paper' ||str=='Scissors') {
        return str
    }
    alert(str +' is an invaild choice, try again!')
    return checkChoice(getPlayerChoice())
}

function msgOut(outcome, plystr, compstr) {
    alert(outcome + '\nYou chose: '+ plystr+'\nThe Computer chose: ' + compstr)
}

function shoot() {
    let wins = 0
    let ties = 0
    let loses = 0
    let NotGameOver = true
    while(NotGameOver){
        let playerStr = checkChoice(getPlayerChoice())
        let compVal = compChoice()
        let compStr = compChoiceName(compVal)
        let playerVal = playerChoiceVal(playerStr)
    
        if (playerStr == 0) {
            NotGameOver = false
        }
        if (compVal == playerVal){
            msgOut('You tied with the computer!', playerStr,compStr)
            ties++
        }
        if ((playerVal == 0 && compVal ==2)|| ((playerVal > compVal &&!(compVal == 0 && playerVal ==2)))) {
            msgOut('You beat the computer', playerStr,compStr)
            wins++
        }
        if((compVal == 0 && playerVal ==2)|| (compVal > playerVal &&!((playerVal == 0 && compVal ==2)))){
            msgOut('You lost to the computer', playerStr,compStr)
            loses++
        }
        alert(wins + ' wins\n'+ loses +'loses\n' + ties +'ties')
    }
}

shoot()