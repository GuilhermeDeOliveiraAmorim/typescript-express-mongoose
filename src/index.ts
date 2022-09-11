import { json } from "body-parser";
import express from "express";
import { routerChooser } from "./routes/router-chooser";

const app = express();
app.use(json());
app.use(routerChooser);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening in http://localhost:${port}`);
});
