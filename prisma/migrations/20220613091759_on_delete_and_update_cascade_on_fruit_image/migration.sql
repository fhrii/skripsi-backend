-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_fruitId_fkey`;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_fruitId_fkey` FOREIGN KEY (`fruitId`) REFERENCES `Fruit`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
