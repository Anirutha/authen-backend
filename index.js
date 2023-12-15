import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import { usersRouter } from "./Routers/users.js";

dotenv.config();
const app = express();
const PORT = 9000;

app.use(express.json());
app.use(cors());
app.use("/users", usersRouter)

app.listen(9000, () => console.log(`Server started in localhost:9000`));