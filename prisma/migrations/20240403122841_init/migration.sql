/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Admin` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");

-- CreateRootUser
INSERT INTO "Admin" ("name", "password", "salt") VALUES ('root', '2de5375823e9bab76e4064784135e7ee12889fb106253a33b0b123ea8f031b11af3746bcafe7c1e7a19d987e5f51cf824e0090364d8b12c8e64519659cf25bdaab7e8a08a7b5749a674c01dd7152ff67384f3c9038bbd492daa0e8880a0cec8d287e7ee3247db242117bfc901be0b4d500a8933c2fc2e2c804c9d40a3045ad7f1d94f71cb3e953a349598e2f7c0a5c8d81609c292c49c273cf2078e7bd7bd9f77011e6bac02c7ec4a317e94c38481b491f0e10ef779ed88c7a25ab09bb7d6fddbd16f82f86b5d2b5fe6eed0cfa5b2d0bcaef334c4fa1bcfb88d17e6ad18b34fa7fef09a2bf10c6a283e1be85572f8551df57b8088bd5f80de43b188358442989', 'c1496e4fdf1aa12d015d04b56fab6b38');
