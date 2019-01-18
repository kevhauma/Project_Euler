//--------------------------------------------------------------------------------
//sum of multiples of 3 and 5 under 1000
// 3,5,6,9,10....
let sum = 0
for (let i = 0; i < 1000; i++) {
    if (!(i % 3) || !(i % 5)) {
        sum += i
    }
}
console.log("1:sum of 3 and 5: " + sum)
//--------------------------------------------------------------------------------
//sum of even number in the fibbonacci sequence under 4 million
let fib = [1, 2]
let c = 3
while (c < 4000000) {
    fib.push(c)
    c = fib[fib.length - 1] + fib[fib.length - 2]
}
console.log("2:sum of even fibonacci: " + fib.filter(n => !(n % 2)).reduce((a, b) => a + b))
//--------------------------------------------------------------------------------
//prime factors of 600.851.475.143
let PRIMENUMBER = 600851475143
let isPrime = n => {
    if (n == 1) return false
    for (let i = 2; i < n / 2 + 1; i++) {
        if (!(n % i)) return false
    }
    return true
}
let findlargestPrimeFactor=n=> {
    for (let i = Math.round(n/2); i > 2; i--) {
        console.log(i)
        if (n % i == 0 && isPrime(i)) return i
    }
}
console.log("3: largest primefactor: "+findlargestPrimeFactor(PRIMENUMBER))
