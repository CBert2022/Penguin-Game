class Ice {
    constructor (image){
    this.image = image
    this.width = 300
    this.height = 200
    this.x = width
    this.y = (Math.random() * height)
    this.randomVelocity = Math.max(Math.random()*4)
    this.touchSound = new Audio ("assets/Sounds/touchIce.mp3")
    }

    draw(){
        this.x = this.x-= this.randomVelocity
       image(this.image, this.x, this.y, this.width, this.height)

       if (this.y >= 600 - this.height) {
        this.y = 600 - this.height  
    }
        if (this.y <= 0 - this.height) {
            this.y = 0 - this.height
        }
     }// close draw fct

     collision2(playerInfo2) {

		// Get the middle of the obstacle
		let icecubeX = this.x + this.width / 2
		let icecubeY = this.y + this.height / 2

        // Get the middle of the player
		let player2X = playerInfo2.x + playerInfo2.width / 2
		let player2Y = playerInfo2.y + playerInfo2.height / 2

        // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(icecubeX, icecubeY, player2X, player2Y) > 100) {
			return false
		} else {
             // play sound
            this.touchSound.play()
            // decrement the score
			game.player.score -= 3;
            // target and change the div that hold the score an update it
            document.querySelector("div span").innerText = game.player.score
            game.playerImage = game.playerImageFreeze
			return true
		} 
	} // close collision2 fct
} // close class Ice 