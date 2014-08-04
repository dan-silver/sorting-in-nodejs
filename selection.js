function executeSelectionSort(n) {
  arr = randomArrayOfNumbers(-500, 500, n)
  selectionSort(arr)
  assert(verifyAscArrayIsSorted(arr), "selection sort with " + n + " elements")
}

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var minIndex = i;
    for (var k = i+1; k < arr.length; k++)
      if (arr[k] < arr[minIndex]) minIndex = k
    swap(arr, i, minIndex)
  }
}