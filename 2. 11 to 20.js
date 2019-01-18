let startTime = Date.now()
let fs = require('fs')
//prime helper function
const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;
    return num !== 1 && num !== 0;
}

//--------------------------------------------------------------------------------
// Problem 11
// In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
// The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
//What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?
let gridText = fs.readFileSync("./data/problem11.txt").toString().split("\r\n")
let grid = []
let size = 4
for (let x of gridText)
    grid.push(x.split(" "))
grid.map(y => y.map(x => parseInt(x)))
let largest = 0
let maps = []
//horizontal 
//[[1,1,1,1]]
let map = []
for (let i = 0; i < 1; i++) {
    map[i] = []
    for (let j = 0; j < size; j++) {
        map[i][j] = 1
    }
}
maps.push(map)
//vertical
//[[1],
// [1],
// [1],
// [1] ]
map = []
for (let i = 0; i < size; i++) {
    map[i] = []
    for (let j = 0; j < 1; j++) {
        map[i][j] = 1
    }
}
maps.push(map)
//diagonal topleft - bottom right//vertical
//[[1,0,0,0],
// [0,1,0,0],
// [0,0,1,0],
// [0,0,0,1] ]
map = []
for (let i = 0; i < size; i++) {
    map[i] = []
    for (let j = 0; j < size; j++) {
        map[i][j] = 0
        if (i == j) map[i][j] = 1
    }
}
maps.push(map)
//diagonal topright - bottomleft
//[[0,0,0,1],
// [0,0,1,0],
// [0,1,0,0],
// [1,0,0,0] ]
maps.push(map.slice().reverse())

for (map of maps) {
    for (let y = 0; y <= grid.length - map.length; y++) {
        for (let x = 0; x <= grid[0].length - map[0].length; x++) {
            let prod = 1
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[0].length; j++) {
                    if (map[i][j]) {
                        prod *= grid[y + i][x + j]
                    }
                }
            }
            if (largest < prod)
                largest = prod
        }
    }
}
console.log(largest)
//--------------------------------------------------------------------------------
//time calculation
let epoch = Date.now() - startTime
console.log("epoch: " + epoch / 1000 + "s")
