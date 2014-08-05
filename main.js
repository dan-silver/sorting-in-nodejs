var common = require("./common"),
	number_of_elements = [5, 10, 50, 100]

require("fs").readdirSync("./algorithms").forEach(function(file) {
  var sortingAlgorithm = require("./algorithms/" + file)
  for (var i = 0; i < number_of_elements.length; i++) {
    runSort(sortingAlgorithm, file.replace(/\.[^/.]+$/, ""), number_of_elements[i])
  }
})

function runSort(algorithm, sortName, n) {
  arr = randomArrayOfNumbers(-500, 500, n)
  algorithm(arr)
  assert(ascArraySorted(arr), sortName + " sort with " + n + " elements")
}