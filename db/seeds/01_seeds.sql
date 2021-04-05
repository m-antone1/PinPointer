-- Users table seeds here (Example)

--USERS--
INSERT INTO users (name,email,password) VALUES ('Alice', 'alice@gmail.com', 'password');
INSERT INTO users (name,email,password) VALUES ('Kira', 'kira@gmail.com', 'password');

--MAPS--
INSERT INTO maps (user_id, title, description, active, image_url) VALUES ();

--MARKERS--
INSERT INTO markers (user_id, map_id, title, description, address, image_url, latitude, longitude) VALUES ();

--USER_MAPS--
INSERT INTO user_maps (user_id, map_id) VALUES ();


