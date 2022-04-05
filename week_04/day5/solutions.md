
Write queries to find:

```sql

1. The names of the animals in a given enclosure -

!> SELECT animal.name
FROM animal 
INNER JOIN enclosure 
ON animal.enclosure_id = enclosure.id 
WHERE enclosure.name = 'Aqua Centre';

2. The names of the staff working in a given enclosure -

!> SELECT staff.name 
FROM staff INNER JOIN assignment 
ON staff.id = assignment.employeeId 
INNER JOIN enclosure ON assignment.enclosureId = enclosure.id
WHERE enclosure.name = 'The Sand Pit';

3. The names of staff working in enclosures which are closed for maintenance -

!> SELECT staff.name FROM staff INNER JOIN assignment 
ON staff.id = assignment.employeeId 
INNER JOIN enclosure ON assignment.enclosureId = enclosure.id
WHERE enclosure.closedformaintenance = true; 

4. The name of the enclosure where the oldest animal lives. 
If there are two animals who are the same age choose the first one alphabetically -

!> SELECT enclosure.name FROM enclosure INNER JOIN animal 
ON animal.enclosure_id = enclosure.id
ORDER BY animal.age DESC, animal.name LIMIT 1;

5. The number of different animal types a given keeper has been assigned to work with -

!> SELECT COUNT(DISTINCT animal.type) 
FROM animal INNER JOIN enclosure
ON animal.enclosure_id = enclosure.id
INNER JOIN assignment 
ON assignment.enclosureid = enclosure.id
INNER JOIN staff
ON staff.id = assignment.employeeid
WHERE staff.name = 'Ranger Holly'; 

6. The number of different keepers who have been assigned to work in a given enclosure - 

!> SELECT COUNT(DISTINCT staff.name) 
FROM staff INNER JOIN assignment
ON staff.id = assignment.employeeid
INNER JOIN enclosure
ON assignment.enclosureid = enclosure.id
WHERE enclosure.name = 'Inferno Arena'; 

7. The names of the other animals sharing an enclosure with a given animal 
(eg. find the names of all the animals sharing the big cat field with Tony) -

!> SELECT roommates.name FROM animal 
INNER JOIN enclosure 
ON animal.enclosure_id = enclosure.id -- this is just a table
INNER JOIN animal AS roommates -- you can refer to back to animal table as roommates to avoid error
ON enclosure.id = roommates.enclosure_id
WHERE animal.id = 1; -- THIS IS THE ORIGINAL COPY


-- INNER JOIN IS ONLY GETTING US STUFF IN BOTH TABLES (NO NULLS)
-- WE KNOW LEO IS IN BIG CAT FIELD, BUT NO OTHER INFO TO FIND OTHER ANIMAL INFO
-- JOIN TABLE EXISTS IN SAME PLAIN (ONE WITH ENCLOSURE INFO AND ANIMAL INFO).
-- WE NEED TO GET BACK TO ANIMALS
-- BECAUSE WE'VE GOT OUR ANIMAL TABLE AS A JOIN, WE NEED ABOTHER NAME TO ACCESS THAT INFO.
-- ROOM MATES IS A SECPND COPY OF OUR JOIN TABEL
-- ENCLSUERE ID MATCHING THAT IN ROOMATES ID. FIRST HALF OF SCREEN MATCHING WITH OTHER HALF
-- ROOMATES .NAME REFERS TO THE JOINED NAME HALF
-- all different ROOMATES.ID, BUT THE ANIMAL.ID
-- enclosures id as house.
-- do whatever you want toeach separate copy.

-- TASK - Try and find all employees that work on thae same day.
-- TASK - SQLBOLT

SELECT roommates.name FROM animal 
INNER JOIN enclosure 
ON animal.enclosure_id = enclosure.id 	  -- joins animal and enclosure, adding their respective columns and a row for each unique match
INNER JOIN animal AS roommates 			  -- a straight up copy of the original animal table, called 'roommates' (this is known as aliasing)
ON enclosure.id = roommates.enclosure_id  -- everytime our 'Vaporeon' rows enclosure.id matches one of the other animals.enclosure_id (animals is now called roommates), a new row is made to display this unique set of data. This matches 4 times as there are 4 animals in the 1 enclosure. In this example, Vaporeon is being matched with 4 different buddies.
										  -- There are now 4 different entries for each animal.id. Each entry matches with a different roommate from our animals ('roommates' table)
										  -- If we now 'WHEN animal.id = x', we will display each 'roommates' name that matched the entered id or name on the far left of the table (animal.id or animal.name)
WHERE animal.id = 1;	

