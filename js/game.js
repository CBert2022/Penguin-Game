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
        this.playerImageDuck
        this.playerImageFreeze
        this.snowFlakes = []
        this.snowFlakeImage
          
    }
    preload () {
        this.backgroundImages = [
            { src: loadImage("assets/background1.png"), x: 0, speed: 0 },
            { src: loadImage("assets/background2.png"), x: 0, speed: 1 },
            { src: loadImage("assets/cloudw1000.png"), x: 0, speed: 2 },
            { src: loadImage("assets/Sea_1.png"), x:0 , speed: 3},
            { src: loadImage("assets/ice2.png"), x: 0, speed: 0 },
        ]
        this.playerImagedefault = loadImage("assets/Penguin.gif")
        this.playerImage = loadImage("assets/Penguin.gif")
        this.playerImageDuck = loadImage("assets/Sliding_Penguin.png")
        this.playerImageFreeze = loadImage("assets/freezing_penguin.gif")
        this.fishImage = loadImage("assets/FishFaceUp.gif")
        this.iceImage = loadImage("assets/icecube.png")
        this.snowFlakeImage = loadImage("assets/snowflake10.png")

	}

    draw() {
		clear()
		this.background.draw()
		this.player.draw()


        //  // Hide the manual div
         if (keyCode === (13)){
            document.getElementById("manuals").style.display="none"
            }
            
        // Logic for fish obstacles
		// Every 200 frames push a new fish into the array 
		if (frameCount % 200 === 0) {
			this.obstacles.push(new Obstacle(this.fishImage))
		}

        // Draw the obstacles
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

        // Filter the obstacles which are out of the canvas or had a collision with player
		// Arrow function here, so that "this" has the right context (of the game object)
		
        this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player) || obstacle.x < 0) {
				return false
			} else {
				return true 
			}  
		})

         // Logic for iccubes 
		// Every 500 frames push a new icecube into the array 
        if (frameCount % 500 === 0) {
			this.icecubes.push(new Ice(this.iceImage))
		}

        // Draw the ice
        this.icecubes.forEach(function (icecube) {
            icecube.draw()
        })

        // Filter the ice which are out of the canvas or had a collision with player
		// Arrow function here, so that "this" has the right context (of the game object)
		this.icecubes = this.icecubes.filter(icecube => {

            if (icecube.collision2(this.player) || icecube.x < 0) {
				return false
			} else {
				return true
			}
		})

        // Logic for snowflakes
         if (frameCount % 20 === 0){
                this.snowFlakes.push(new Snowflake(this.snowFlakeImage))
            }

        // Draw the snowflakes
		this.snowFlakes.forEach(function (snowflake) {
			snowflake.draw()
		})

        if (game.player.score <= -20){
            location.href = 'lose.html';
                noLoop()
            } else if (game.player.score === 20){
                location.href = 'win.html';
                noLoop()
            }
	}

    } // close class Game
