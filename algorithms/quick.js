module.exports = function(arr) {
  quicksort(arr, 0, arr.length - 1)
}

function quicksort(arr, l, r) {
  if (l < r) {
    p = partition(arr, l, r)
    quicksort(arr, l, p - 1)
    quicksort(arr, p + 1, r)
  }
}

function partition(arr, left, right) {
  pivot_value = arr[left]
  swap(arr, left, right)
  var storeIndex = left
  for (var i = left; i < right; i++) {
    if (pivot_value > arr[i]) {
      swap(arr, i, storeIndex)
      storeIndex++
    }
  }
  swap(arr, storeIndex, right)
  return storeIndex
}