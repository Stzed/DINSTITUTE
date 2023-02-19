select * from actors
-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

select count (*) from actors 

insert into actors (first_name, last_name, date_birth, number_oscars) values ('esti', 'zeldman')

-- output:
-- ERROR:  INSERT has more target columns than expressions
-- LINE 1: insert into actors (first_name, last_name, date_birth, numbe...