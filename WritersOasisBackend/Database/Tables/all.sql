CREATE TABLE post_order (
    post_order_id INT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    author_id INT,
    buyer_id INT,
    price DECIMAL(10, 2),
    date_created DATETIME,
    status VARCHAR(50),
    payment_status VARCHAR(50),
    delivery_status VARCHAR(50)
);



CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(255),
    password VARCHAR(255),
    full_name VARCHAR(255),
    role VARCHAR(50)
);
-- Create the Tags table
CREATE TABLE Tags (
    tag_id INT PRIMARY KEY,
    name VARCHAR(50)
);

-- Create the User_tags table
CREATE TABLE User_tags (
    userid INT,
    tag_id INT,
    FOREIGN KEY (userid) REFERENCES Users(user_id),
    FOREIGN KEY (tag_id) REFERENCES Tags(tag_id),
    PRIMARY KEY (userid, tag_id)
);


CREATE TABLE ratings (
    rating_id INT PRIMARY KEY,
    post_order_id INT,
    user_id INT,
    rating INT,
    review TEXT,
    date_created DATETIME
);

CREATE TABLE comments (
    comment_id INT PRIMARY KEY,
    post_order_id INT,
    user_id INT,
    comment TEXT,
    date_created DATETIME
);

CREATE TABLE answers (
    answer_id INT PRIMARY KEY,
    post_order_id INT,
    user_id INT,
    answer TEXT,
    attachment VARCHAR(255),
    date_created DATETIME
);

