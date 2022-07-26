-- Database: Sell

-- DROP DATABASE IF EXISTS "Sell";

CREATE DATABASE "Sell"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    --------part 1----------------------
   --1 
    create table customer(
    cust_id serial primary key,
    first_name varchar(50),
    last_name varchar(50) not null
    )
    create table customerProfile(
    cust_profil_id serial primary key,
    isLoggedIn boolean default false,
    cust_id integer unique references customer(cust_id) on delete cascade on update cascade 
    )
    --2
    insert into customer(first_name,last_name)
    values('John', 'Doe'),
          ('Jerome', 'Lalu'),
          ('Lea', 'Rive');
    --3
    insert into customerProfile(isLoggedIn,cust_id)
    values(true,(select cust_id from customer where first_name='John')),
          (false,(select cust_id from customer where first_name='Jerome'))
    --4
    select first_name from customer 
    inner join customerProfile on customer.cust_id=customerProfile.cust_id
    where isLoggedIn=false
    
    select first_name, isLoggedIn from customer
    left join customerProfile
    on customer.cust_id=customerProfile.cust_id
    
    select count(first_name) from customer
    inner join customerProfile 
    on customer.cust_id=customerProfile.cust_id
    where isLoggedIn=false
    
---------------part 2------------------------
--1
create table book(
book_id SERIAL PRIMARY KEY,
title varchar(50) NOT NULL, 
author varchar(50) NOT NULL
)
--2
insert into book(title,author)
values('Alice In Wonderland', 'Lewis Carroll'),
      ('Harry Potter', 'J.K Rowling'),
      ('To kill a mockingbird', 'Harper Lee');
--3
create table student(
student_id SERIAL PRIMARY KEY,
name varchar(50)NOT NULL UNIQUE,
age integer check(age<15)
)
--4
insert into student(name,age)
values('John', 12),
      ('Lera', 11),
      ('Patrick', 10),
      ('Bob', 14);
--5
create table library(
book_fk_id integer references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
student_id integer references student(student_id)ON DELETE CASCADE ON UPDATE CASCADE,
borrowed_date date,
pair_key serial primary key
)
--6
insert into library(book_fk_id,student_id,borrowed_date)
values((select book_id from book where title='Alice In Wonderland'),(select student_id from student where name='John'),'2022-02-15'),
      ((select book_id from book where title='To kill a mockingbird '),(select student_id from student where name='Bob'),'2021-03-13'),
      ((select book_id from book where title='Alice In Wonderland'),(select student_id from student where name='Lera'),'2021-05-23'),
      ((select book_id from book where title='Harry Potter'),(select student_id from student where name='Bob'),'2021-08-12')
--7
--
select * from library
--
select student.name,book.title from library
inner join student on student.student_id=library.student_id
inner join book on book.book_id=library.book_fk_id 
--
select avg(student.age)from library
inner join student on student.student_id=library.student_id
inner join book on book.book_id=library.book_fk_id
where book.title='Alice In Wonderland'
--
delete from student where name='Bob'
--delete him there too 
     
     

    