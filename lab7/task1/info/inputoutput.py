import math
#Task A
a = int(input())
b = int(input())
c = math.sqrt(a**2 + b**2)
print(c)
#Task B
n = int(input())
print("The next number for the number", n, "is", n + 1, sep=" ", end=".\n")
print("The previous number for the number", n, "is", n - 1, sep=" ", end=".")
#Task C
n1 = int(input())
k = int(input())
print(k // n1)
#Task D
n2 = int(input())
k2 = int(input())
print(k2 % n2)
#Task E
v = int(input())
t = int(input())

print((v * t) % 109)
