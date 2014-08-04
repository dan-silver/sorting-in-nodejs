function bubble(arr) {
  for (var i = arr.length; i > 0; i--) {
    swapped = false
    for (var k = arr.length - 1; k >= 0; k--) {
      if (arr[k] > arr[k+1]) {
        swap(arr, k, k+1)
        swapped = true
      }
    }
    if (swapped == false) return;
  }
}