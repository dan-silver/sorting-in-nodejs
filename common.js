function randomArrayOfNumbers(min, max, num_elements) {
  arr = []
  for (var i = 0; i < num_elements; i++)
    arr.push(randomIntFromInterval(min, max))
  return arr
}

function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}

function swap(arr, i, j) {
  var t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

function ascArraySorted(arr) {
  for (var i = 1; i < arr.length; i++) {
  	if (arr[i] < arr[i-1])
  	  return false
  }
  return true
}

function assert(result, test_name) {
  if (result)
    console.log("Test passed:", test_name)
  else
    console.error("Test failed:", test_name)
}

function runSort(algorithm, n) {
  arr = randomArrayOfNumbers(-500, 500, n)
  algorithm(arr)
  assert(ascArraySorted(arr), algorithm.name + " sort with " + n + " elements")
}