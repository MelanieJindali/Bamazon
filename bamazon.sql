CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("T-Shirt", 25, "Clothing", 100), ("Bananas", 1, "Groceries", 30), ("Lipstick", 5, "Cosmetics", 50), ("Laptop", 500, "Electronics", 25), ("Sandals", 10, "Shoes", 60), ("Pillows", 7, "Home", 35), ("Leggings", 15, "Clothing", 75), ("Bedsheets", 45, "Home", 50), ("TV", 600, "Electronics", 50), ("Mascara", 8, "Cosmetics", 25);