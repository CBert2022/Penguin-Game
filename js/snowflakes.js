class Snowflake {
    constructor(image) {
        this.image = image
		this.width = 15
		this.height = 15
        this.x = (Math.random()* width)
		this.y = this.height

    }
    draw(){
       this.y++
       image(this.image, this.x, this.y, this.width, this.height)
    }
}