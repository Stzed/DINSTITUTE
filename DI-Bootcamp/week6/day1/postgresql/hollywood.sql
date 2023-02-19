
-- CREATE TABLE ACTORS (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(20) NOT NULL,
-- 	last_name VARCHAR(20) NOT NULL,
-- 	date_birth DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL
-- 	)

SELECT * FROM actors;

SELECT first_name, last_name FROM actors;

insert into actors (first_name, last_name, date_birth, number_oscars)
values('george', 'cloony', '1988-08-07', 2),
('hey', 'there', '1998-08-07', 4),
('no', 'way', '1998-08-07', 1);

select * from actors where number_oscars>= 2;
select first_name from actors where number_oscars>= 2;

--born on sunday
select *from actors where extract(year from date_birth) = 1988;
select extract(dow from date_birth) from actors where first_name = 'george';

select * from actors where first_name = 'george' and number_oscars >= 2;
--ilike will make sure it isnt case sensitive 
select * from actors where last_name ilike '%y';
--ordered alphabetically for last name 
select * from actors order by last_name desc;
--show only 2 actors
select * from actors limit 2;
