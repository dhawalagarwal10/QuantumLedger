from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests
from flask import Flask, jsonify, request

# Load environment variables from .env
load_dotenv()
MODE_API_KEY = os.getenv("MODE_API_KEY")
API_URL = "https://api.mode.com/endpoint"  # Replace with actual Mode API endpoint

# Flask app initialization
app = Flask(__name__)

CORS(app)

# Home route to confirm backend is running
@app.route('/')
def home():
    return "QuantumLedger Backend is Running!"

# Example route for a simple GET API
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({'message': 'Hello from the backend!'})

# Token prices endpoint using mock data
@app.route('/token-prices', methods=['GET'])
def token_prices():
    # Example: Fetch token prices from Mode API (if applicable)
    headers = {
        "Authorization": f"Bearer {MODE_API_KEY}",
        "Content-Type": "application/json"
    }
    try:
        response = requests.get(API_URL, headers=headers)
        response.raise_for_status()  # Raise an error for bad responses (4xx/5xx)
        data = response.json()
        return jsonify(data)  # Return Mode's response
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

# Governance insights endpoint
@app.route('/governance', methods=['POST'])
def governance():
    data = request.json
    wallet_address = data.get("wallet_address")
    
    # Example: Fetch governance insights from Mode API
    governance_api_url = f"{API_URL}/governance/{wallet_address}"  # Replace with actual Mode endpoint
    headers = {
        "Authorization": f"Bearer {MODE_API_KEY}",
        "Content-Type": "application/json"
    }
    try:
        response = requests.get(governance_api_url, headers=headers)
        response.raise_for_status()
        governance_data = response.json()
        return jsonify(governance_data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

# DeFi analytics endpoint
@app.route('/defi-analytics', methods=['POST'])
def defi_analytics():
    data = request.json
    wallet_address = data.get("wallet_address")
    
    # Example: Fetch DeFi analytics from Mode API
    defi_api_url = f"{API_URL}/defi-analytics/{wallet_address}"  # Replace with actual Mode endpoint
    headers = {
        "Authorization": f"Bearer {MODE_API_KEY}",
        "Content-Type": "application/json"
    }
    try:
        response = requests.get(defi_api_url, headers=headers)
        response.raise_for_status()
        defi_data = response.json()
        return jsonify(defi_data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
