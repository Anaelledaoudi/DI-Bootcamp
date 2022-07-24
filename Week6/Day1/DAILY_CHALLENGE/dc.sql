Database: Hollywood

DROP DATABASE IF EXISTS "Hollywood";

CREATE DATABASE "Hollywood"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    
    
    CREATE TABLE actors(
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR (20) NOT NULL,
    last_name VARCHAR (25) NOT NULL,
    birth_date DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
    )
    
  INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
  VALUES('Matt','Damon','1970-10-08',5);
    INSERT INTO actors (first_name,last_name,birth_date,number_oscars)
    VALUES('jennifer','lawrence','1970-10-08',5);
    INSERT INTO actors (first_name,last_name,birth_date,number_oscars)
    VALUES('gal','gadot','1970-10-08',3),
    ('ryan','goslin','1985-10-08',4),
    ('peter','pan','1999-10-08',1);
    
    SELECT * FROM actors  
    WHERE first_name ILIKE '%e%' AND number_oscars>=5
    ORDER BY last_name DESC
    LIMIT 4;
    
    select * from actors
    
    ------------DAILY CHALLENGE-------------------
    --count how many actors
    select COUNT(actor_id) from actors 
    
    insert into actors(first_name,last_name,birth_date,number_oscars)
    values('ana','aba')
    --its not possible because we didnt allowed null value when 
    --we created the table
    
    