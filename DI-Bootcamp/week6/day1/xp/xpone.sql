-- select * from items

-- create table customers (
-- 	id serial primary key,
-- 	first_name varchar (100) not null,
-- 	last_name varchar (100) not null
-- )

-- select * from customers

-- insert into items (name, price) values ('large desk', 300);
-- insert into items (name, price) values ('fan', 80);


-- select * from items

insert into customers (first_name, last_name) values ('Greg', 'Jones');
insert into customers (first_name, last_name) values ('Sandra', 'Jones');
insert into customers (first_name, last_name) values ('Scott', 'Scott');
insert into customers (first_name, last_name) values ('Trevor', 'Green');
insert into customers (first_name, last_name) values ('Melanie', 'Johnson');

select * from customers;

select * from items where price >80;
select * from items where price <= 300;

select * from customers where last_name = 'smith';
--not getting any data
select * from customers where last_name = 'Jones';

select * from customers where first_name != 'Scott';



