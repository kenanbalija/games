class Snake {
	constructor() {
		this.height = 10;
		this.width = 10;
		this.length = 1;
		this.positionX = 390;
		this.positionY = 290;
	}

	get size(){
		console.log('length: ' + this.length, '| h/w: ' + this.height + '/' + this.width);
	}

	get x() {
		return this.positionX;
	}

	get y() {
		return this.positionY;
	}
	get h() {
		return this.height;
	}

	get w() {
		return this.width;
	}

	addLength(fruit) {
		if (fruit <= 0) {
			console.warn('Fruit value can\'t be lower than 0')
 		} else {
 			this.length+=fruit;
 		}
	}

	test() {
		console.log(this.x);
	} 

}

const snake = new Snake();


canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "black";

ctx.fillRect(snake.x, snake.y, snake.w, snake.h);
//fillRect(x,y,width,height);

document.addEventListener('keydown', snake.test, false);
