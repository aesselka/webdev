#Task A
n1 = int(input())
m1 = int(input())

for i in range(n1, m1 + 1):
    if i % 2 == 0:
        print(i, end=" ")
#Task B
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")
#Task C
n2 = int(input())
m2 = int(input())

for i in range(n2, m2 + 1):
    if int(i ** 0.5) ** 2 == i:
        print(i, end=" ")
#Task D
x1 = input()
d1 = input()

print(x1.cnt(d1))
#Task E
x = input()

s = 0
for d2 in x:
    s += int(d2)

print(s)
#Task F
x3 = input()
print(int(x3[::-1]))
#Task G
y = int(input())
for i in range(2, y + 1):
    if y % i == 0:
        print(i)
        break
#Task H
h = int(input())

for i in range(1, h + 1):
    if h % i == 0:
        print(i, end=" ")
#Task I
n = int(input())
cnt = 0
i = 1
while i * i <= n:
    if x % i == 0:
        if i * i == n:
            cnt += 1
        else:
            cnt += 2
    i += 1
print(cnt)
#Task J
j = 0
for i in range(100):
    x = int(input())
    j += x
print(s)
#Task K
k = int(input())
s1 = 0
for i in range(k):
    x = int(input())
    s1 += x
print(s1)
#Task L
l = input()
print(int(l, 2))
#Task M
m = int(input())
cnt = 0
for i in range(n):
    m = int(input())
    if m == 0:
        cnt += 1
print(cnt)