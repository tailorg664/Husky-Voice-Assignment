# 📓Employee Leave Management System
## Features
- Employee signup and login

- Employer signup and login

- Employees can apply for leave

- Employees can view leave status

- Employers can view all leave requests

- Employers can approve or reject leave

- JWT authentication

- Role-based access control

## Tech Stack⚙️
- #### Frontend: Vue.js + Tailwind CSS
- #### Backend: Node.js + Express
- #### Database: MongoDB Atlas

## Setup🔧
`git clone repo`
### Backend
```bash
cd backend
npm install
npm run dev
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
---
## API Endpoints
- POST /api/auth/signup
- POST /api/auth/login

- POST /api/leaves
- GET /api/leaves/my
- GET /api/leaves
- PATCH /api/leaves/:id
