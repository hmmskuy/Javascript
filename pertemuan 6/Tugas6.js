let identity = ['hammam', '16', 'depok'];
console.log(identity);
console.log(identity[2]);
console.log(identity[1]);


// nomer 1

identity[0] = 'Hammam'
console.log(identity);

// nomer 2

identity.splice(1, 2)
console.log(identity);

// nomer 3

let food1 = ['mangga', 'pisang', 'semangka'];
let food2 = ['apel', 'jeruk', 'anggur'];
let food3 = food1.concat(food2);
food3[2]="jeramy"
console.log(food3)
// nomer 4

let student = ['ucok','budi','wati'];
let student1 = ["hamam","budi","jefri","rayyan"]
let total = student.concat(student1)
total[0] = "fadgham"
total[5] = "taqy"
console.log(total)
// console.log(student.indexOf('wati'));

// nomer 5

let num = [34, 7, 23, 32, 5]
num.sort()
console.log(num);


// nomer 6

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(data.length);

// Menggabungkan data dari 1 samapi 10

let pakaian = ["baju","celana","gamis","rompi"]
pakaian[3] = "jin"
let pakaian2 =["jaket"]
console.log(pakaian2)
console.log(pakaian.length)