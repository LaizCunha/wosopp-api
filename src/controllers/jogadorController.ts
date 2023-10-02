import { Request, Response } from "express";
import { JogadorModel } from "../models/jogadorModel";
import { StatusCodes } from "http-status-codes";


class JogadorController {
  private jogadorModel: JogadorModel;

  constructor() {
    this.jogadorModel = new JogadorModel();
  }

  public async create(req: Request, res: Response) {
    try {
      const { id, nome, nascimento } = req.body;
      const jogador = await this.jogadorModel.create(id, nome, nascimento);
      return res.status(StatusCodes.CREATED).json(jogador);
    } catch (e) {
      console.log(e.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Falha ao criar novo jogador.' });
    }
  }

  public async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const jogador = await this.jogadorModel.findById(parseInt(id));
      return res.status(StatusCodes.OK).json(jogador);
    } catch (e) {
      console.log(e.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Falha ao buscar jogador pelo id.' });
    }
  }

  public async findAll(req: Request, res: Response) {
    try {
      const jogadores = await this.jogadorModel.findAll();
      return res.status(StatusCodes.OK).json(jogadores);
    } catch (e) {
      console.log(e.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Falha ao buscar lista de jogadores.' });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { nome, nascimento } = req.body;
      const jogador = await this.jogadorModel.update(parseInt(id), nome, nascimento);

      return res.status(StatusCodes.OK).json(jogador);
    } catch (e) {
      console.log(e.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Falha ao atualizar dados do jogador.' });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      this.jogadorModel.delete(parseInt(id));

      return res.status(StatusCodes.OK).json({ message: 'Jogador excluído com sucesso.' });

    } catch (e) {
      console.log(e.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Falha ao excluir jogador.' });
    }
  }

}

export { JogadorController };