function insertion(arr) {
  for (var i = 1; i < arr.length; i++)
    for (var k = i; k > 0; k--)
      if (arr[k] < arr[k-1]) swap(arr, k, k-1)
}