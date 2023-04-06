CREATE DATABASE WritesOasis
use WritesOasis
CREATE TABLE Users (
    id varchar(255) NOT NULL PRIMARY KEY,
    username varchar(255) UNIQUE,
    email varchar(255) UNIQUE,
    password varchar (255) NOT NULL,
    role varchar (255) default '0',
    joinedOn DATETIME DEFAULT GETDATE(),
    is_sent varchar(255) default '0',
    user_type varchar(255),
    bio TEXT,
    profile_url varchar(255)
);

-- USE  WritesOasis
-- DROP TABLE usertable;

-- select * from WritesOasis



-- DESCRIBE WritesOasis;
