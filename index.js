let homeEl = document.getElementById("home")
let AwayEl = document.getElementById("Away")


let homePoints = 0;
let AwayPoints = 0;

function increaseHomeScoreOne(){
    homePoints += 1
    homeEl.textContent = homePoints
}

function increaseHomeScoreTwo(){
    homePoints += 2
    homeEl.textContent = homePoints
}

function increaseHomeScoreThree(){
    homePoints += 3
    homeEl.textContent = homePoints
}

function increaseAwayScoreOne(){
    AwayPoints += 1
    AwayEl.textContent = AwayPoints
}

function increaseAwayScoreTwo(){
    AwayPoints += 2
    AwayEl.textContent = AwayPoints
}

function increaseAwayScoreThree(){
    AwayPoints += 3
    AwayEl.textContent = AwayPoints
}

function reset(){
    homePoints = 0;
    AwayPoints = 0;
    AwayEl.textContent = 0
    homeEl.textContent = 0
}