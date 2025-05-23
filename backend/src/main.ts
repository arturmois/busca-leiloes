import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(3001, '0.0.0.0', () => {
    console.log("Server is running on port 3001");
});