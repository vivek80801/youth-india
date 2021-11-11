import { Router } from "express";
import { getFlowers, getFlower } from "../controller/index";

export const router = Router();

router.get("/api/flowers", getFlowers);
router.get("/api/flower/:name", getFlower);
