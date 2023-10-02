import { prismaClient } from "../database/prismaClient";

class JogadorModel {
  public async findAll() {
    console.log("b");
    const jogadores = await prismaClient.jogador.findMany();
    return jogadores;
  }

  public async findById(id: number) {
    const jogador = await prismaClient.jogador.findUnique({
      where: { id }
    });
    return jogador;
  }

  /**
   * Cria um jogador no banco de dados.
   * @param id Identificador único do jogador.
   * @param nome Nome completo do jogador.
   * @param nascimento Data de nascimento do jogador.
   * @returns Retorna o jogador salvo no banco de dados.
   */
  public async create(id: number, nome: string, nascimento: string) {
    const jogador = await prismaClient.jogador.create({
      data: {
        id,
        nome,
        nascimento
      }
    });
    return jogador;
  }

  public async update(id: number, nome: string, nascimento: string) {
    const jogador = await prismaClient.jogador.update({
      where: { id },
      data: {
        nome,
        nascimento
      }
    });
    return jogador;
  }

  public async delete(id: number) {
    await prismaClient.jogador.delete({
      where: { id }
    });
  }
}

export { JogadorModel };