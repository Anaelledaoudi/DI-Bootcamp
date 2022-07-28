-- Database: product

-- DROP DATABASE IF EXISTS product;

CREATE DATABASE product
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    
    create table product_orders(
       prod_order_id serial primary key,
       date_sell date,
       prod_id integer references items(prod_id) on delete cascade on update cascade
    )
     create table items(
       prod_id serial primary key,
       prod_name varchar(50),
       price integer
    )
    select sum(price) from items inner join product_orders 
    on items.prod_id=product_orders.prod_id
    