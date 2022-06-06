---
date created: Sunday, June 5th 2022, 4:14:21 pm
date modified: Monday, June 6th 2022, 12:48:56 pm
title: Insertion sort
---

# Insertion Sort

- Insertion sort also know as shifting sort
- Insertion-sort is an excellent algorithm for sorting small sequences (say, less than 50 elements)

![](https://media.geeksforgeeks.org/wp-content/uploads/insertion_sort-recursion.png)

Also possible to use swap but a bit inefficient (multiple swap)

```python
def SortWithInsertion(array):
	for i in range(1, len(array)):
		j = i
		# THIS IS WORKING BCOZ INSERTION WORKS BY SHIFTING TO THE LEFT <-----
		while j > 0 and array[j - 1] > array[j]:
			array[j - 1], array[j] = array[j], array[j - 1]
			j = j - 1
	return array
		
print(SortWithInsertion([7, 6, 5, 4, 3, 2, 1]))
```