let startTime = Date.now()
let fs = require('fs')
//prime helper function
const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;
    return num !== 1 && num !== 0;
}

//--------------------------------------------------------------------------------
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
let sum = 0
for (let i = 0; i < 1000; i++) {
    if (!(i % 3) || !(i % 5)) {
        sum += i
    }
}
console.log("1: " + sum)
//--------------------------------------------------------------------------------
// Problem 2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//          1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
let fib = [1, 2]
let c = 3
while (c < 4000000) {
    fib.push(c)
    c = fib[fib.length - 1] + fib[fib.length - 2]
}
console.log("2: " + fib.filter(n => !(n % 2)).reduce((a, b) => a + b))
//--------------------------------------------------------------------------------
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29. (5*7*13*29 = 13195)
// What is the largest prime factor of the number 600851475143 ?
let n = 600851475143

for (let i = 3; i <= Math.sqrt(n); i += 2) {
    let count = 0;
    while (!(n % i)) {
        count++
        n /= i
    }
}
console.log("3: " + n)
//--------------------------------------------------------------------------------
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
let res = []
for (let i = 100; i < 999; i++) {
    for (let j = 100; j < 999; j++) {
        if (i != j) {
            let factor = i * j
            if (factor.toString() === factor.toString().split("").reverse().join("")) {
                res.push(factor)
            }
        }
    }
}
let palin = Math.max(...res)
console.log("4: " + palin)
//--------------------------------------------------------------------------------
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
n = 20;
while (!isDivBy1To20(n)) {
    n++;
}

function isDivBy1To20(x) {
    let returnval = true
    for (let i = 1; i < 20; i++) {
        if (x % i) return false
    }
    return true
}
console.log("5: " + n)
//--------------------------------------------------------------------------------
// Problem 6
// The sum of the squares of the first ten natural numbers is,
//              12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//              (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
let number = 100
let sumOfSquares = x => x == 1 ? 1 : (x * x) + sumOfSquares(--x)
let quareOfSum = x => x == 1 ? 1 : x + quareOfSum(--x)
let diff = Math.abs(sumOfSquares(number) - Math.pow(quareOfSum(number), 2))
console.log("6: " + diff)
//--------------------------------------------------------------------------------
// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?


n = 2
for (let i = 0; i < 10001; ++n) {
    if (isPrime(n))
        i++
}
console.log("7: " + (n - 1))
//--------------------------------------------------------------------------------
// Problem 8
// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

//NOTE: USE NODE 10.4.0 OR HIGHER TO SUPPORT BIGINT
let longnumber = fs.readFileSync("./data/problem8.txt").toString();
let start = 0,
    end = 13
largest = 0
sum = 1

while (end < longnumber.length) {
    let sub = longnumber.substr(start, end).split("")
    let prod = 1
    sub = sub.map(x => parseInt(x))
    for (x of sub) {
        prod *= x
    }
    if (largest < prod) {
        largest = prod
    }
    start++
    end++

}
console.log("8: " + largest)
//WORKS IN JAVA:

//        int start =0,end=13;
//        BigInteger largest = new BigInteger("0");

//        while(end<longnumber.length()){
//            BigInteger sum = new BigInteger("1");
//            String[] s = longnumber.substring(start,end).split("");
//            for(String p : s){
//                BigInteger g = new BigInteger(p);
//                sum = sum.multiply(g);
//            }
//            start++;
//            end++;
//
//            if(largest.compareTo(sum)!=1) {
//                largest = sum;
//            }
//        }
//        System.out.println(largest);


//--------------------------------------------------------------------------------
// Problem 9
//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//          a^2 + b^2 = c^2
//For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.
let total = 1000
for (let a = 1; a < total / 3; a++) {
    for (let b = a + 1; b < total / 2; b++) {
        let c = total - a - b;
        if ((a * a + b * b) == c * c)
            console.log("9: " + (a * b * c))

    }
}
//--------------------------------------------------------------------------------
// Problem 10
//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.
sum = 0
for (let i = 1; i < 2000000; i++) {
    if (isPrime(i)) sum += i
}
console.log("10: " + sum)

//--------------------------------------------------------------------------------
//time calculation
let epoch = Date.now() - startTime
console.log("epoch: " + epoch / 1000 + "s")
