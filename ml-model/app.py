from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

salary_model = pickle.load(open('models/salary.pkl', 'rb'))
house_model = pickle.load(open('models/house.pkl', 'rb'))
student_model = pickle.load(open('models/student.pkl', 'rb'))

# -------- SALARY --------
@app.route('/salary', methods=['POST'])
def salary():
    exp = request.json['exp']
    result = salary_model.predict([[exp]])
    return jsonify({'prediction': float(result[0])})

# -------- HOUSE --------
@app.route('/house', methods=['POST'])
def house():
    area = request.json['area']
    result = house_model.predict([[area]])
    return jsonify({'prediction': float(result[0])})

# -------- STUDENT --------
@app.route('/student', methods=['POST'])
def student():
    hours = request.json['hours']
    result = student_model.predict([[hours]])
    return jsonify({'prediction': float(result[0])})

app.run(port=5000, debug=True)