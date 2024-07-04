/*
  Warnings:

  - You are about to drop the column `label` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `Technology` table. All the data in the column will be lost.
  - Added the required column `label_cs` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label_en` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label_cs` to the `Technology` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label_en` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "label",
ADD COLUMN     "label_cs" TEXT NOT NULL,
ADD COLUMN     "label_en" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "label",
ADD COLUMN     "label_cs" TEXT NOT NULL,
ADD COLUMN     "label_en" TEXT NOT NULL;
