class Background {
	draw() {
     

		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed
			image(img.src, img.x, 0, width, height)
			// Here we add a second image
			image(img.src, img.x + width, 0, width, height)

			// When the image leaves the screen we set it to the starting position
			if (img.x <= - width) img.x = 0
		})
	}
}
