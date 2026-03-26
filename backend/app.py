from flask import Flask, jsonify, request
from flask_cors import CORS
from simulation import monte_carlo

app = Flask(__name__)
CORS(app)

@app.route("/simulate")
def simulate():
    try:
        n = int(request.args.get('n', 200))
        if n < 50 or n > 10000:
            return jsonify({"error": "Number of simulations must be between 50 and 10000"}), 400
    except ValueError:
        return jsonify({"error": "Invalid number of simulations"}), 400
    data = monte_carlo(n)
    return jsonify(data)

@app.route("/health")
def health():
    return jsonify({"status": "healthy", "endpoint": "/simulate"})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)
