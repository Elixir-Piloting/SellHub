from flask import Flask ,jsonify, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "secretkeykmsmasbifcssn1"
app.config['MONGO_URI'] = "mongodb://localhost:27017/SellHub"
mongo = PyMongo(app)











@app.route('/api/users/add', methods=['post'])
def create_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    
    if data is None or not username or not password or not email:
        return jsonify({'error': 'Invalid data'}), 400
    
    
    hashed_password = generate_password_hash(password)    
    user = {
        'username': username,
        'password': hashed_password,
        'email': email
    }
    mongo.db.users.insert_one(user).inserted_id
    
    resp = jsonify({'message': 'User created successfully'}), 201
    return resp

@app.route('/api/users', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    resp = dumps(users)
    return resp 


@app.route('/api/users/<id>', methods=['GET'])
def get_user(id):
    user = mongo.db.users.find_one({'_id': ObjectId(id)})
    resp = dumps(user)
    return resp 



@app.route('/api/users/delete/<id>', methods=['delete'])
def delete_user(id):
    mongo.db.users.delete_one({'_id': ObjectId(id)})
    resp = jsonify("User deleted successfully")
    return resp 

@app.route('/api/users/update/<id>', methods=['PUT'])
def update_user(id):
    
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    hashed_password = generate_password_hash(password)

    update_fields = {}
    if username:
        update_fields['username'] = username
    if password:
        update_fields['password'] = hashed_password
    if email:
        update_fields['email'] = email
    if not update_fields:
        return jsonify({'error': 'No fields to update'}), 400
    
    mongo.db.users.update_one({'_id': ObjectId(id)}, {'$set': update_fields})
    
    resp = jsonify("User updated successfully")
    return resp



if __name__ == "__main__":
    app.run(debug=True)