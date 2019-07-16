DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  deparment_name VARCHAR (45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, deparment_name, price, stock_quantity)
VALUES ("chocolate", "TJ's", 2.50, 100), ("bananas", "TJ's", 0.20, 50), ("USB charger", "Best Buy", 10.50, 50), ("water bottle", "Earth", 19.50, 30), ("pottery", "HLI", 10.00, 50),("cactus", "Nursery", 4.00, 20),("bananas", "TJ's", 0.20, 50),("bananas", "TJ's", 0.20, 50),("bananas", "TJ's", 0.20, 50);