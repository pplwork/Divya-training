let arr=[2 ,3,6,2,6,64,75];
for (let index = 0; index < arr.length; index++) {
	const element = arr[index];
	console.log(element);
}
let obj={
	member1:'divya shankar ',
	member2:'sonu kumar',
	member3:'hero number 1',
	fingit(){
		console.log("jio mere bete");
	}
}
for (const e in obj) {
	console.log(e);
}
for (const x of arr) {
	console.log(x);
}