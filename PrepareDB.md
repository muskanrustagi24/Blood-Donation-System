# Preparing the database

Do the following as root

```sql

create database bloodDonorDB;
create user admin identified by 'mypass123';
use bloodDonorDB;
grant all privileges on bloodDonorDB.* to admin;

```