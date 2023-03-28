use Writersoasis
CREATE TABLE order ( 
id VARCHAR (255) NOT NULL,
userid VARCHAR(255) ,
title VARCHAR (255),
content VARCHAR (255),
postedOn DATETIME DEFAULT GETDATE(),
FOREIGN KEY (userid) REFERENCES user(id),
)