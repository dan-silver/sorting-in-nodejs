
var sort = module.exports = function(arr) {
	var count = {}
	var min = arr[0]
	var max = arr[0]
	for (var i = 0; i < arr.length; i++) {
		if (!count[arr[i]]) count[arr[i]] = []
		count[arr[i]].push(arr[i])
		if (min > arr[i]) min = arr[i]
		if (max < arr[i]) max = arr[i]
	}
	var total = 0
	var position = 0
	for (var i = min; i <= max; i++) {
		if (count[i] === undefined) continue
		while( count[i].length > 0 )
			arr[position++] = count[i].pop() 
	}
}