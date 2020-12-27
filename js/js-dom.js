// DOM Element
// tim phan tu HTML theo id
let btn = document.getElementById('button');
console.log(btn);

// tim theo class name
let btn2 = document.getElementsByClassName('btn');
console.log(btn2[1]);

// tim theo ten the
let btn3 = document.getElementsByTagName('p');
console.log(btn3[0]);

// tim theo selector css
let btn4 = document.querySelector('.btn');
console.log(btn4);

let btn5 = document.querySelectorAll('.btn');
console.log(btn5[1]);

let button = document.getElementById('clickMe');
// bat su kien cho no
// button.onclick = function(){
// 	alert('hello you');
// }
button.addEventListener('click', function(){
	//alert('hello you');
	let title = document.getElementById('title');
	//title.innerHTML = 'hoc PHP';
	let content = title.innerText;
	//alert(content);
	let img = document.getElementsByTagName('img');
	img[0].src = 'images/slide-01.jpg';
	//img[0].src = 'images/icon.png';
	let input = document.getElementsByClassName('input-form');
	input[0].setAttribute('type', 'button');
	//input[0].type = 'button';
	let box = document.getElementById('box');
	// css cho box
	box.style.width = '300px';
	box.style.height = '300px';
	box.style.backgroundColor = 'yellow';
});









