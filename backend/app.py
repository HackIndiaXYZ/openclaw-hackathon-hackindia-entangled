from flask import Flask, jsonify, request
from flask_cors import CORS
from simulation import monte_carlo

app = Flask(__name__)
CORS(app)

@app.route("/simulate")
def simulate():
    n = int(request.args.get('n', 200))
    data = monte_carlo(n)
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)