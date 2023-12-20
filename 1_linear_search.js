const array = [1, 2, 4 ,5 ,8 ,29 ,9 ,7 , 8, 10, 24, 86, 98, 6]

let count = 0

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count++
    if (array[i] === item) {
      return i
    }
  }
  return 'no results'
}

console.log(linearSearch(array, 86))
console.log('count = ', count)