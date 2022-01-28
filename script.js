let array = [];

do {
	x = +prompt("Введите число.");
	array.push(x);
} while (x != null && x != '');



const arrLen = array.length;

let count = 0;
for (let i = 0; i < arrLen - 1; i++) {
	count += array[i]
}

let numDel = arrLen - 1;
alert(count / numDel);