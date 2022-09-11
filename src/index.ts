import { json } from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { routerChooser } from "./routes/router-chooser";

const app = express();
app.use(json());
app.use(routerChooser);

const DB_HOST = "guilhermeamorim";
const SECRET_KEY = "rJTUXt7iKn5rr!6";
const DB_CLUSTER = "cluster0.5zfqrm3.mongodb.net";
const DB_DATA = "alura-node";

const urlConnection =
    "mongodb+srv://" +
    DB_HOST +
    ":" +
    SECRET_KEY +
    "@" +
    DB_CLUSTER +
    "/" +
    DB_DATA;

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
