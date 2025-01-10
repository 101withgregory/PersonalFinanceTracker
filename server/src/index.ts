import express, { Express } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import financialRecordRouter from "./routes/financial-records"

const app: Express = express();
const port = process.env.PORT || 3001;


app.use(express.json());

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("Error: MONGO_URI is not defined in environment variables.");
  process.exit(1); 
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

app.use('/financial-records', financialRecordRouter);

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
