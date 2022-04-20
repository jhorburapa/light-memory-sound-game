//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;
//Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function shufflePattern(){
  for(let i = 0; i < 8; i++ ){
    pattern[i] = Math.floor(Math.random() * 9) + 1; 
  } 
}

function startGame(){
  clueHoldTime = 1000;
  shufflePattern();
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function endGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");

}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
  unhide(btn);
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
  hide(btn);
}

function unhide(btn){
  document.getElementById("img"+btn).classList.remove("hidden");
}

function hide(btn){
  document.getElementById("img"+btn).classList.add("hidden");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function loseGame(){
  endGame();
  alert("Game Over. You lost.");
}

function winGame(){
  endGame();
  alert("Nice Job! YOU WON!");
}

function playClueSequence(){
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 50;
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(guessCounter == 7){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    mistakes++;
    if(mistakes == 3){
      loseGame();
    }
    else{
      playClueSequence();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520,
  6: 590,
  7: 650,
  8: 700,
  9: 775
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)