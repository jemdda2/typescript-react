type PlusType = (x: number, y:number) => number;

function sum(x: number, y: number): number {
	return x + y;
}
const sum2: PlusType = sum;

function getName(n: string | (x: number) => string)