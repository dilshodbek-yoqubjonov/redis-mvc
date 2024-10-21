import express, { Application } from "express";
import dotenv from "dotenv";
import router from "./routes";
import path from "path";
import cookieParser from 'cookie-parser';
import { ErrorHandlerMiddleware } from "@middlewares";
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(router);

app.use("/*", ErrorHandlerMiddleware.errorHandlerMiddleware);

let PORT = process.env.APP_PORT || 8000;
app.listen(PORT, () => {
  console.log(PORT);
});
