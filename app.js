import express from 'express';
import homeRouter from './routes/home.routes.js';

// configure Express.js app
const app = express();

//static directories
app.use(express.static('public'));
app.use(express.json());
app.use("/", homeRouter);



// app.set("views", "src/views");

// What does this do??
// app.use(express.urlencoded({ extended: true }));

//view engine
// app.set("view engine", "ejs");
// app.set("views", "src/views");


// Front-End Routes
// app.use("/", );

// Back-End Routes
//app.use("/");

export default app;