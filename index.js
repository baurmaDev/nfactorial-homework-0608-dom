const play = document.getElementById("play-btn");
const cactus = document.getElementById("cactus");
const dino = document.getElementById("dino");
const replay = document.getElementById("wasted");

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    stopGame();
  }
}, 10);

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
        dino.classList.remove("jump");
        }, 400);
  }
}
document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  if('w' == toString(keyName)){
    jump();
  }
  
});
document.addEventListener("keydown", function (event){
    jump();
})

function playGame () {
    
    if(replay.className == "replay"){
        console.log("Replay == replay")
        replay.classList.remove("replay");
        replay.classList.add("disable");
    }
    
    play.classList.add("disable");
    cactus.classList.add("cactus");
}
function stopGame(){
    replay.classList.remove("disable");
    replay.classList.add("replay");
    cactus.classList.remove("cactus");
}