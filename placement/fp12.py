#total=0
#for i in range(1,10,2):
 #   total=total+i
#print(total)

#val=int(input("enter"))
#count=0
#while val>0:
 #   val=val//10
  #  count+=1
#print(count)

n=int(input("enter: "))
total=0
while n>0:
    rem=n%10
    total+=rem
    n=n//10
print(total)
