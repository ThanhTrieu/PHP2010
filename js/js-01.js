//alert('Hello you');
// comment tren 1 dong
/*
comment tren nhieu dong
 */
console.log('Hello You');
//var myName = prompt('moi nhap ho ten');
//console.log(myName);
// var n1 = prompt('moi nhap so a');
// var n2 = prompt('moi nhap so b');
// var n3  = n1 + n2;
// console.log(n3);
// console.log(typeof n1, typeof n2);

let n1 = 10;
let n2 = 20;
let n3 = n1 + n2;
const PI = 3.14;
console.log(n3, typeof n3, typeof PI);

var a = 10;
var a = 20;
console.log(a);
// let u = 10;
// let u = 20;

// scope
let x = 10;
if(x > 8){
	let x = 11;
	if(x > 10){
		let x = 12;
		console.log(x);
	}
	console.log(x);
}

if(x == 50){
 //dsdsd
} else if(x == 50) {

} else if(x == 50) {

} else {

}

///bnnnnmmmnmn
let month = 5;
let day = 30;
switch (day) {
	case 30:
		// statements_1
		break;
	case 31:
		//statements_2
	 break;
	default:
		// statements_def
		break;
}

for(let i = 1; i <= 10; i++) {
	console.log(i);
}
// in ra tat ca cac so le tu 50 - 200;

let j = 1;
while ( j <= 10) {
	// statement
	console.log(j);
	j++;
}

let k = 50;
while( k <= 200) {
	if(k % 2 != 0){
		console.log(k);
	}
	k++;
}

let z = 1;
do {
	console.log(z);
	z++;
} while( z <= 10);



let number = 100;
//let flag = true;
let count = 0;
for( let i = 2; i <= number; i++){
	if(number % i != 0){
		//console.log('ko la so nguyen to');
		//flag = false;
		//break;
		count++;
	}
}
console.log(count);
// if(flag){
// 	console.log(number + ' la so nguyen to');
// } else {
// 	console.log(number + ' ko la so nguyen to');
// }
// viet 1 ham kiem tra so nguyen to
function kiemTraSoNT(n){
	if(n <= 1){
		return false;
	}
	if( n == 2){
		return true;
	}
	for(let i = 2; i <= Math.sqrt(n); i++){
		if(n % i == 0){
			return false;
		}
	}
	return true;
}
function demSoNT(a, b) {
	let c = 0;
	for(let i = a; i<= b; i++) {
		if(kiemTraSoNT(i)){
			c++;
		}
	}
	return c;
}
let result = demSoNT(1,100);
console.log('ket qua la : ' + result);

let condition = 0;
if(condition === ''){
	console.log('AAA');
} else {
	console.log('BBB');
}










