algorithms = [insertion, selection, bubble]
number_of_elements = [5, 10, 50, 100, 500]

for (var j = 0; j < algorithms.length; j++)
  for (var i = 0; i < number_of_elements.length; i++)
    runSort(algorithms[j], number_of_elements[i])