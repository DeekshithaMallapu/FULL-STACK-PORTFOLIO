num = int(input("Enter number: "))

count = [0]*10

while num > 0:
    digit = num % 10
    count[digit] += 1
    num = num // 10

max_count = max(count)
digit = count.index(max_count)

print("Digit with maximum count:", digit)
print("Maximum count:", max_count)