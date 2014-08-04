executeInsertionSort(5)
executeInsertionSort(10)
executeInsertionSort(50)
executeInsertionSort(500)
executeInsertionSort(1000)

function executeInsertionSort(n) {
  arr = randomArrayOfNumbers(-500, 500, n)
  insertionSort(arr)
  assert(verifyAscArrayIsSorted(arr), "insertion sort with " + n + " elements")
}

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++)
    for (var k = i; k > 0; k--)
      if (arr[k] < arr[k-1]) swap(arr, k, k-1)
}