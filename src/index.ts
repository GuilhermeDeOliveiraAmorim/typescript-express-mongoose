import { json } from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { env } from "../env";
import { routerChooser } from "./routes/router-chooser";

const app = express();
app.use(json());
app.use(routerChooser);

const urlConnection =
    "mongodb+srv://" +
    env.DB_HOST +
    ":" +
    env.SECRET_KEY +
    "@" +
    env.DB_CLUSTER +
    "/" +
    env.DB_DATA;

mongoose.connect(urlConnection);

const db = mongoose.connection;

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
    console.log("Database connection established");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening in http://localhost:${port}`);
});
