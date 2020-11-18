"use strict";
exports.__esModule = true;
// define dictionary for conversion number to RSP and RSP to number
var hands = { 0: 'グー', 1: 'チョキ', 2: 'パー' };
var handToNumber = { 'グー': 0, 'チョキ': 1, 'パー': 2 };
var gameScores = [];
// make random number
function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// define strategy
var doraStrategy = function () {
    return hands[0];
};
var sizuStrategy = function () {
    return hands[randomInt(3)];
};
var suneStrategy = function () {
    return hands[randomInt(2) + 1];
};
var nobiStrategy = function () {
    if (player1 === 'のび太' && result === 'Win') {
        return hand1;
    }
    else if (player2 === 'のび太' && result === 'Lose') {
        return hand2;
    }
    else {
        return hands[randomInt(3)];
    }
};
// define class and push to dictionary
var Players = /** @class */ (function () {
    function Players(name, choices) {
        this.name = name;
        this.choices = choices;
    }
    return Players;
}());
;
var doraemon = new Players('ドラえもん', doraStrategy);
var sizuka = new Players('しずか', sizuStrategy);
var suneo = new Players('スネ夫', suneStrategy);
var nobita = new Players('のび太', nobiStrategy);
var playerLists = { 'ドラえもん': doraemon, 'しずか': sizuka, 'スネ夫': suneo, 'のび太': nobita };
// Judge whether player1 is winner.
var result;
function judge(first, second) {
    var score = first - second;
    if (score === -1 || score === 2) {
        result = 'Win';
    }
    else if (score === 1 || score === -2) {
        result = 'Lose';
    }
    else {
        result = 'Draw';
    }
    return result;
}
// get Win Rate
function winOdds() {
    var winScores = gameScores.filter(function (item) { return item === 'Win'; });
    var getPercent = 100;
    var getRound = 10;
    var getWinOdds = winScores.length / trials * getPercent;
    var winOdds = Math.round(getWinOdds * getRound) / getRound;
    return winOdds;
}
//get game result
var player1;
var player2;
var hand1;
var hand2;
var trials;
function getResult() {
    console.log('---------------------------------以下結果---------------------------------\n');
    for (var i = 0; i < trials; i++) {
        hand1 = playerLists[player1].choices();
        hand2 = playerLists[player2].choices();
        result = judge(handToNumber[hand1], handToNumber[hand2]);
        console.log('(' + (i + 1) + ')【'
            + playerLists[player1].name + ':' + hand1 + '、' + playerLists[player2].name + ':' + hand2
            + '】  << Player1：' + playerLists[player1].name + '=> ' + result + '!!! >>');
        gameScores.push(result);
    }
    ;
}
//get objects by input from commandLine
var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    player1 = lines[0];
    player2 = lines[1];
    trials = parseInt(lines[2]);
    getResult();
    console.log('\n << Player1:' + player1 + ' Player2:' + player2 + ' 試行回数:' + trials + '回 ' + player1 + 'の勝率' + winOdds() + '% >>');
});
