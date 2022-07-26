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
    
    
    
    
    -------------day3-----------------------------------------
    
    select * from language
    --1
    select name from language
    --2
    select title, description, language.name from film left join language on film.language_id=language.language_id
    select title, description, language.name from film right join language on film.language_id=language.language_id
    --3
    create table new_film(
    new_film_id serial primary key,
    name varchar(50)
    )
    insert into new_film(name)
    values('me before you'),
          ('jumanji'),
          ('turning red'),
          ('emily in paris');
    --4
    create table customer_review(
    review_id serial primary key,
    film_id integer references new_film (new_film_id) on delete cascade on update cascade,
    language_id integer references language (language_id) on delete cascade on update cascade,
    review_title varchar(50),
    score integer,
    review_text varchar,
    last_update date   
    )
    --5
    insert into customer_review(film_id,language_id,review_title,score,review_text,last_update)
    values((select new_film_id from new_film where name='emily in paris'),(select language_id from language where name='French'),'cute',95,'good acting in an amazing paris','2022-04-03'),
          ((select new_film_id from new_film where name='jumanji'),(select language_id from language where name='English'),'fun',80,'really fun in adventourus jungle','2018-04-20')
   --6
   delete from new_film where name='jumanji'
   --delete the review of the movie too because of the cascade
    
    -----------------EXERCISE 2-----------------------------
   --1
    update film
    set language_id=(select language_id from language where name='French')
    where title like 'A%'
    --2
    --store_id,address_id because we cant reach the id and write it 
    --this way, we have to get from the others table(where is thats primary key)
    --and from there get the id that we going to assisgn in the customer table
    
    --3
    drop table customer_review
    --4
    select count(*) from rental where return_date=null
    --5------
    --select title from film inner join rental on where return_date='' order by 
    --6
    --1-first film
    select title from film_actor
    inner join film on film.film_id=film_actor.film_id
    inner join actor on actor.actor_id=film_actor.actor_id
    where description ilike '%sumo wrestler%' and actor.first_name='Penelope'
    and last_name='Monroe'
    --2-second film
   select title from film_category 
   inner join category on film_category.category_id=category.category_id
   inner join film on film_category.film_id=film.film_id
   where rating='R' and length<60 and category.name='Documentary'
    --3-third film 
    select * from payment
    select title from inventory 
    inner join film on film.film_id=inventory.film_id
    inner join rental on rental.inventory_id=inventory.inventory_id
    inner join customer on customer.customer_id=rental.customer_id
   -- inner join payment on customer.customer_id=payment.customer_id
    where customer.first_name='Matthew' and last_name='Mahan'
    and (rental.return_date<'2005-08-1' and rental.return_date>'2005-07-28')
    and payment.amount>4.00
    --4-fourth film
    select title from inventory
    inner join film on film.film_id=inventory.film_id
    inner join rental on rental.inventory_id=inventory.inventory_id
    inner join customer on customer.customer_id=rental.customer_id
   where customer.first_name='Matthew' and last_name='Mahan' and
    (film.title ilike '%boat%' or film.description ilike '%boat%')
    
    
          
          
          