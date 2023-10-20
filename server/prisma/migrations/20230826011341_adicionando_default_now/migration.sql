-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sono" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "inicio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fim" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avaliacao" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Sono_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sono" ("avaliacao", "fim", "id", "inicio", "usuarioId") SELECT "avaliacao", "fim", "id", "inicio", "usuarioId" FROM "Sono";
DROP TABLE "Sono";
ALTER TABLE "new_Sono" RENAME TO "Sono";
CREATE TABLE "new_Humor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quando" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "humor" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Humor_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Humor" ("humor", "id", "quando", "usuarioId") SELECT "humor", "id", "quando", "usuarioId" FROM "Humor";
DROP TABLE "Humor";
ALTER TABLE "new_Humor" RENAME TO "Humor";
CREATE TABLE "new_AtividadeFisica" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "quando" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descricao" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "AtividadeFisica_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AtividadeFisica" ("descricao", "id", "nome", "quando", "usuarioId") SELECT "descricao", "id", "nome", "quando", "usuarioId" FROM "AtividadeFisica";
DROP TABLE "AtividadeFisica";
ALTER TABLE "new_AtividadeFisica" RENAME TO "AtividadeFisica";
CREATE TABLE "new_Alimentacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fotoUrl" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "quando" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Alimentacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Alimentacao" ("fotoUrl", "id", "nome", "quando", "usuarioId") SELECT "fotoUrl", "id", "nome", "quando", "usuarioId" FROM "Alimentacao";
DROP TABLE "Alimentacao";
ALTER TABLE "new_Alimentacao" RENAME TO "Alimentacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
