class Game {
    constructor (){
        this.background = new Background ()
        this.player = new Player()
        this.backgroundImages
        this.playerImage
        this.fishImage
        this.obstacles = []
    
       
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
        this.fishImage = loadImage("./assets/Fish.gif")
        
        

	}

    draw() {
		clear()
		this.background.draw()
		this.player.draw()
        

        // display score
       

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
	}

        gameStateCheck (){
            if (game.player.score === 10) {
            }
        }
    
    
       

    }
