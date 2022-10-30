CREATE DATABASE `developer-shopping`;
USE `developer-shopping`;


 CREATE TABLE `developer-shopping`.`country` (
   `id` INT NOT NULL ,
   `name` varchar(50) NOT NULL,
   PRIMARY KEY (`id`)
  );
  
 CREATE TABLE `developer-shopping`.`departament` (
   `id` INT NOT NULL ,
   `idCountry` INT NOT NULL,
   `name` varchar(50) NOT NULL,
   PRIMARY KEY (`id`),
   CONSTRAINT `FK_departament_country` foreign key (`idCountry`)
	references `country`(`id`)
  );
  
CREATE TABLE `developer-shopping`.`city` (
	`id` INT NOT NULL,
    `name` varchar(60) NOT NULL,
    `status` INT NOT NULL,
    `idDepartament` int NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_city_departament` FOREIGN KEY (`idDepartament`)
    REFERENCES `departament`(`id`)
);

CREATE TABLE `developer-shopping`.`person` (
  `id` varchar(50) NOT NULL ,
  `nit` varchar(40) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address`varchar(200) NOT NULL,
  `cityId` int NOT NULL,
  `email` varchar(40) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_person_city` FOREIGN KEY (`cityId`)
  REFERENCES `city`(`id`)
  );
  
  CREATE TABLE `developer-shopping`.`user` (
	`id` varchar(50) NOT NULL ,
    `personId` varchar(50) NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `dateCreated` datetime NOT NULL,
     PRIMARY KEY (`id`),
     CONSTRAINT `FK_user_person` FOREIGN KEY (`personId`)
	REFERENCES `person`(`id`)
  );
  
   CREATE TABLE `developer-shopping`.`client` (
	`id` varchar(50) NOT NULL,
    `personId` varchar(50) NOT NULL,
    `dateCreated` datetime NOT NULL,
     PRIMARY KEY (`id`),
     CONSTRAINT `FK_client_person` FOREIGN KEY (`personId`)
	REFERENCES `person`(`id`)
  );
  
  CREATE TABLE `developer-shopping`.`order` (
	`id` varchar(50) NOT NULL ,
    `userId` varchar(50) NULL,
    `clientId` varchar(50) NULL,
    `total` numeric NOT NULL,
    `dateCreated` datetime NOT NULL,
     PRIMARY KEY (`id`),
      CONSTRAINT `FK_order_client` FOREIGN KEY (`clientId`)
	REFERENCES `client`(`id`),
      CONSTRAINT `FK_order_user` FOREIGN KEY (`userId`)
	REFERENCES `user`(`id`)
  );
  
CREATE TABLE `developer-shopping`.`product` (
  `id` varchar(50) NOT NULL ,
  `name` varchar(100) NOT NULL,
  `price` numeric NOT NULL,
  `imageUrl` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `developer-shopping`.`productOrders` (
  `id` varchar(50) NOT NULL,
  `productId` varchar(50) NOT NULL,
  `orderId` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
   CONSTRAINT `FK_productOrders_product` FOREIGN KEY (`productId`)
   REFERENCES `product`(`id`),
   CONSTRAINT `FK_productOrders_order` FOREIGN KEY (`orderId`)
   REFERENCES `order`(`id`)
);

CREATE TABLE `developer-shopping`.`category` (
	`id` varchar(50) NOT NULL,
    `name` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `developer-shopping`.`categoryProduct` (
  `id` varchar(50) NOT NULL,
  `productId` varchar(50) NOT NULL,
  `categoryId` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
   CONSTRAINT `FK_categoryProduct_product` FOREIGN KEY (`productId`)
   REFERENCES `product`(`id`),
   CONSTRAINT `FK_categoryProduct_category` FOREIGN KEY (`categoryId`)
   REFERENCES `category`(`id`)
);

CREATE TABLE `developer-shopping`.`inventory` (
	`id` varchar(50) NOT NULL,
	`productId` varchar(50) NOT NULL,
	`quantity` INT NOT NULL,
     PRIMARY KEY (`id`),
      CONSTRAINT `FK_inventory_product` FOREIGN KEY (`productId`)
	  REFERENCES `product`(`id`)
);



// Posgressql

CREATE TABLE country (
   "id" INT NOT NULL ,
   "name" varchar(50) NOT NULL,
   PRIMARY KEY ("id")
  );
  
 CREATE TABLE departament (
   "id" INT NOT NULL ,
   "idCountry" INT NOT NULL,
   "name" varchar(50) NOT NULL,
   PRIMARY KEY ("id"),
   CONSTRAINT "FK_departament_country" foreign key ("idCountry")
	references "country"("id")
  );
  
CREATE TABLE city (
	"id" INT NOT NULL,
    "name" varchar(60) NOT NULL,
    "status" INT NOT NULL,
    "idDepartament" int NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT "FK_city_departament" FOREIGN KEY ("idDepartament")
    REFERENCES "departament"("id")
);

CREATE TABLE person (
  "id" varchar(50) NOT NULL ,
  "nit" varchar(40) NOT NULL,
  "name" varchar(100) NOT NULL,
  "address"varchar(200) NOT NULL,
  "cityId" int NOT NULL,
  "email" varchar(40) NOT NULL,
  "phoneNumber" varchar(20) NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_person_city" FOREIGN KEY ("cityId")
  REFERENCES "city"("id")
  );
  
  CREATE TABLE "user" (
	"id" varchar(50) NOT NULL ,
    "personId" varchar(50) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "dateCreated" TIMESTAMP NOT NULL,
     PRIMARY KEY ("id"),
     CONSTRAINT "FK_user_person" FOREIGN KEY ("personId")
	REFERENCES "person"("id")
  );
  
   CREATE TABLE client (
	"id" varchar(50) NOT NULL,
    "personId" varchar(50) NOT NULL,
    "dateCreated" TIMESTAMP NOT NULL,
     PRIMARY KEY ("id"),
     CONSTRAINT "FK_client_person" FOREIGN KEY ("personId")
	REFERENCES "person"("id")
  );
  
  CREATE TABLE "order" (
	"id" varchar(50) NOT NULL ,
    "userId" varchar(50) NULL,
    "clientId" varchar(50) NULL,
    "total" numeric NOT NULL,
    "dateCreated" TIMESTAMP NOT NULL,
     PRIMARY KEY ("id"),
      CONSTRAINT "FK_order_client" FOREIGN KEY ("clientId")
	REFERENCES "client"("id"),
      CONSTRAINT "FK_order_user" FOREIGN KEY ("userId")
	REFERENCES "user"("id")
  );
  
CREATE TABLE product (
  "id" varchar(50) NOT NULL ,
  "name" varchar(100) NOT NULL,
  "price" numeric NOT NULL,
  "imageUrl" varchar(200) NOT NULL,
  PRIMARY KEY ("id")
);

CREATE TABLE productOrders (
  "id" varchar(50) NOT NULL,
  "productId" varchar(50) NOT NULL,
  "orderId" varchar(50) NOT NULL,
  PRIMARY KEY ("id"),
   CONSTRAINT "FK_productOrders_product" FOREIGN KEY ("productId")
   REFERENCES "product"("id"),
   CONSTRAINT "FK_productOrders_order" FOREIGN KEY ("orderId")
   REFERENCES "order"("id")
);

CREATE TABLE category (
	"id" varchar(50) NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE categoryProduct (
  "id" varchar(50) NOT NULL,
  "productId" varchar(50) NOT NULL,
  "categoryId" varchar(50) NOT NULL,
  PRIMARY KEY ("id"),
   CONSTRAINT "FK_categoryProduct_product" FOREIGN KEY ("productId")
   REFERENCES "product"("id"),
   CONSTRAINT "FK_categoryProduct_category" FOREIGN KEY ("categoryId")
   REFERENCES "category"("id")
);

CREATE TABLE inventory (
	"id" varchar(50) NOT NULL,
	"productId" varchar(50) NOT NULL,
	"quantity" INT NOT NULL,
     PRIMARY KEY ("id"),
      CONSTRAINT "FK_inventory_product" FOREIGN KEY ("productId")
	  REFERENCES "product"("id")
);

  


