import express, { Request, Response } from "express";

const router = express.Router();

router.get("/chooser", (req: Request, res: Response) => {
    return res.send("You Choose");
});

export { router as routerChooser };
