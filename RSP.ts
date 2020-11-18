import * as readline from "readline"

// define dictionary for conversion number to RSP and RSP to number
const hands: {[number: number] : string } = { 0 : 'グー' , 1 : 'チョキ', 2 : 'パー' };
const handToNumber: {[hand: string] : number } = {'グー' : 0 , 'チョキ' : 1, 'パー' : 2 };
const gameScores: string[] = [];

// make random number
function randomInt(max: number){
    return Math.floor(Math.random() * Math.floor(max));
}

// define strategy
let doraStrategy =function(){
    return hands[0]
}

let sizuStrategy = function(){
     return hands[randomInt(3)]
}

let suneStrategy = function(){
     return hands[randomInt(2) + 1]
}

let nobiStrategy = function(){
    if( player1 === 'のび太' && result === 'Win'){
        return hand1;
    }else if( player2 === 'のび太' && result === 'Lose'){
        return hand2;
    }else{
        return hands[randomInt(3)];
    }
}

// define class and push to dictionary
class Players{
    name: string ;
    choices: any ;

    constructor(name: string, choices: any){
        this.name = name;
        this.choices = choices;
    }
};

let doraemon = new Players('ドラえもん', doraStrategy);
let sizuka = new Players('しずか', sizuStrategy);
let suneo = new Players('スネ夫', suneStrategy);
let nobita = new Players('のび太', nobiStrategy);

const playerLists: { [player: string] : any} =  {'ドラえもん' : doraemon, 'しずか' : sizuka, 'スネ夫' : suneo, 'のび太' : nobita }


// Judge whether player1 is winner.
let result: string ;
function judge(first: number, second: number ){
    let score: number = first - second;

    if(score === -1 || score === 2 ){
        result = 'Win';
    }else if(score === 1 || score === -2 ){
        result = 'Lose';
    }else{
        result = 'Draw';
    }

    return result;
}

// get Win Rate
function winOdds(){
    const winScores: string[] = gameScores.filter(item => item === 'Win');
    const getPercent: number = 100;
    const getRound: number = 10
    const getWinOdds: number = winScores.length / trials * getPercent;
    const winOdds: number =  Math.round( getWinOdds * getRound ) / getRound;
    return winOdds
}

//get game result
let player1: string ;
let player2: string ;
let hand1: string ;
let hand2: string ;
let trials: number;

function getResult(){
    console.log('---------------------------------以下結果---------------------------------\n')
    for(let i: number = 0; i < trials;  i++){
        hand1 = playerLists[player1].choices();
        hand2 = playerLists[player2].choices();
        result = judge(handToNumber[hand1], handToNumber[hand2]);
        console.log( '(' + (i + 1) +')【'
            + playerLists[player1].name + ':' + hand1 +'、' + playerLists[player2].name + ':' + hand2
            + '】  << Player1：' +playerLists[player1].name + '=> ' + result + '!!! >>');
        gameScores.push(result);
    };
}

//get objects by input from commandLine
var lines: string[] = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function(line: string){
    lines.push(line);
});
reader.on('close', function() {
    player1 = lines[0];
    player2 = lines[1];
    trials = parseInt(lines[2]);
    getResult();
    console.log('\n << Player1:' + player1  +' Player2:' + player2 + ' 試行回数:' + trials + '回 ' + player1 + 'の勝率' + winOdds() + '% >>');
});