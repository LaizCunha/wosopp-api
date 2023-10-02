import { Router } from "express";
import { JogadorController } from "../controllers/jogadorController";

const jogadorRouter = Router();
const jogadorController = new JogadorController();

jogadorRouter.post("", (req, res) => { jogadorController.create(req, res); });
jogadorRouter.get("", (req, res) => { jogadorController.findAll(req, res); });
jogadorRouter.get("/:id", (req, res) => { jogadorController.findById(req, res) });
jogadorRouter.put("/:id", (req, res) => { jogadorController.update(req, res) });
jogadorRouter.delete("/:id", (req, res) => { jogadorController.delete(req, res) });

export { jogadorRouter };

