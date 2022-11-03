const game = new Game()
let jumpSound

// Load game assets
function preload() {
	game.preload()
	jumpSound = loadSound("assets/Sounds/jumpSound.mp3")
	
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







