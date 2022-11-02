class Ice {
    constructor (image){
    this.image = image
    this.width = 300
    this.height = 200
    this.x = width
    this.y = (Math.random() * height)
    }

    draw(){
        this.x--
       image(this.image, this.x, this.y, this.width, this.height, this.speed)

       if (this.y >= 600 - this.height) {
        this.y = 600 - this.height  
    }
        if (this.y <= 0 - this.height) {
            this.y = 0 - this.height
        }
     }// close draw fct

     collision2(playerInfo) {


		// Get the middle of the obstacle
		let icecubeX = this.x + this.width / 2
		let icecubeY = this.y + this.height / 2

        // Get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2

        // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(icecubeX, icecubeY, playerX, playerY) > 25) {
			return false
		} else {
			// decrement the score
			game.player.score - 5;
            document.querySelector("div span").innerText = game.player.score
            console.log(game.player.score)
			return true
		} 
    
	}

} // close class Ice 