import 'dotenv/config';
import app from "./app.js";

const port = process.env.PORT || 3050;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})