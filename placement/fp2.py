username=str(input("enter"))
password=str(input("enter"))
if username=="student" and password=="python123":
    print("login successfull")
elif password!="python123" :
    print("wrong password")
else :
    print("user not found")
    