-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Alimentacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fotoUrl" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "quando" DATETIME NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Alimentacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Sono" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "inicio" DATETIME NOT NULL,
    "fim" DATETIME NOT NULL,
    "avaliacao" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Sono_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AtividadeFisica" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "quando" DATETIME NOT NULL,
    "descricao" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "AtividadeFisica_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Humor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quando" DATETIME NOT NULL,
    "humor" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Humor_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
