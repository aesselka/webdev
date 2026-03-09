#Task A
AA = int(input())
BA = int(input())
print(max(AA, BA))
#Task B
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("YES")
else:
    print("NO")
#Task C
a = int(input())
b = int(input())

if (a == 1 and b == 1) or (a != 1 and b != 1):
    print("YES")
else:
    print("NO")
#Task D
x = int(input())
if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)
#Task E
AB = int(input())
BB = int(input())
if AB > BB:
    print(1)
elif BB > AB:
    print(2)
else:
    print(0)