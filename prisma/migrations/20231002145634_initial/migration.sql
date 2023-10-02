-- CreateTable
CREATE TABLE "jogador" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jogador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "torneio" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "torneio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "confronto" (
    "id" SERIAL NOT NULL,
    "pontuacaoJ1" INTEGER NOT NULL DEFAULT 0,
    "pontuacaoJ2" INTEGER NOT NULL DEFAULT 0,
    "jogador1Id" INTEGER NOT NULL,
    "jogador2Id" INTEGER NOT NULL,
    "torneioId" INTEGER NOT NULL,

    CONSTRAINT "confronto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "confronto" ADD CONSTRAINT "confronto_jogador1Id_fkey" FOREIGN KEY ("jogador1Id") REFERENCES "jogador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "confronto" ADD CONSTRAINT "confronto_jogador2Id_fkey" FOREIGN KEY ("jogador2Id") REFERENCES "jogador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "confronto" ADD CONSTRAINT "confronto_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "torneio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
