class Obstacle {
    constructor(image) {
        this.image = image
		this.width = 40
		this.height = 60
        this.x = width
		this.y = (Math.random() * height/2)
        this.randomVelocity = (Math.random()*4) + 1
        this.catchsound2 = new Audio("assets/Sounds/CatchSound.mp3")
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
    }
    collision(playerInfo) {

		// Get the middle of the obstacle
		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2

		// Get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
        // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(obstacleX, obstacleY, playerX, playerY) > 90) {
			return false
		} else {
            //play sound
            this.catchsound2.play()
			// Increment the score
			game.player.score++
             // target and change the div that hold the score an update it
            document.querySelector("div span").innerText = game.player.score
            // document.getElementById("catchsound").play
			return true
		} 
	} // close collision fct
} // close class obstacles
