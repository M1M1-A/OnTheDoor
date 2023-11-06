
# OnTheDoor

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

4. Install Node.js dependencies for both the `frontend` and `api` directories.

   ```
   ; cd api
   ; npm install
   ; cd ../frontend
   ; npm install
   ```

5. Install an ESLint plugin for your editor. For example: [`linter-eslint`](https://github.com/AtomLinter/linter-eslint) for Atom.

6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### How to run the server and use the app (as a human)

1. Start the server application (in the `api` directory)

   **Note the use of an environment variable for the JWT secret**

   ```
   ; cd api
   ; JWT_SECRET={secret} npm start
   ```

2. Start the front end application (in the `frontend` directory)

In a new terminal session...

```
; cd frontend
; npx expo start
```

### How to run automated tests

The automated tests run by sending actual HTTP requests to the API. Therefore, before anything, you'll need to start the backend server in test mode (so that it connects to the test DB).

```bash
; cd api

; JWT_SECRET={secret} npm run start:test
```

You should leave this running in a terminal.

Then, you can either run tests for the backend or the frontend following the steps below.

#### Running tests for the backend

Run the tests in a new terminal session:

```bash
; cd api

; JWT_SECRET={secret} npm run test
```

#### Running tests for the frontend

Start the front end in a new terminal session

```bash
; cd frontend

; JWT_SECRET={secret} npm start
```

Then run the tests in a new terminal session

```bash
; cd frontend

; JWT_SECRET={secret} npm run test
```
