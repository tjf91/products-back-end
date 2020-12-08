drop table if exists product;
create table product(
product_id serial primary key not null,
name varchar(40) not null,
description varchar(80) not null,
price integer not null,
image_url text not null);

insert into product
(name,description,price,image_url)
values
('Stuff1','good stuff',15,'http......'),
('Stuff2','great stuff',115,'http......'),
('Stuff3','bad stuff',5,'http......');