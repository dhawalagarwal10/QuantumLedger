# QuantumLedger

**QuantumLedger** is an AI-powered blockchain insights oracle designed to simplify access to blockchain analytics, governance insights, and DeFi analytics for users and organizations. By leveraging advanced AI models, QuantumLedger aims to provide a seamless interface for understanding blockchain data and empowering users with actionable insights.

---

## **Problem Statement**
Blockchain data is inherently complex and fragmented across multiple platforms, making it difficult for users to derive actionable insights. This complexity hinders effective decision-making in governance, DeFi, and token analytics.

---

## **Objective**
To build an AI-driven solution that consolidates blockchain data into a single platform, providing:
- Real-time token price analysis.
- Personalized governance insights.
- DeFi analytics tailored to individual wallet addresses.

---

## **Features**
1. **Token Prices**: Fetch real-time token prices using API integration.
2. **Governance Insights**: Retrieve governance-related data specific to user-provided wallet addresses.
3. **DeFi Analytics**: Deliver actionable insights into DeFi activity based on wallet data.
4. **Responsive Frontend**: User-friendly React-based interface for data visualization.

---

## **Methodology**
1. **Backend**: Flask-based REST API to handle requests and interact with external blockchain data providers.
   - Endpoints:
     - `/token-prices`: Fetch token prices.
     - `/governance`: Provide governance insights.
     - `/defi-analytics`: Deliver DeFi analytics.

2. **Frontend**: React-based application for seamless user interaction.
   - Calls backend APIs to display fetched data.
   - Responsive and modern design for better user experience.

3. **Integration**:
   - Use environment variables to securely store API keys.
   - Flask-CORS for enabling secure cross-origin requests.

---

## **Scope of the Solution**
1. **For Users**: Easy access to detailed blockchain insights without requiring deep technical knowledge.
2. **For Developers**: Provides a foundation for building additional features like predictive analytics or portfolio tracking.
3. **Scalability**: The solution can integrate with additional blockchain networks or APIs as needed.

---

## **Built With**
- **Frontend**: React.js, JavaScript, HTML, CSS
- **Backend**: Flask, Python
- **APIs**: Mode API for blockchain data
- **Utilities**: dotenv for environment variables, Flask-CORS for handling cross-origin requests
- **Version Control**: Git and GitHub

---

## **Getting Started**
### Prerequisites
- Node.js and npm installed.
- Python 3.x installed.
- Git installed.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dhawalagarwal10/QuantumLedger.git
   cd QuantumLedger
   ```

2. **Setup Backend**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install Python dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Create a `.env` file and add your API key:
     ```env
     MODE_API_KEY=your_api_key_here
     ```
   - Run the backend:
     ```bash
     python app.py
     ```

3. **Setup Frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install Node.js dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

---

## **Usage**
1. Open the React application in your browser at `http://localhost:3000`.
2. Interact with the UI to fetch token prices, governance insights, and DeFi analytics.
3. Monitor the backend logs for real-time API call debugging.

---

## **Contributing**
Contributions are welcome! Please fork the repository and submit a pull request for review.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Acknowledgments**
- Mode API for providing blockchain data.
- Flask and React.js communities for excellent resources and support.

