let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")


let homePoints = 0;
let guestPoints = 0;

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

function increaseGuestScoreOne(){
    guestPoints += 1
    guestEl.textContent = guestPoints
}

function increaseGuestScoreTwo(){
    guestPoints += 2
    guestEl.textContent = guestPoints
}

function increaseGuestScoreThree(){
    guestPoints += 3
    guestEl.textContent = guestPoints
}

function reset(){
    guestEl.textContent = 0
    homeEl.textContent = 0
}