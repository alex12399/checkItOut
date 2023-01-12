CREATE TABLE `coding_challenge_schema`.`jobs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` INT NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `coding_challenge_schema`.`jobs` 
ADD COLUMN `uuid` VARCHAR(45) NOT NULL AFTER `status`;
