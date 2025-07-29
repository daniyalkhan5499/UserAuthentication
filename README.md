# User Authentication App

A simple Node.js application for user registration and login using Express, MongoDB, bcrypt, JWT, and EJS.

## Features

- User registration with hashed passwords
- User login with JWT authentication
- EJS templating for views
- Cookie-based session management
- Logout functionality

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- bcrypt
- jsonwebtoken
- EJS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/daniyalkhan5499/UserAuthentication.git
    cd UserAuthentication
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your MongoDB connection in `models/user.js` (update the URI as needed).

4. Start the application:
    ```bash
    node app.js
    ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
UserAuthentication/
│
├── app.js
├── models/
│   └── user.js
├── views/
│   ├── index.ejs
│   └── login.ejs
├── public/
│   └── ...static files...
└── package.json
```

## Usage

- Register a new user at `/`
- Login at `/login`
- Logout at `/logout`

## License

This project is licensed
