-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

CREATE DATABASE bootcamp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    
    CREATE TABLE student(
        students_id SERIAL PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        birth_date DATE NOT NULL
    )
    
    INSERT INTO student(first_name,last_name,birth_date)
    VALUES ('Marc','Benichou',DATE('1998-11-02')),
           ('Yoan','Cohen',DATE('2010-12-03')),
           ('Lea','Benichou',DATE('1987-07-27')),
           ('Amelia','Dux',DATE('1996-04-07')),
           ('David','Grez',DATE('2003-06-14')),
           ('Omer','Simpson',DATE('1980-10-03')),
           ('Anaelle','Daoudi',DATE('2001-04-03'));
    
   
    
    --1 all the table data:
    select * from student
    --2 first name- last name of all
    select first_name,last_name from student
    --3-1-id =2
    select first_name,last_name from student
    where students_id=2
    --3-2-marc benichou select
    select first_name,last_name from student
    where first_name='Marc' and last_name='Benichou'
    --3-3- last name benichou or fname=marc
    select first_name,last_name from student
    where first_name='Marc' or last_name='Benichou'
    --3-4 fname contain a
    select first_name,last_name from student
    where first_name LIKE '%a%'
    --3-5 fname starts with a
    select first_name,last_name from student
    where first_name LIKE 'A%'
    --3-6 fname ends with a
    select first_name,last_name from student
    where first_name LIKE '%a'
    --3-7 fname second from last letter is a
    select first_name,last_name from student
    where first_name LIKE '%a_'
    --3-8 id equal to 1 and 3
    select first_name,last_name from student
    where students_id=1 or students_id=3
    
    --4 all student that birth=> 1/01/2000
    select * from student
    where birth_date>='2000-01-01'
    
    