class Player {
	constructor() {
		this.width = 125
		this.height = 100
		this.x = 0
		this.y = 600 - this.height
		this.gravity = 0.3
		this.velocity = 0
		this.score = 0
        this.jumpCounter = 0
       

	}

	draw() {
		this.velocity += this.gravity // falling
		this.y += this.velocity

        if (this.jumpCounter === 3) { // funkioniert nut beim ersten mal
			this.velocity += this.gravity 
        }

		// If y is lower than the top left corner of Player we need to set its value to the starting value
		if (this.y >= 550 - this.height) {
			this.y = 550 - this.height
		}

        // If x is highter than 1000 set the value to the starting point
        if (this.x >= 1000 - this.width) {
			this.x = 1000 - this.width
		}
        if (this.x <= 0 + this.width) {
            this.x = 0 + this.width 
        }
        if (this.y <= 0 ){
            this.y = 0 
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
        this.jumpCounter++
	}
    slideForward (){
        this.x += 100
    }
    slideBackward (){
        this.x -= 100
    }
    duck(){
        this.y -= 100
    }

}
