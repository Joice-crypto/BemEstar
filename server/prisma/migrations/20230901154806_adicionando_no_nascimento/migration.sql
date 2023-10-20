-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" DATETIME,
    "githubId" INTEGER
);
INSERT INTO "new_Usuario" ("createdAt", "githubId", "id", "nascimento", "nome") SELECT "createdAt", "githubId", "id", "nascimento", "nome" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_githubId_key" ON "Usuario"("githubId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
