class Player {
	constructor() {
		this.width = 125
		this.height = 100
		this.x = 100
		this.y = 500 - this.height
		this.gravity = 0.2
		this.velocity = 0
		this.score = 0



    
	}

	draw() {
		this.velocity += this.gravity
		this.y += this.velocity


		// If y is lower than the top left corner of Player we need to set its value to the starting value
		if (this.y >= 600 - this.height) {
			this.y = 600 - this.height
		}

        // If x is highter than 1000 set the value to the starting point
        if (this.x >= 1000 - this.height) {
			this.x = 1000 - this.height
		}

       
        image(game.playerImage, this.x, this.y, this.width, this.height)

        // if (keyIsDown(65)) {
		// 	this.moveLeft()
		// }

        // if (keyIsDown(68)) {
        //     this.moveRight()
        // }
    } 

	jump() {
		this.velocity = - 10
	}
    slideForward (){
        this.x += 100
    }
    slideBackward (){
        this.x -= 100
    }

}
