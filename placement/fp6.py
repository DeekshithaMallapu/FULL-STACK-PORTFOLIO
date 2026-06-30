attendance=int(input())
medicalproof=str(input())
if attendance>=75 :
 print("eligible")
elif attendance<75 and medicalproof=="yes" :
 print("eligible")
else:
 print("not eligible")
 
 