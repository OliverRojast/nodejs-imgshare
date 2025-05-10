import app from "./app";
import { PORT } from "./config";

// database
import "./config/mongoose";

// Starting the server
app.listen(3000);
console.log("Server on por", 3000);
