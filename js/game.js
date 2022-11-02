class Game {
    constructor (){
        this.background = new Background ()
        this.player = new Player()
        this.backgroundImages
        this.playerImage
        this.fishImage
        this.obstacles = []
        this.iceImage
        this.icecubes = []
        this.jumpSound
        this.playerImageDuck
    
       
    }
    preload () {
        this.backgroundImages = [
            { src: loadImage("./assets/background1.png"), x: 0, speed: 0 },
            { src: loadImage("./assets/background2.png"), x: 0, speed: 1 },
            { src: loadImage("./assets/background3.png"), x: 0, speed: 2 },
            { src: loadImage("./assets/cloudw1000.png"), x: 0, speed: 3 },
            // { src: loadImage("./assets/ice2.png"), x: 0, speed: 0 },
        ]
        
        this.playerImage = loadImage("./assets/Penguin.gif")
        this.playerImageDuck = loadImage("./assets/ps.png")
        this.fishImage = loadImage("./assets/Fish.gif")
        this.iceImage = loadImage("./assets/icecube.png")
        this.jumpSound = loadSound("./assets/Sounds/JumoSound.mp3")

        
        

	}

    draw() {
		clear()
		this.background.draw()
		this.player.draw()
        
    
    
       if ()
       

		// Every x frames we want to push a new coin into the array 
		if (frameCount % 200 === 0) {
			this.obstacles.push(new Obstacle(this.fishImage))
		}

        // Draw the obstacles
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

        // Filter the coins which are out of the canvas or had a collision
		// We need an arrow function here, so that "this" has the right context (of the game object)
		this.obstacles = this.obstacles.filter(obstacle => {

			if (obstacle.collision(this.player) || obstacle.x < 0) {
				return false
			} else {
				return true
			}
		})

        // IceCube logic 
        if (frameCount % 500 === 0) {
			this.icecubes.push(new Ice(this.iceImage))
		}

        // Draw the ice
        this.icecubes.forEach(function (icecube) {
            icecube.draw()
        })

           // Filter the coins which are out of the canvas or had a collision
		// We need an arrow function here, so that "this" has the right context (of the game object)
		this.icecubes = this.icecubes.filter(icecube => {

			if (icecube.x < 0) {
				return false
			} else {
				return true
			}
		})

        if (game.player.score === 20){
                textSize(80)
                textAlign(CENTER)
                text('You mastered level 1!', width/2, height/2-16)
            }
	}
}