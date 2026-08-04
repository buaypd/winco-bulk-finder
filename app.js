import express from 'express';
import homeRouter from './routes/home.routes.js';
import productRouter from './routes/product.routes.js';

// configure Express.js app
const app = express();

//static directories
app.use(express.static('public'));
app.use(express.json());
app.use("/", homeRouter);
app.use("/products", productRouter);


app.set("views", "views");
app.set("view engine", "ejs");

export default app;