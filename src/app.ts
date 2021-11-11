import express from "express";
import { router } from "./routes/index";

export const app = express();

app.use(express.static(__dirname.replace("/src", "/public")));

app.use("/", router);

app.use((req, res) => {
  res.json({ msg: "not found" });
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err) {
      res.json({ msg: "something went wrong" });
    } else {
      next();
    }
  }
);
