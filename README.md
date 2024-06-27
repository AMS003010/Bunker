# Bunker
Google Drive Clone built for an assignment for [Twospoon.ai](https://www.twospoon.ai/)

## Features
* Implemented `Google OAuth` for user authentication.
* Securely manage user sessions.
* Users can to Upload, View and Download files.
* Implemented RESTful APIs for file operations.
* Used `MongoDB` to store metadata about the files (e.g., filename, file path, user).
* Containarized both the `client` and `server` by adding `Dockerfiles` and `.dockerignore` files and incorporated `Multi-Stage Builds` to reduce the Image size.

### Prerequisites

1. `Node.js` for running server-side/client-side JavaScript. 

2. `MongoDB Atlas` to store data about user and file.

3. A `Firebase` account with firebase config details for the storage which will be used to store the user files.

4. `Google OAuth` Client-Id and Client-Secret for google oauth.

## Deployment Instructions

### Setting up `Firebase Storage`

We need to setup firebase storage which will be used for storing the files
* Create a project on [Firebase](https://firebase.google.com/) and chose name
* Select `Storage` and configer `Rules`
* Make a folder 'files/'

### Setting up `MongoDB Atlas`

We need to setup mongodb atlas which will be used for storing `User` and `File` information.
* Regsiter and create a project on [MongoDB Atlas]([https://firebase.google.com/](https://www.mongodb.com/cloud/atlas/register))
* Name the project and chose your provider, location for your cluster.
* Go to `Database Access` and click on `connect` to get the `connection string or MongoURI` for the `driver` nodejs
* Go to `Network Access` and select allow from anywhere

### Database Configuration
* `User` model stores details regarding to the user and the files belonging to that user
* `File` model stores details regarding to the file
  
### To run this project locally
1. Install [nodejs](https://nodejs.org/en)
2. Create a [mongodb atlas](https://www.mongodb.com/atlas/database) account and get your MONGODB URI
3. Create a [Firebase](https://firebase.google.com/) account and configer for storage.
4. Clone this repository and install the required packages using npm.


```
git clone https://github.com/AMS003010/Bunker.git
cd server
npm install
```

```
cd client
npm install
```

5. Create a .env file in the backend directory and add your MONGODB_URI and also a SECRET to hash your passwords.

```
PORT = 8000
REMOTE = http://localhost:3000

GOOGLE_CLIENT_ID =
GOOGLE_CLIENT_SECRET =

DATABASE=<MONGODB_URI>
DATABASE_PASSWORD=<PASSWORD>

JWT_SECRET=
JWT_TIMEOUT=90d
JWT_COOKIE_EXPIRES_IN=7776000000
```
6. Make a `firebase.js` file inside the `client/src` folder and add your firebase config details.

```
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    <config details>
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
```

7. From the root directory, run
```
cd server
npm start
```

9. Open another terminal and run
```
cd client
npm start
```

11. Then go to [localhost:3000](http://localhost:3000/).


## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) - The cloud database for modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [React](https://react.dev/) - The library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - This node-module helps to rapidly build modern websites without ever leaving your HTML.
- [Firebase Storage](https://firebase.google.com/)
