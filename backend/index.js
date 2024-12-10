
import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";
import bookRoute from "./Routes/book.route.js"
import userRoute from "./Routes/user.route.js"
import paymentController from "../backend/Controller/paymentController.js"
import cors from "cors";
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4001;
const URI =process.env.mongoDBURI;

// Connection to mongoDB Compass

try {
    mongoose.connect(URI, {
        useUnifiedTopology : true,
        useNewurlParser : true,
    });
    console.log("Connected to mongoDB");
    
} catch (error) {
    console.log("Error :" , error);
    
}

// Payment Verification
app.post('/orders', paymentController.orders)
app.post('/verify', paymentController.verify)

// Defining Routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})