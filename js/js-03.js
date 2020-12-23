// object trong js
let students = {
	name: 'VanTeo',
	msv: 113,
	learning: function(subject){
		return 	`Hoc mon ${subject}`;
	},
	sleep: function(time = '22'){
		return `go to sleep at ${time}`;
	}
}
// truy cap vao thuoc tinh hay phuong thuc cua object
// cu phap : Object.key || Object[key]
console.log(students.name, students['name']);
let diNgu = students.sleep('23h30');
console.log(diNgu);

let cats = [
	{name: 'Tom', age: 2, color: 'white', weight: 2},
	{name: 'Tom2', age: 2, color: 'black', weight: 2}
];
console.log(cats[1]['color'], cats[1].color);
cats.forEach(function(item, index) {
	console.log(item['name'], item['age']);
});

let mouse = {}; // object rong
mouse.name = 'jerry';
mouse.age = 3;
mouse.color = 'white';
console.log(mouse);

const number = { a: 10, b: 20};
number.c = 30;
console.log(number);
// destructing object
const {a,b} = number;
console.log(a, b);
// duyet mot object
for(let k in number) {
	console.log(k, number[k]);
}

let st = [
	{
		name: 'Van Teo',
		age: 1999,
		address: 'Ha Noi',
		email: 'test@gmail.com',
		phone: '2342342'
	},
	{
		name: 'Van Ty',
		age: 2000,
		address: 'Ha Noi',
		email: 'test@gmail.com',
		phone: '212121'
	}
];


let table = `
	<table width="100%" border="1" cellSpacing="0" cellPadding="0">
		<thead>
			<tr>
				<th>Ho Ten</th>
				<th>Tuoi</th>
				<th>Email</th>
				<th>SDT</th>
				<th>Que quan</th>
			</tr>
		</thead>
		<tbody>
			${st.map(function(item, index) {
				return `
				<tr>
						<td>${item.name}</td>
						<td>${item.age}</td>
						<td>${item.address}</td>
						<td>${item.email}</td>
						<td>${item.phone}</td>
					</tr>
				`
			})}
		</tbody>
	</table>
`;
document.write(table);



