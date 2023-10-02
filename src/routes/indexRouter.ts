import { Router } from "express";
import { jogadorRouter } from "./jogadorRouter";

const router = Router();

router.use('/jogador', jogadorRouter);

export { router };
