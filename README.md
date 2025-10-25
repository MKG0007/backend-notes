
https://pplx.ai/mg25808745682
# backend-notes

# 🧠 JavaScript Basics Before Starting Backend
---

## 📦 Array in JavaScript
In JavaScript, an array can hold **all datatypes** — both primitive and user-defined.

### 🔹 Important Array Methods

#### 1️⃣ forEach()
Used to access all array elements and perform actions.  
➡️ Does **not** return a new array.

```js
arr.forEach(function(val) {
  console.log(val + ' hello');
});
```

#### 2️⃣ map()
Applies modifications to all elements and returns a **new modified array**.  
➡️ Original and updated arrays have the same number of elements.

```js
let arr = arr.map(function(val) {
  return val + 12;
});
```

#### 3️⃣ filter()
Used to filter elements based on a condition.  
➡️ Returns the filtered elements as a **new array**.

```js
let arr = arr.filter(function(val) {
  if (val % 2 == 0) return val;
});
```

---

## 🧾 Objects in JavaScript
Objects are **collections of key–value pairs**.

```js
let obj = {
  age: 20,
  name: "mayank"
};

// Update value
obj.name = "kumar";
```

To prevent changes:
```js
Object.freeze(obj);
```

After freezing, no new properties can be added or modified.

---

## ⏱️ Synchronous vs Asynchronous

- **Synchronous:** Executes **line by line**.
- **Asynchronous:** Runs in the **background** (side stack) while synchronous code continues.

### Example:
```js
async function fetchData() {
  await fetch(`https://example.com`);
}
```

---

# ⚙️ Node.js
Node.js is a **JavaScript runtime environment** built on the **V8 engine (C++)**.

### 🧩 Setup
Create a `package.json` file:
```bash
npm init
# or skip questions
npm init -y
```

---

## 📁 File System Module (fs)
```js
const fs = require('fs');
```

### ✏️ Create or Overwrite File
```js
fs.writeFile("hey.txt", "hey hello kaise ho", function(err) {
  if (err) console.log("error");
  else console.log("done");
});
```

### ➕ Append Data
```js
fs.appendFile("hey.txt", " i am mayank kumar gupta", function(err) {
  if (err) console.log("error");
  else console.log("done");
});
```

### 📝 Rename File
```js
fs.rename("oldfilename.txt", "newfilename.txt", function(err) {
  if (err) console.log("there is some problem");
  else console.log("all done");
});
```

### 📋 Copy File
```js
fs.copyFile("hello.txt", "yoho.txt", function(err) {
  if (err) console.error(err.message);
  else console.log("all done");
});
```

### ❌ Delete File
```js
fs.unlink("yoho.txt", function(err) {
  if (err) console.error(err);
  else console.log("file is removed");
});
```

### 🗂️ Remove Folder
```js
fs.rmdir("./copy", { recursive: true }, function(err) {
  if (err) console.error(err.message);
  else console.log("folder removed");
});
```
> ✅ Prefer using `fs.rm()` for non-empty folders.

---

## 🌐 HTTP Module
Used to create servers and handle requests.

```js
const http = require('http');

const server = http.createServer(function(req, res) {
  res.end("Hello World");
});

server.listen(3000);
```

---

## 📦 npm (Node Package Manager)

### Install a Package
```bash
npm i package_name
```

### Uninstall
```bash
npm uninstall package_name
```

### Install Specific Version
```bash
npm install package_name@version
```

### 📂 Dependencies
- **dependencies** → Used in production.
- **devDependencies** → Used only during development.

### 🧰 Scripts
- Default script: `npm start`
- Custom script: `npm run script_name`

---

## 🏗️ Framework vs Library
- **Framework** → Follows a defined flow/rules.
- **Library** → Offers tools; developer decides the flow.

---

# 🚀 Express.js Framework
Express.js is a **Node.js framework** for handling requests and responses efficiently.

### ⚙️ Setup
```bash
npm i express
npm i nodemon -g
```

### Basic Server
```js
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware Example
app.use(function(req, res, next) {
  console.log("Middleware executed");
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World and Mayank');
});

app.get('/profile', (req, res) => {
  res.send('Champion I am Mayank');
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function() {
  console.log("Server running on port 3000");
});
```

---

## 🧩 Middleware
Middleware runs **before routing**, often used for:
- Authentication
- Request modification
- Logging

Example use case:
Add user details before sending a request for faster response.

---

## 🍪 Cookies and Sessions

- **Cookie:** Stores user info on the client-side.
- **Session:** The duration during which the user is logged in (managed using cookies).

When data is sent to a server, it's often in **blob format** — which must be parsed to readable data.

---

# 🧱 Small Project Steps
1. Initialize the project (`npm init -y`)
2. Install Express (`npm i express`)
3. Setup routes and middleware
4. Test using browser or Postman

---

# 🗄️ Backend Structure

A backend typically has **two servers**:
1. **Application Server** – Handles routing and logic.
2. **Database Server** – Handles data operations.

---

## 🗃️ Databases
Where user data is stored.

### Types:
1. **SQL** – Structured data in tables.
2. **NoSQL (e.g., MongoDB)** – Data stored as objects.

### 🧩 MongoDB Hierarchy:
```
Database → Collection → Document
```

| Code (Mongoose)        | Database Equivalent |
|------------------------|---------------------|
| `mongoose.connect()`   | Create Database     |
| `Model.create()`       | Create Document     |
| `Model`                | Represents Collection |

---

✅ **You’re now ready to start backend development with JavaScript, Node.js, and Express.js!**
