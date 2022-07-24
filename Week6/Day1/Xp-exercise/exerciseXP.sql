-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    
    CREATE TABLE item(
    item_id SERIAL PRIMARY KEY,
    product VARCHAR(50) NOT NULL,
    price INT NOT NULL
    )
    
    CREATE TABLE customers(
    custom_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
    )
    
    INSERT INTO item(product,price)
    VALUES('small desk',100),
          ('large desk',300),
          ('fan',80);
    
    
    INSERT INTO customers(first_name,last_name)
    VALUES('Greg','Jones'),
          ('Sandra','Jones'),
          ('Scott','Scott'),
          ('Trevor','Green'),
          ('Melanie','Johnson');
          
  --select item table
SELECT * FROM item
--select all items with price greather than 80
SELECT * FROM item WHERE price>80
--select all items with a price below = 300
SELECT * FROM item WHERE price<=300
--select all customers where last name=smith
SELECT * FROM customers WHERE last_name='Smith'
--the outcome is an empty table cause there is not such a name
--select all the customers which last name is jones
SELECT * FROM customers WHERE last_name='Jones'
--select all the customers that firstname is not scott
SELECT * FROM customers WHERE first_name!='Scott'


   
          
    
    