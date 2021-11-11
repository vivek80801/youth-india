import { Request, Response } from "express";
import { flowers } from "../modal/data";

export const getFlowers = (req: Request, res: Response) => {
  res.json(flowers);
};

export const getFlower = (req: Request, res: Response) => {
  const flower = flowers.find((flo) => req.params.name === flo.name);
  if (flower !== undefined) {
    res.json(flower);
  } else {
    res.json({ msg: "not found" });
  }
};
