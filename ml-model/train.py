import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle
import os

os.makedirs("models", exist_ok=True)

# ---------------- SALARY MODEL ----------------
salary_data = pd.DataFrame({
    'exp': [1, 2, 3, 4, 5],
    'salary': [20000, 30000, 40000, 50000, 60000]
})

model = LinearRegression()
model.fit(salary_data[['exp']], salary_data['salary'])
pickle.dump(model, open('models/salary.pkl', 'wb'))

# ---------------- HOUSE MODEL ----------------
house_data = pd.DataFrame({
    'area': [500, 800, 1000, 1200, 1500],
    'price': [1000000, 1500000, 2000000, 2500000, 3000000]
})

model = LinearRegression()
model.fit(house_data[['area']], house_data['price'])
pickle.dump(model, open('models/house.pkl', 'wb'))

# ---------------- STUDENT MODEL ----------------
student_data = pd.DataFrame({
    'hours': [1, 2, 3, 4, 5],
    'marks': [40, 50, 60, 70, 80]
})

model = LinearRegression()
model.fit(student_data[['hours']], student_data['marks'])
pickle.dump(model, open('models/student.pkl', 'wb'))

print("Models trained successfully ")