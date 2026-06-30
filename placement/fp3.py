uni=int(input())
bill=0
if (uni <=100) :
    print("$0")
elif (uni >100 and uni<=200 ):
    bill=(uni-100)*5
    print("cost",bill)
else:
    bill=(100*5)+(uni*10)
    print("cost",bill)

