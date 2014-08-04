function selection(arr) {
  for (var i = 0; i < arr.length; i++) {
    var minIndex = i;
    for (var k = i+1; k < arr.length; k++)
      if (arr[k] < arr[minIndex]) minIndex = k
    swap(arr, i, minIndex)
  }
}