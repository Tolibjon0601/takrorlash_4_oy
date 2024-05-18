// let obj = {
//  a: 1,
//  b: 2,
//  c: 3,
//  d: 1
// };

// let newObj= {};
// for (let key in obj) {
//  if (!Object.values(newObj).includes(obj[key])) {
//   newObj[key] = obj[key];
//  }
// }

// console.log(newObj);

// 2-masala
// let obj=[9,8,44,7,23,4,2,101];
// obj.sort((a,b)=>a-b);
// console.log(obj);



// uyga vazifa

// 1-misol
// Given an array of ints length 3, return the sum of all the elements.
// function sum3(nums){
//  return nums[0]+nums[1]+nums[2]
//  }

// 2-misol
// m va n butun sonlari berilgan m sonini n marta chiqaruvchi dastur tuzilsin
// let m=Number(prompt(" m sonini kiriting: "))
// let n=Number(prompt("n sonini kiritng: "))
// for( let i=0;i<n;i++){
//  console.log(m);
// }
// 3-misol

// a dan b gacha bo'lgan butun sonlar yig'indisi topilsin

// let a=3;
// let b=20;
// let sum=0;
// for( let i=a;i<=b;i++){
//  sum+=i;
// }
// console.log(sum);
// 4-misol
// n soni berilgan n sonini tub yoki tub emasligini aniqlovchi dastur tuzilsin
// let n=Number(prompt("n sonini kiriting: "));
// function isPrime(n) {
//  if (n <= 1) {
//      return false;
//  }
//  for (let i = 2; i <= Math.sqrt(n); i++) {
//      if (n % i === 0) {
//          return false;
//      }
//  }
//  return true;
// }
// if (isPrime(n)) {
//  console.log(n+ " soni tub son.");
// } else {
//  console.log(n+ " soni tub emas.");
// }
// 5-misol
// to'g'ri burchakli uchburchakning katetlari A va B berilganda ,
// uning perimetrini aniqlovchi TriangleP nomli funksiya hosil qiling
// let a=Number(prompt("a: "));
// let b=Number(prompt("b: "));
// function TriangleP(a,b) {
//  let c=Math.sqrt(a*a+b*b);
//  let P=a+b+c;
//  return P;
// }
// console.log("perimetri: "+TriangleP(a, b));
// 6-misol
// n ta elementdan tashkil topgan massiv berilgan uning
// elementlarini teskari tartibda chiqaruvchi programma tuzilsin.

function reverseArray(arr) {
 let reversedArr = arr.reverse();

 // Teskari massivni konsolga chiqarish
 console.log("Teskari massiv: " + reversedArr);
}
let myArray = [1, 2, 3, 4, 5,6,7,8,9,10,11,12];
reverseArray(myArray);
