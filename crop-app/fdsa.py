# Python program to demonstrate various styles of plotting graphs using matplotlib

import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5])
y1 = np.array([2, 4, 6, 8, 10])
y2 = np.array([1, 4, 9, 16, 25])

# Line Plot
plt.plot(x, y1, marker='o')
plt.title("Line Plot")
plt.show()

# Bar Graph
plt.bar(x, y1)
plt.title("Bar Graph")
plt.show()

# Scatter Plot
plt.scatter(x, y2)
plt.title("Scatter Plot")
plt.show()

# Pie Chart
labels = ['A', 'B', 'C', 'D', 'E']
sizes = [20, 25, 15, 30, 10]

plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.title("Pie Chart")
plt.show()

# Histogram
data = np.random.randn(1000)

plt.hist(data, bins=20)
plt.title("Histogram")
plt.show()