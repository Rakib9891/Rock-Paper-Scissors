let menu = document.querySelector(".menu");
let aside = document.querySelector("aside");

let choices = document.querySelectorAll(".choise");
let message = document.querySelector("#msg");
let userMsg = document.querySelector("#u");
let comMsg = document.querySelector("#c");
let btn = document.querySelector("#btn");
let cChoise = document.querySelector("#cChoise");
let game = document.querySelector(".game");

let mode = document.querySelector("#theme");
let body = document.querySelector("body");
let theme = () => {
  body.classList.toggle("dark");
}
mode.addEventListener("click",theme);

let uWin = 0;
let cWin = 0;

let a = true;
let opnMenu = () => {
  
  if (a) {
    aside.classList.add("opn")
    menu.classList.add("newMenu")
   a = false;
  }
  else {
   menu.classList.remove("newMenu")
   aside.classList.remove("opn")
   menu.classList.add("menu")
   a = true;
  }
}  

menu.addEventListener("click",opnMenu)
game.addEventListener("click", (event) => {
  if (event.target.className === "game") {
    console.log("clicked")
    menu.classList.remove("newMenu")
   aside.classList.remove("opn")
   menu.classList.add("menu")
  }
})


// to get choise from Computer 

let getComChoise = () => {
  let option = ["rock", "paper", "scissors"];
  let ranIdx = Math.floor(Math.random() * 3);
  return option[ranIdx];
}


let draw = (userChoise,comChoise) => {
  if (userChoise == comChoise) {
    message.innerText = "Game is draw"
  }
  else {
    let userWin = true;   
    if (userChoise == "rock") {
    userWin = comChoise == "paper"? false : true;
    }
    else if (userChoise == "paper") {
    userWin = comChoise == "scissors"? false : true;
    }
    else {
      userWin = comChoise == "rock" ? false : true;
    }
    let win = (userWin) => {
  if (userWin == true) {
    uWin++
    msg.innerHTML = "You won"
    userMsg.innerText = uWin;
  }
  else if (userWin !== true){
    cWin++
    msg.innerText = "You lost"
    comMsg.innerText = cWin;
  }
}
win(userWin)
  }    
}



let playGame = (userChoise) => {
  let comChoise = getComChoise();
  draw(userChoise,comChoise);
  cChoise.innerText =`You picked ${userChoise}\n\nComputer picked ${comChoise}`
  const reset = () => {
  cChoise.innerText = "";
  comMsg.innerText = cWin = 0;
  userMsg.innerText = uWin = 0;
  msg.innerText = "Pick a card";
  btn.classList.add("reset");
}
btn.addEventListener("click",reset);
}


// to pick choise rock, paper or scissors 

choices.forEach((choise) => {
  choise.addEventListener("click", () => {
    let userChoise = choise.getAttribute("id");
    playGame(userChoise);
    btn.classList.remove("reset");
  })
})
