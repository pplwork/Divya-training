function partition(arr,l,h,field) {
	// console.log("running with ",l," and ",h);
	let index=Math.ceil(Math.random()*h);
	let pivot=arr[index];
	let i=l;
	for(let j=l;j<=h-1;j++){
		if(arr[j][field]<pivot[field]){
			let temp=arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
			i++;

		}
		
	}
	let temp = arr[index];
	arr[index] = arr[i];
	arr[i] = temp;
	return i;
	
}
function Quicksort(arr,l,h,field){
	if(l<h){
		let p=partition(arr,l,h,field);
		Quicksort(arr,l,p-1,field);
		Quicksort(arr,p+1,h,field);
	}
}
// Quicksort(arr,0,arr.length-1);
class Person {
	constructor(name,age,salary,sex){
		this.name=name;
		this.age=age;
		this.salary=salary;
		this.sex=sex;
	}
	static sort(arr,field,order){
		let brr=[...arr]
		Quicksort(brr,0,brr.length-1,field);
		if (order!="asc") {
			brr.reverse();
		}
		return brr;
	}
}
const brr = [{
	name: 'sonu',
	age: 12,
	salary: 10000000,
	sex: 'male'
}, {
	name: 'kumar',
	age: 10,
	salary: 3223,
	sex: 'male'
}, {
	name: 'niki',
	age: 15,
	salary: 3000,
	sex: 'female'
}, {
	name: 'soni',
	age: 21,
	salary: 4000,
	sex: 'male'
}, ];
const trr=[];
for (let i = 0; i < 4; i++) {
		const p1=new Person(brr[i].name,brr[i].age,brr[i].salary,brr[i].sex);
		trr.push(p1);
}
const reer=Person.sort(trr,"name","desc");
console.log(reer);
console.log('Task completed successfully');