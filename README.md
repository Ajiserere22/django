# Backend API

This is a Node.js/Express backend API with MongoDB and JWT authentication.

## Setup

1. Clone the repository or copy the backend folder.

2. Install dependencies:

```bash
cd backend
npm install
```

3. Create a `.env` file in the `backend` directory based on `.env.example` and update the values:

```
MONGODB_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. Start the server:

```bash
npm run dev
```

The server will start on the port specified in `.env` (default 5000).

## API Endpoints

- `GET /` - Basic health check route.
- `POST /api/auth/register` - Register a new user. Requires `username`, `email`, and `password` in the request body.
- `POST /api/auth/login` - Login a user. Requires `email` and `password` in the request body. Returns a JWT token on success.

## Notes

- Make sure MongoDB is running locally or update the `MONGODB_URI` to point to your MongoDB instance.
- Use the JWT token returned from login to authenticate protected routes (to be implemented as needed).
