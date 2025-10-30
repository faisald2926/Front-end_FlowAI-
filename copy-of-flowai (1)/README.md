<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# FlowAI Front-End

This repository contains the front-end code for the FlowAI application, built with React, TypeScript, and Vite. This document outlines the steps required to connect it to a Flask back-end.

## Getting Started

### Prerequisites

-   **Node.js** (v18 or later)
-   **npm** or **yarn**
-   **Python** (v3.8 or later)
-   **pip** and **venv**

### Front-End Installation

1.  **Clone the repository:**
2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the front-end development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

---

## Connecting the Flask Back-End

The front-end is configured to proxy API requests from `localhost:3000/api` to a back-end server running on `localhost:8000`. This avoids CORS issues during development.

### Step 1: Set Up the Flask Environment

It is highly recommended to use a Python virtual environment for the back-end.

1.  **Create a new directory for your back-end:**
    ```bash
    mkdir flowai-backend
    cd flowai-backend
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

    # For Windows
    python -m venv venv
    venv\Scripts\activate
    ```

3.  **Install Flask and Flask-CORS:**
    ```bash
    pip install Flask Flask-Cors
    ```

### Step 2: Create the Flask Application

Create a file named `app.py`. This file will contain your API endpoints. Below is a starter template with mock data that matches what the front-end expects.

**`app.py`**
```python
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enable Cross-Origin Resource Sharing

# --- MOCK DATA (Replace with your database logic) ---

DASHBOARD_DATA = {
    "hasLeak": True,
    "consumptionData": [
        {"name": 'Sun', 'Your Usage': 140, 'Average Usage': 170},
        {"name": 'Mon', 'Your Usage': 130, 'Average Usage': 180},
        {"name": 'Tue', 'Your Usage': 125, 'Average Usage': 175},
        {"name": 'Wed', 'Your Usage': 135, 'Average Usage': 185},
        {"name": 'Thu', 'Your Usage': 150, 'Average Usage': 170},
        {"name": 'Fri', 'Your Usage': 190, 'Average Usage': 190},
        {"name": 'Sat', 'Your Usage': 210, 'Average Usage': 220},
    ],
    "comparison": {
        "userUsage": 135,
        "averageUsage": 160
    },
    "aiTips": [
        {"icon": "🚿", "title": "Shorter Showers", "description": "Cutting 2 mins from your shower saves over 550 liters a month."},
        {"icon": "🧺", "title": "Full Laundry Loads", "description": "Running only full loads can significantly reduce weekly water use."},
        {"icon": "🚽", "title": "Check for Toilet Leaks", "description": "A silent toilet leak can waste hundreds of liters per day."}
    ]
}

LEAK_DETAILS_DATA = [
    {"hour": '12am', "usage": 2}, {"hour": '1am', "usage": 2},
    {"hour": '2am', "usage": 20}, {"hour": '3am', "usage": 25},
    {"hour": '4am', "usage": 30}, {"hour": '5am', "usage": 33},
    {"hour": '6am', "usage": 25}, {"hour": '7am', "usage": 18},
    {"hour": '8am', "usage": 10}, {"hour": '9am', "usage": 0},
    {"hour": '10am', "usage": 0}, {"hour": '11am', "usage": 0},
    {"hour": '12pm', "usage": 10}, {"hour": '1pm', "usage": 65},
]

# --- API ROUTES ---

@app.route("/login", methods=["POST"])
def login():
    # In a real app, you would validate credentials against a database
    data = request.get_json()
    if data.get("email") == "user@example.com" and data.get("password") == "password":
        return jsonify({"success": True, "message": "Login successful!"})
    else:
        return jsonify({"success": False, "message": "Invalid credentials."}), 401


@app.route("/dashboard", methods=["GET"])
def get_dashboard_data():
    # The front-end expects data in this exact structure
    return jsonify(DASHBOARD_DATA)


@app.route("/leaks/details", methods=["GET"])
def get_leak_details():
    # The front-end expects an array of these data points
    return jsonify(LEAK_DETAILS_DATA)


if __name__ == "__main__":
    # The front-end Vite proxy is configured to connect to port 8000
    app.run(debug=True, port=8000)