create table students(
	id serial primary key ,
	first_name varchar (100) not null,
	last_name varchar (100) not null,
	birth_date date 
)

select * from students
insert into students (first_name, last_name, birth_date) values ('Marc', 'Benichou', '1998-11-02');
insert into students (first_name, last_name, birth_date) values ('Yoan', 'Cohen', '2010-12-03');
insert into students (first_name, last_name, birth_date) values ('Lea', 'Benichou', '1997-07-27');
insert into students (first_name, last_name, birth_date) values ('Amelia', 'Dux', '1996-04-07');
insert into students (first_name, last_name, birth_date) values ('David', 'Grez	', '2003-06-14');
insert into students (first_name, last_name, birth_date) values ('Omer', 'Simpson', '1980-10-03');
insert into students (first_name, last_name, birth_date) values ('Esti', 'Zeldman', '2001-02-17');

-- Fetch all of the data from the table.
select * from students
-- Fetch all of the students first_names and last_names.
select first_name, last_name from students;
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
select first_name, last_name from students where id = 2;
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
select first_name, last_name from students where last_name = 'Benichou' and first_name = 'Marc';
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
select first_name, last_name from students where last_name = 'Benichou' or first_name = 'Marc';
-- Fetch the students whose first_names contain the letter a.
select first_name, last_name from students where first_name ilike '%a';
-- Fetch the students whose first_names start with the letter a.
select first_name, last_name from students where first_name ilike '_a';
-- Fetch the students whose first_names end with the letter a.
select first_name, last_name from students where right(first_name, 1) = 'a'; 
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
couldnt find anything in google
-- Fetch the students whose id’s are equal to 1 AND 3 .
select first_name, last_name from students where id in (1,3);



-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
select * from students where birth_date >= '1/01/2000';

