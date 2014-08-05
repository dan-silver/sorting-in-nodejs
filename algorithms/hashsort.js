module.exports = function(arr) {
	var r = {}
	var max = arr[0]
	var min = arr[0]

	var arr_len = arr.length
	for (var i = 0; i < arr_len; i++) {
		var cur = (function(){return arr.pop()})()
		r[cur] = cur 
		if (cur > max) max = cur
		if (cur < min) min = cur
	}
	for (var i = min; i <= max; i++) {
		if (r[i]) arr.push(r[i])
	}
}

if (!module.parent) {
	var a = []
	for (var i = 0; i < 1000000;i++) a.push(Math.round(Math.random()*10000))
	module.exports(a)	
}