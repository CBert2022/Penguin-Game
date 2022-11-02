const game = new Game()

// Load game assets
function preload() {
	game.preload()
}

function setup() {
	createCanvas(1000, 600)

	
}

function draw() {
	game.draw()
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
		game.player.duck && image(game.playerImageDuck, this.x, this.y, this.width, this.height)
	}
}




