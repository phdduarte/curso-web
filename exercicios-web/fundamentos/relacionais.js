console.log('01)', '1' == 1)//1 true
console.log('02)', '1' === 1)//2 false
console.log('03)', '3' != 3)//3 façse
console.log('04)', '3' !== 3)//4 true

console.log('05)', 3 < 2)//5 false
console.log('06)', 3 > 2)//6 true
console.log('07)', 3 <= 2)//7 false
console.log('08)', 3 >= 2)//8 true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)//9 false
console.log('10)', d1 == d2)//10 false
console.log('11)', d1.getTime() === d2.getTime())//11 true

console.log('12)', undefined == null)//12 true
console.log('13)', undefined === null)//13 false
