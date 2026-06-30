n= int(input("enter:"))
count=0*10
while n>0:
    digit=n%10
    count+=1
    n//10
print("Maximum count:",max(count))