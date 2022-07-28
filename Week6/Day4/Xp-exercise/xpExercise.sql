-- Database: hr.backup

-- DROP DATABASE IF EXISTS "hr.backup";

CREATE DATABASE "hr.backup"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
   --1)Basic Select Statement
   select first_name as FirstName, last_name as LastName
   from employees
   select distinct department_id from employees
   select * from employees order by first_name desc
   select first_name,last_name,salary,(salary*15/100)as pf from employees
   select employees_id,first_name,last_name,salary order by salary asc
   select sum(salary) from employees
   select max(salary),min(salary) from employees
   select avg(salary) from employees
   select count(employee_id) from employees
   select upper(first_name) from employees 
   select substr(first_name,1,3) from employees
   select (first_name,last_name) as fullName from employees
   select first_name,last_name,(length(first_name)+length(last_name)) from employees
   --select isnumeric(first_name) from employees
   select * from employees limit 10
  --2) Restricting And Sorting 
  select first_name, last_name,salary from employees where salary between 10,000 and 15,000
  select first_name, last_name,hire_date from employees where extract (year from hire_date)=1987
  select * from employees where first_name ilike '%c%' and first_name ilike '%e%'
  select last_name, jobs.job_title, salary from employees inner join jobs
  on employees.job_id=jobs.job_id where (job_title='Programmers' or job_title='Shipping Clerks')
  and (salary!=4500 or salary!=10000 or salary!=15000)
  select last_name from employees where length(last_name)=6
  select last_name from employees where last_name ilike '__e%'
  select job_title from jobs right join employees
  on employees.job_id=jobs.job_id
  select * from employees where last_name in('Jones','Blake','Scott','King','Ford')