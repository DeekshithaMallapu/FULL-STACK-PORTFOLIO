n=int(input())
if n%4==0:
    while n%6==0:
        break
    if n%2 and n%3==0:
        print("x")
    else:
        print(n)