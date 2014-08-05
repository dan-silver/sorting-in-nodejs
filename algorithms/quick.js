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
  pivot_index = choose_pivot(left, right)
  pivot_value = arr[pivot_index]
  swap(arr, pivot_index, right)
  var storeIndex = left
  for (var i = left; i < right; i++) {
    if (arr[i] > pivot_value) {
      swap(arr, i, storeIndex)
      storeIndex++
    }
  }
  swap(arr, storeIndex, right)
  return storeIndex;
}

function choose_pivot(left, right) {
  var len_min_1 = right - left 
  return left + Math.floor( Math.random() * len_min_1 )
}