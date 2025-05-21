# 💸 Expense Tracker App (MERN Stack) IU International University, Germany

The **Expense Tracker App** is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed to help users track their daily, weekly, and monthly expenses. It features a modern UI, backend API services, and a background email alert system.

---

## 🚀 Features

- Add, edit, delete expenses
- Visualize spending using charts (MUI X-Charts)
- Real-time API communication using Axios
- Background job for sending alert emails if expenses exceed a limit
- Modular architecture: frontend, backend, and background service

---

## 🛠️ Tech Stack

| Layer         | Technologies                                           |
|--------------|--------------------------------------------------------|
| Frontend      | React.js, Tailwind CSS, MUI, Axios, Vite              |
| Backend       | Node.js, Express.js, MongoDB, Mongoose, Dotenv        |
| BackgroundSvc | Node.js, node-cron, nodemailer, MongoDB               |
| Visualization | Mermaid.js (for C4 Model Diagram)                     |

---

## 📁 Project Structure

```bash
project-root/
├── frontend/               # React frontend with chart visualizations
├── backend/                # Express backend for RESTful APIs
├── backgroundServices/     # Cron-based alerts and notifications
└── README.md               # Project documentation



---

## 🚀 How to Run This Project (Step-by-Step)

### ✅ Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or cloud via MongoDB Atlas)
- Git
- Any code editor (e.g., VS Code)

---

### 🔌 1. Clone the Project

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker


### 📦 2. Setup Backend (Express API)

```bash
cd backend
npm install

### Create .env file inside /backend and add:

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string

### Start the backend server:

```bash
node index.js


### 🎨 3. Setup Frontend (React UI)

```bash
cd ../frontend
npm install


### Start the frontend:
```bash
npm run dev

### Now open your browser and go to: http://localhost:5173

### ⏰ 4. Setup Background Service (Cron-based Email Alerts)

```bash
cd ../backgroundServices
npm install

### Create .env file inside /backgroundServices and add:

```bash
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
ALERT_LIMIT=5000

### Run background cron service:

```bash
node index.js

### This service checks total expenses and sends email alerts if the defined limit is exceeded.

---

## 📸 Screenshots (Add Yours)

<img width="1120" alt="image" src="https://github.com/user-attachments/assets/9c053a5d-a111-4c3c-8129-8f085f521943" />

<img width="1112" alt="image" src="https://github.com/user-attachments/assets/004bb803-0c93-4468-9270-a3ac52cf0ccf" />

<img width="1105" alt="image" src="https://github.com/user-attachments/assets/b32b3965-5921-40cf-a0fe-2999910e8feb" />

---

## 📃 License

This project is licensed under the **MIT License**.
