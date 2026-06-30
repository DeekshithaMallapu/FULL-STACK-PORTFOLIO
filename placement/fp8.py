password=input("enter: ")
if len(password)<6 :
    print("weak password")
elif len(password)>=6 and len(password)<=10 :
    print("medium password")
else :
    print("strong password")
