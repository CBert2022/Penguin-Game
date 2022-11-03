const game = new Game()

// Load game assets
function preload() {
	game.preload()
	jumpSound = loadSound("assets/Sounds/JumpSound2.mp3")

	
}

function setup() {
	createCanvas(1000, 600)
}

function draw() {
	game.draw()
	backgroundmusic.play()
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump()
		
	}	
	if (keyCode === 39) {
		game.player.slideForward()
		
	}
	if (keyCode === 37) {
		game.player.slideBackward()
		
	}
	if(keyCode === 40){
		game.player.duck()
	
	}
	

} 

function startTimer() {
	let presentTime = document.getElementById('timer').innerHTML;
	let timeArray = presentTime.split(/[:]+/);
	let min = timeArray[0];
	let sec = Second((timeArray[1] - 1));
  
	if(sec==59){
	  min=min-1
	}
  
	if(min<0){
	  return
	}
  
	if (min === "0" && sec === "00"){
		location.href = 'lose.html';
  
	}
  
	document.getElementById('timer').innerHTML =
	min + ":" + sec;
	let time = setTimeout(startTimer, 1000);  
  }
  
  function Second(sec) {
	if (sec < 10 && sec >= 0) {
	  sec = "0" + sec
	}; 
	if (sec < 0) {
	  sec = "59"
	};
	return sec;
  }
  
  document.getElementById("timer").innerHTML = 02+":"+00
  startTimer()







