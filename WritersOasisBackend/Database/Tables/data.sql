USE  WritesOasis
INSERT INTO ratings (rating_id, order_id, user_id, rating, review, date_created)
VALUES
    ('1', '1', '10', 4, 'Great service!', '2023-03-31 12:00:00'),
    ('2', '3', '2', 5, 'Excellent job!', '2023-03-31 12:01:00'),
    ('3', '2', '5', 3, 'Could be better', '2023-03-31 12:02:00'),
    ('4', '5', '8', 2, 'Disappointing', '2023-03-31 12:03:00'),
    ('5', '6', '6', 4, 'Very satisfied', '2023-03-31 12:04:00'),
    ('6', '7', '3', 5, 'Highly recommended', '2023-03-31 12:05:00'),
    ('7', '8', '9', 3, 'Okay experience', '2023-03-31 12:06:00'),
    ('8', '9', '4', 4, 'Good work', '2023-03-31 12:07:00'),
    ('9', '10', '1', 2, 'Could improve', '2023-03-31 12:08:00'),
    ('10', '4', '7', 5, 'Amazing service!', '2023-03-31 12:09:00');


CREATE TABLE ratings (
    rating_id VARCHAR(255) PRIMARY KEY,
    order_id VARCHAR(255),
    user_id VARCHAR(255),
    rating INT,
    review TEXT,
    date_created DATETIME,
    FOREIGN KEY (order_id) REFERENCES post_order(post_order_id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);



USE WritesOasis;
SELECT *FROM post_order

INSERT INTO post_order (post_order_id, title, content, client_id, writer_id, price, deadline, status, payment_status, delivery_status)
VALUES 
    (1, 'Blog post on climate change', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '1', '2', 50.00, '2023-04-15', 'Open', 'Pending', 'Not delivered'),
    (2, 'Product review for tech gadget', 'Etiam molestie felis nec velit sollicitudin, vel commodo elit euismod.', '2', '3', 25.00, '2023-04-07', 'In progress', 'Paid', 'Not delivered'),
    (3, 'Website copy for small business', 'Praesent dapibus gravida nibh, eu convallis velit lacinia id.', '2', '4', 100.00, '2023-04-20', 'Open', 'Pending', 'Not delivered'),
    (4, 'Research paper on artificial intelligence', 'Donec commodo urna ut volutpat faucibus.', '2', '5', 150.00, '2023-04-25', 'Open', 'Pending', 'Not delivered'),
    (5, 'Social media content for fashion brand', 'Sed vitae mi eu nunc auctor pulvinar vel eu lorem.', '3', '6', 75.00, '2023-04-10', 'In progress', 'Paid', 'Not delivered'),
    (6, 'Email newsletter for nonprofit organization', 'Nulla consectetur massa vel felis aliquet, id laoreet quam sodales.', '7', '10', 50.00, '2023-04-12', 'Completed', 'Paid', 'Delivered'),
    (7, 'Article on personal finance', 'Aenean bibendum nulla ac quam tristique, vel facilisis arcu auctor.', '1', '5', 80.00, '2023-04-18', 'Open', 'Pending', 'Not delivered'),
    (8, 'Press release for new product launch', 'Nam sed quam euismod, vehicula magna in, luctus nisi.', '3', '9', 120.00, '2023-04-30', 'Open', 'Pending', 'Not delivered'),
    (9, 'Academic essay on literature', 'Mauris commodo velit non nulla commodo, a convallis mauris sagittis.', '8', '1', 200.00, '2023-05-05', 'Open', 'Pending', 'Not delivered'),
    (10, 'Copyediting for book manuscript', 'Vivamus vel sapien euismod, pharetra quam vel, convallis felis.', '10', '8', 50.00, '2023-04-08', 'Completed', 'Paid', 'Delivered');
USE WritesOasis
CREATE TABLE post_order (
    post_order_id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    client_id VARCHAR(255),
    writer_id VARCHAR(255),
    price DECIMAL(10, 2),
    date_created DATETIME DEFAULT GETDATE(),
    deadline DATETIME,
    status VARCHAR(50),
    payment_status VARCHAR(50),
    delivery_status VARCHAR(50),
    FOREIGN KEY (client_id) REFERENCES Users(id),
    FOREIGN KEY (writer_id) REFERENCES Users(id)
);


SELECT * FROM Users
INSERT INTO Users (id, username, email, password, role,  is_sent, user_type, bio, profile_url)
VALUES 
('1', 'user1', 'user1@example.com', 'password1', '1' ,'0', 'type1', 'Bio for user 1', 'http://example.com/user1'),
('2', 'user2', 'user2@example.com', 'password2', '2', '0', 'type2', 'Bio for user 2', 'http://example.com/user2'),
('3', 'user3', 'user3@example.com', 'password3', '1',  '1', 'type1', 'Bio for user 3', 'http://example.com/user3'),
('4', 'user4', 'user4@example.com', 'password4', '0', '1', 'type3', 'Bio for user 4', 'http://example.com/user4'),
('5', 'user5', 'user5@example.com', 'password5', '1',  '0', 'type2', 'Bio for user 5', 'http://example.com/user5'),
('6', 'user6', 'user6@example.com', 'password6', '2', '0', 'type1', 'Bio for user 6', 'http://example.com/user6'),
('7', 'user7', 'user7@example.com', 'password7', '1',  '1', 'type3', 'Bio for user 7', 'http://example.com/user7'),
('8', 'user8', 'user8@example.com', 'password8', '0',  '0', 'type2', 'Bio for user 8', 'http://example.com/user8'),
('9', 'user9', 'user9@example.com', 'password9', '2',  '1', 'type1', 'Bio for user 9', 'http://example.com/user9'),
('10', 'user10', 'user10@example.com', 'password10', '1', '0', 'type2', 'Bio for user 10', 'http://example.com/user10');
