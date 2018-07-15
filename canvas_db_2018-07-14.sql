# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.22)
# Database: canvas_db
# Generation Time: 2018-07-14 20:12:02 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Comments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Comments`;

CREATE TABLE `Comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) NOT NULL,
  `subject` text NOT NULL,
  `rating` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ProjectId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ProjectId` (`ProjectId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`ProjectId`) REFERENCES `Projects` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;

INSERT INTO `Comments` (`id`, `comment`, `subject`, `rating`, `createdAt`, `updatedAt`, `ProjectId`)
VALUES
	(1,'YAEG','Ballz Deep',3,'2018-06-28 20:36:02','2018-06-28 20:36:02',1),
	(2,'Blah blah blah','Best Drink Ever!!!',5,'2018-06-28 20:39:01','2018-06-28 20:39:01',2),
	(3,'most jusdhfusdhf9su','awes9je',3,'2018-06-29 14:01:00','2018-06-29 14:01:00',1);

/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Projects
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Projects`;

CREATE TABLE `Projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `rating` decimal(10,0) NOT NULL DEFAULT '0',
  `project_amount` int(11) NOT NULL DEFAULT '0',
  `project_goal` int(11) NOT NULL,
  `alcohol_content` decimal(10,0) NOT NULL,
  `ingredient_1` varchar(255) DEFAULT NULL,
  `ingredient_2` varchar(255) DEFAULT NULL,
  `ingredient_3` varchar(255) DEFAULT NULL,
  `ingredient_4` varchar(255) DEFAULT NULL,
  `ingredient_5` varchar(255) DEFAULT NULL,
  `ingredient_6` varchar(255) DEFAULT NULL,
  `ingredient_7` varchar(255) DEFAULT NULL,
  `ingredient_8` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Projects` WRITE;
/*!40000 ALTER TABLE `Projects` DISABLE KEYS */;

INSERT INTO `Projects` (`id`, `project_name`, `description`, `image_url`, `rating`, `project_amount`, `project_goal`, `alcohol_content`, `ingredient_1`, `ingredient_2`, `ingredient_3`, `ingredient_4`, `ingredient_5`, `ingredient_6`, `ingredient_7`, `ingredient_8`, `createdAt`, `updatedAt`, `UserId`)
VALUES
	(1,'RUM PUNCH','A Cocktail designed in collaboration with DRNXMYTH','https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/59cd455ac027d83dc88bfa22/1506625922388/Untitled_5.001.jpeg',5,7375,7500,2,'2.92 oz. Rum','1.1 oz. Lime Cold-Pressed','1.1 oz. Passionfruit Syrup','0.015 oz. Coconut-celery bitters',NULL,NULL,NULL,NULL,'2018-06-28 20:34:29','2018-07-12 12:46:12',1),
	(2,'EAST SIDE','Cocktail','https://static1.squarespace.com/static/581cd1f3c534a514915f9a4b/5a4c55df4192021bcbc447c0/5a4c55e0652dea72c883d812/1514952282808/cocktail%2Bcontent-1-04.jpg',4,4000,5000,2,'2.92 oz. Gin','1.2 oz. Cucumber-mint tincture','1.2 oz. Lime Cold-Pressed','0.15 oz. Cane sugar',NULL,NULL,NULL,NULL,'2018-06-28 20:34:29','2018-07-12 12:14:22',2),
	(3,'BOURBON\'S HONEY','Cocktail','https://static1.squarespace.com/static/581cd1f3c534a514915f9a4b/5a4c55df4192021bcbc447c0/5a4c55df71c10b82b8cfeeea/1514952162933/cocktail%2Bcontent-1-02.jpg',4,2500,5000,2,'3 oz. Bourbon','1.2 oz. Honey','1.2 oz. Lemon Cold-Pressed','0.3 oz. Orange bitters',NULL,NULL,NULL,NULL,'2018-06-28 20:34:29','2018-07-12 12:14:23',3),
	(4,'MARGARITA','Cocktail','https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/59cd380accc5c5d7076808b0/1506621482199/drink_with_image_d2d77740-48eb-4611-98fb-8718dc52d2e4.png',4,3500,4000,2,'3 oz. Mezcal','1.2 oz. Agave Nectar','1.2 oz. Lime Cold-Pressed','0.3 oz. Jalapeno Tincture',NULL,NULL,NULL,NULL,'2018-06-28 20:34:29','2018-07-12 12:25:15',4),
	(5,'ROOT BITTERS','Our friend Root Bitters is doing great things. Check him out','https://static1.squarespace.com/static/56f0874527d4bd8d42142dba/t/574e145859827e4b9291d0c6/1464734817320/IMG_6853.JPG?format=1000w',5,5000,7500,3,'Orange Bitters','Cardamon','Mace','Cinnamon',NULL,NULL,NULL,NULL,'2018-06-28 20:39:01','2018-07-12 12:45:51',5),
	(6,'SEND HAWK TO MEXICO','Projects','http://nyoobserver.files.wordpress.com/2014/11/casamigos-tequila-founders-george-clooney-rande-gerber_photo-credit_tyson-sadlo-3.jpg?quality=80&w=1920&strip',4,4000,5000,0,'Airfare','Hotels','Spirit','Bar Swag',NULL,NULL,NULL,NULL,'2018-06-28 20:39:01','2018-07-12 12:40:41',6),
	(7,'TBDE RECIPE BOOK','Book','https://cdn.shopify.com/s/files/1/2022/5731/products/spread_5_c5a58650-dec8-4e54-886b-8fb9e0e79b24_530x@2x.png?v=1495483461',4,2500,5000,0,'Book','Signed Book','Trip to meet the Authors','T-Shirt',NULL,NULL,NULL,NULL,'2018-06-28 20:39:01','2018-07-12 12:41:46',7),
	(8,'VDKAMISTA','Bar Swag','https://cdn.blessthisstuff.com/imagens/stuff/alkemista-alcohol-infusion-vessel.jpg',4,3500,4000,0,'Vessel','Copper Vessel','Black Finish','Matte',NULL,NULL,NULL,NULL,'2018-06-28 20:39:01','2018-07-12 13:11:01',1);

/*!40000 ALTER TABLE `Projects` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Transactions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Transactions`;

CREATE TABLE `Transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` decimal(10,0) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `about_me` text,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `instagram_handle` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;

INSERT INTO `Users` (`id`, `name`, `about_me`, `username`, `email`, `password`, `role`, `image_url`, `instagram_handle`, `createdAt`, `updatedAt`)
VALUES
	(1,'Jason Yu','Walks on the beach, for sure','mrgiggles','jason@thebestdrinkever.com','ballsdeep','drink_maker','https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/5a066cdf652deab98d16d9ba/1510370906936/jason_yu_jasonfyu_instagram_drnxmyth','@jasonfyu','2018-06-28 20:34:29','2018-06-28 20:34:29'),
	(2,'Amanda Colom','Bar beverage development, Social media influencer, Event cocktail execution, Social media marketing, Content creation','byebyebirdy','birdy@thebestdrinkever.com','birdsfly123','drink_maker','https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/5a065cd5f9619a1bb0c5fa84/1510366441057/amanda_colom_badbirdy_instagram_drnxmyth','@bad_birdy','2018-06-28 20:34:29','2018-06-28 20:34:29'),
	(3,'BarMax LA','Techno and all things German, small tiny cars, drinks','superforeignmaster','barmaxLA@thebestdrinkever.com','ballsdeep2','drink_maker','https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/t/5afce0ac70a6ad7647eec4af/1526522047250/barmax','@barmaxLA','2018-06-28 20:34:29','2018-06-28 20:34:29'),
	(4,'Celso Oliveira','I contribute to awesome projects','iamthebestdrinkever','celsoLA@thebestdrinkever.com','ballsdeepz','user','https://static1.squarespace.com/static/57478a207da24f0db50fe06a/58dedeefd482e91d99bb6f37/5b429b989c72bfd8ab930528/1531091880555/?format=500w','@celso21TBDE','2018-06-28 20:34:29','2018-07-12 12:34:18'),
	(5,'Root Bitters','Walks on the beach, for sure','rooty','root@thebestdrinkever.com','ballsdeep','drink_maker','https://static1.squarespace.com/static/56f0874527d4bd8d42142dba/56f2d2e2f699bb1f46091edd/5b3cf604fb2805943024ca36/1530721802407/?format=300w','@rootbitters','2018-06-28 20:39:01','2018-07-12 12:30:13'),
	(6,'Saeed Hawk','I live the dream','megusta','saeed@thebestdrinkever.com','birdsfly123','drink_maker','https://static1.squarespace.com/static/59cca93a32601e71f0d2abc9/5afb519b03ce64bcc7045e69/5afb52a6758d46e8cbc2bc03/1526420174099/DJS_1524+-+Cocktails+By+Hawk.jpg?format=750w','@cocktailsbyhawk','2018-06-28 20:39:01','2018-07-12 12:38:56'),
	(7,'Antonio Naranjo','Love me some Espana','megustamaschoco','ant@thebestdrinkever.com','ballsdeep2','drink_maker','https://pbs.twimg.com/profile_images/702111221051482112/lcDlMyBu_400x400.jpg','@bcn_antonio','2018-06-28 20:39:01','2018-07-12 12:48:27'),
	(8,'Rad Ant','I am Russian\n','russianmobster','cradant@thebestdrinkever.com','ballsdeepz','user','https://www.onlineartisthub.com/images/new/105.jpg','@rad_ant','2018-06-28 20:39:01','2018-07-12 12:54:06');

/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
