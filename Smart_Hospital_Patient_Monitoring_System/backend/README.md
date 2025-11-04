# Smart Hospital - Backend

## Setup
1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. `npm install`
3. `npm run dev` (requires nodemon) or `npm start`

## APIs
- POST /api/auth/register {name,email,password,role}
- POST /api/auth/login {email,password}
- POST /api/patients (auth) create patient
- GET /api/patients (auth) list
- POST /api/vitals (auth) add vital readings
- GET /api/vitals/patient/:patientId (auth) list vitals
