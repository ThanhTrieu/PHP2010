let n1 = '10'; //string (number string)
console.log(typeof n1);
// tat ca cac ki tu nam trong '' hoac " " hoac ` ` deu goi la chuoi (string) - kieu du lieu se la string
// ep kieu ve so
n1 = Number.parseInt(n1); // ep ve kieu so nguyen
// parseInt(n1);
console.log(typeof n1);
// (int) n1;
let n2 = 20; // number
let n3 = null ;
// kiem tra xem co phai la so nguyen hay ko?
if(Number.isInteger(n1)){
	n3 = n1 + n2;
}
console.log(n3, typeof n3);
 
let numberString = '   ';
let whiteSpace =  numberString.indexOf(' ');
// indexOf: tim kiem ky tu bam trong chuoi
// tra ve  -1 ko tim thay ki tu va tra ve khac -1 la tim thay(vi tri cua ki tu do nam trong chuoi)

if(!isNaN(numberString) && whiteSpace === -1){
	console.log('Trong chuoi chi chua so');
} else {
	console.log('Ko phai chuoi so');
}
// su dung bien o trong chuoi
let subject = 'PHP';
// back-tick
let string = `Chung ta hoc ${subject}`;
let string2 = 'Chung ta hoc ' + subject; // ghep chuoi
console.log(string, string2);

let x = 10;
let y = 20;
let u = (x % y > y % x) ? y : x;
console.log(u);
if(x % y > y % x){
	u = y;
} else {
	u = x;
}
let t = ( y - x > x / y) ? ( (y / 2 > x + 2) ? x : y) : y;
console.log(t);
// ++a / a++
// --b / b--
let i = 10;
let j = 11;
let v = (++i) + (++j) - (++i) - (j++) + (--j) - (i++);
//  v =   11  +   12  -  12   -   12  +   12   - 12
console.log(v);
// -1 (D)
// 8
// -2
/******************* Dinh nghia ham trong JS **************/
// ham kiem tra chan le
function kiemTraChanLe(number) {
	// ten ham : kiemTraChanLe
	// number: tham so
	if(number % 2 == 0){
		return true;
	}
	return false;
}
let input = 99;
if(kiemTraChanLe(input)){
	console.log(`${input} la so chan`);
} else {
	console.log(`${input} la so le`);
}
// viet ham kiem tra 1 nam co phai la nam nhuan duong lich ko?
// // declare function
function kiemTraNamNhuanDL(year) {
	if(year % 400 == 0){
		return true;
	} else if(year % 4 == 0 && year % 100 != 0) {
		return true;
	}
	return false;
}
let inputYear = 2016;
if(kiemTraNamNhuanDL(inputYear)){
	console.log(`${inputYear} la nam nhuan DL`);
} else {
	console.log(`${inputYear} ko la nam nhuan DL`);
}
// declare function
function timBoiSoChungNN(a, b) {
	let soLonHon = a > b ? a : b;
	let tichHaiSo = a*b;
	for(let i = soLonHon; i <= tichHaiSo; i++){
		if( i % a == 0 && i % b == 0 ){
			return i;
		}
	}
	return 0;
}

// let s1 = prompt('nhap so thu nhat');
// s1 = Number.parseInt(s1);
// let s2 = prompt('nhap so thu nhat');
// s2 = Number.parseInt(s2);
// let bcnn = timBoiSoChungNN(s1, s2);
// alert(`BCNN cua ${s1} va ${s2} la: ${bcnn}`);

/**************** function literals(Anonymous Function) *******/
// viet ham tinh giai thua
let tinhGiaiThua = function(n){
	// bien tinhGiaiThua: se co kieu du lieu la function
	let gt = 1;
	for(let i = 1; i<= n; i++) {
		gt *= i;
	}
	return gt;
}
let result = tinhGiaiThua(5);
console.log(result);

let kiemTraSoChinhPhuong = function(number) {
	let kq = Math.sqrt(number);
	if(Number.isInteger(kq)){
		return true;
	}
	return false;
}
let inputCP = 81;
if(kiemTraSoChinhPhuong(inputCP)){
	console.log(`${inputCP} la so chinh phuong`);
} else {
	console.log(`${inputCP} ko la so chinh phuong`);
}
/**************** Array trong jS *********************/
// mang don - mang 1 chieu
let fruits = new Array('cam','quyt','mit','dua');
let numbers = [1,2,3,4,5,6,7,8,9];
// mang nhieu chieu
let fruits2 = new Array( Array('tao', 'oi'), 'le' ,'man');
let numbers2 = [1,2,3, [0,1,2,3], 4,5];
console.log(fruits, fruits2);
console.log(numbers, numbers2);
// kieu du lieu
console.log(typeof fruits, typeof fruits);
// kiem tra so luong phan tu trong mang
console.log(fruits.length);
// vi tri - so thu tu cua phan tu trong mang bat dau tu  0
// phan tu dau tien co vi tri la 0
// truy cap vao gia tri cua 1 phan tu trong mang
// cua phap: Array[key];
console.log(fruits[2]);
console.log(fruits2[0][1]);
// Duyet qua cac phan tu trong mang

let arrNumbers = [1,2,3,4,5,6,7,8,9,10];
let countLength = arrNumbers.length;
for(let i = 0; i < countLength; i++){
	console.log(arrNumbers[i]);
}

arrNumbers.forEach(function(item, index, array) {
	console.log(`value: ${item} - key: ${index}`);
}); 

for(let i of arrNumbers) {
	console.log(i);
}

let arrNumbersv2 = [1,2,3,4,5,6,7,8,9,10];
let element = 11;
console.log(arrNumbersv2);

// them vao cuoi mang
arrNumbersv2.push(element);
console.log(arrNumbersv2);

// xoa bo phan tu cuoi mang - tra ve phan tu do
let lastEl = arrNumbersv2.pop();
console.log(lastEl, arrNumbersv2);

// them phan tu vao dau mang
arrNumbersv2.unshift(lastEl);
console.log(arrNumbersv2);

// xoa bo phan tu dau tien cua mang va tra ve no
let firstEl = arrNumbersv2.shift();
console.log(firstEl, arrNumbersv2);


let arrNumbersv3 = [1,2,3,4,5,6,7,8,9,10];
let position = arrNumbersv3.indexOf(9);
console.log(position);

















