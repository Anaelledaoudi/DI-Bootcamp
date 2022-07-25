-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

CREATE DATABASE dvdrental
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    
--     -EXERCISE 1
-- select * from item order by price
-- select * from item where price>=80 order by price desc 
-- select first_name, last_name from customers where custom_id<=3 order by first_name 
-- select last_name from customers order by last_name desc  
    
    
   ----------------------EXERCISE 2---------------------------
    
    --1
    select * from customer
    --2
    select (first_name, last_name) as full_name from customer
    --3
    select distinct create_date from customer
    --4
    select * from customer order by first_name desc
    --5
    select film_id,title,description,release_year,rental_rate 
    from film order by rental_rate asc
    --6
    select address,phone from address inner join customer 
    on address.address_id=customer.address_id where district='Texas'
    --7
    select * from film where film_id in(15,150)
    --8
    select film_id,title,description,length,rental_rate from film where title='Me Before You'
    --9
    select film_id,title,description,length,rental_rate from film where title like'Me%'
    --10
    select * from film order by replacement_cost asc limit 10
    --11-BONUS
    --12
    select customer_id,amount,payment_date from payment inner join customer on payment.customer_id=customer.customer_id order by customer_id asc
    --13
    select * from film inner join inventory on film.film_id=inventory.film_id where film.film_id!=inventory.film_id
    --14
    select city,country from city inner join country on city.country_id=country.country_id order by city.country_id
    --15 -BONUS