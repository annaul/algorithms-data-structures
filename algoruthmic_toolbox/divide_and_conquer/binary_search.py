# Uses python3
import sys
import math

def binary_search(arr1, num):
    lower = 0
    upper = len(arr1) - 1

    while lower <= upper:
      ind = math.floor((lower + upper) / 2)
      if arr1[ind] < num:
        lower = ind + 1
      elif arr1[ind] > num:
        upper = ind - 1
      else:
        return ind;

    return -1

def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    m = data[n + 1]
    a = data[1 : n + 1]
    for x in data[n + 2:]:
        # replace with the call to binary_search when implemented
        print(binary_search(a, x), end = ' ')
