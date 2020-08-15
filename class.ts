class Animal {
	name: string;
	static categoies: string[] = ['mamaml', 'bird'];
	static isAnimal(a) {
		return a instanceof Animal;
	}
	constructor(name: string) {
		this.name = name;
	}
	run() {
		return `${this.name} is running`
	}
}

console.log(Animal.categoies);
const snake = new Animal('lily')
console.log(Animal.isAnimal(snake));


class Dog extends Animal {
	bark() {
		return `${this.name} is barking`
	}
}

const baby = new Dog('baby');

class Cat extends Animal {
	constructor(name) {
		super(name)
		console.log(this.name);
	}
	run() {
		return 'Meow, ' + super.run();
	}
}

const maomao = new Cat('maomao');

class Car {
	switchRadio() {

	}
}

class Cellphone {
	switchRadio() {
		
	}
}