import express from 'express';

// configure Express.js app
const app = express();

//static directories
app.use(express.static('public'));
app.use(express.json());

// What does this do??
// app.use(express.urlencoded({ extended: true }));

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");


// Front-End Routes
//app.use("/");

// Back-End Routes
//app.use("/");

export default app;