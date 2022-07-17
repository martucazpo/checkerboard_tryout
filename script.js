import CheckersGame from "./CheckersGame.js";

const body = document.querySelector("body");
const checkersWrapper = document.createElement("div");
checkersWrapper.classList = "checkers-wrapper";
console.log(checkersWrapper);
body.append(checkersWrapper);


document.addEventListener("DOMContentLoaded", ()=>{
    new CheckersGame(checkersWrapper);
})

