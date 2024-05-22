# Full Authentication CRUD App

This project is a full-fledged authentication and CRUD (Create, Read, Update, Delete) application built using React and Firebase. The app includes user authentication (sign up, log in, password reset), user profile management, and basic CRUD functionalities.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [Learn More](#learn-more)

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/FadyFathey/Full-Authentication-Crud-app.git
   
Navigate to the project directory:
cd Full-Authentication-Crud-app

Set up Firebase:

Create a .env file in the root directory and add your Firebase configuration:

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id

Start the development server:

npm start

Open http://localhost:3000 to view it in your browser.

Available Scripts
In the project directory, you can run:

In the project directory, you can run:

`npm start`: Runs the app in the development mode. The page will reload when you make changes. You may also see any lint errors in the console.

`npm test`: Launches the test runner in the interactive watch mode.

`npm run build`: Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

`npm run eject`: Note: this is a one-way operation. Once you eject, you can't go back!

Project Structure

The main files and directories included in this project are:

`src/`

`App.js`: The main app component.

`authContext.js`: Context for authentication management.

`dashBoard.js`: Dashboard component for logged-in users.

`firebase.js`: Firebase configuration and initialization.

`forgetPassword.js`: Component for password reset functionality.

`index.js`: Main entry point of the app.

`login.js`: Component for login functionality.

`signup.js`: Component for signup functionality.

`updateProfile.js`: Component for updating user profile.


Features

User Authentication:

Sign up

Log in

Password reset

Log out

User Profile Management:

Update email

Update password

Dependencies

React

Firebase

React Bootstrap

React Router DOM

React Toastify

Axios

Dotenv

Environment Variables

The application requires the following environment variables to be set in a .env file:

`REACT_APP_API_KEY`

`REACT_APP_AUTH_DOMAIN`

`REACT_APP_PROJECT_ID`

`REACT_APP_STORAGE_BUCKET`

`REACT_APP_MESSAGING_SENDER_ID`

`REACT_APP_APP_ID`

`REACT_APP_MEASUREMENT_ID`
