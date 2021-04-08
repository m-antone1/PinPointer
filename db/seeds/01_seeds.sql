-- Users table seeds here (Example)

--            USERS                 --
INSERT INTO users (name,email,password) VALUES ('asma' , 'asma@example.com', 'password');
INSERT INTO users (name,email,password) VALUES ('rahul' , 'rahul@example.com', 'password');
INSERT INTO users (name,email,password) VALUES ('lucas' , 'lucas@example.com', 'password');
INSERT INTO users (name,email,password) VALUES ('raho' , 'raho@example.com', 'password');



--            MAPS                  --
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (3,'Asmas Top Rated Nail Salons', 'Here is a list of all my favourite hair salons', 'https://i.picsum.photos/id/0/5616/3744.jpg', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (2,'Lighthouse x AllThingsSweet', 'Here is a list of all Rahul Approved Auto Shops', 'https://picsum.photos/id/1/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (3,'Lighthouse x HealthyRestaurants', 'a list of all my faspots', 'https://picsum.photos/id/1010/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (4,'Lighthouse x Groceries', 'Here is a list of the Starbucks locations near Lighthouse Labs', 'https://picsum.photos/id/142/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (3,'Lighthouse x CheapEats', 'Here is a list of the Starbucks locations near Lighthouse Labs', 'https://picsum.photos/id/1033/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (1,'Ban Go To Cafe Spots', 'Here is a list of the Starbucks locations near Lighthouse Labs', 'https://picsum.photos/id/1051/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (2,'Fav vegan places', 'Here is a list of the Starbucks locations near Lighthouse Labs', 'https://picsum.photos/id/117/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (2,'Top 10 Auto Shops in Toronto', 'Here is a list of the Starbucks locations near Lighthouse Labs', 'https://picsum.photos/id/119/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (4,'Lighthouse coffeeshops', 'Here is a list of the Starbucks locations near Lighthouse Labs', 'https://picsum.photos/id/134/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (1,'My Top 5 Restaurants', 'Here is a list of all my favourite food spots', 'https://food.fnr.sndimg.com/content/dam/images/food/editorial/shows/t/top-5-restaurants/FN-ShowChip-Top-5-Restaurants.jpg.rend.hgtvcom.616.347.suffix/1431113622782.jpeg', true);

--            USER_MAPS             --
INSERT INTO user_maps (user_id, map_id) VALUES (1,6);
INSERT INTO user_maps (user_id, map_id) VALUES (1,10);
INSERT INTO user_maps (user_id, map_id) VALUES (2,7);
INSERT INTO user_maps (user_id, map_id) VALUES (2,8);
INSERT INTO user_maps (user_id, map_id) VALUES (3,1);
INSERT INTO user_maps (user_id, map_id) VALUES (3,3);
INSERT INTO user_maps (user_id, map_id) VALUES (3,5);
INSERT INTO user_maps (user_id, map_id) VALUES (4,2);
INSERT INTO user_maps (user_id, map_id) VALUES (4,4);
INSERT INTO user_maps (user_id, map_id) VALUES (4,9);

--            POINTERS              --
--         MAP 6(belongs to user 1): Pointers        --
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (1,10,'1. Kiin','This food spot dabbling in Royal Thai—a rarefied style of cooking that shares some of the hyper-finickiness of Japanese kaiseki. Everything is so daintily pretty, you’ll fight the urge to leave it untouched on the plate.', 'https://cdn.torontolife.com/wp-content/uploads/2018/03/final-image-DSC_2962-1680x0-c-default.jpg', '326 Adelaide St. W.', 43.6476, -79.3921);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (1,10,'2. Labora','The menu emphasizes seafood and modern Spanish dishes inspired by the gastronomy of Barcelona, like a row of cold-smoked mackerel slices standing like soldiers at attention, each paired with a dot of blood orange marmalade.', 'https://cdn.torontolife.com/wp-content/uploads/2016/03/best-toronto-restaurants-2016-figo-1680x0-c-default.jpg', '433 King St. W.', 43.6453, -79.3953);
INSERT INTO markers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (1,10,'3. Figo','The casual demeanour of this comparatively unflashy pasta-and-pizza spot belies great sophistication. The thin-crust pizzas, baked in a wood-fired oven, are excellent. Handmade pastas are lightly dressed to show off the noodles.', 'https://cdn.torontolife.com/wp-content/uploads/2016/06/toronto-restaurants-buca-king-west-rob-gentile-foraging-prosciutto-pizza-nettle-ramps-1680x0-c-default.jpg', '295 Adelaide St. W.', 43.6477, -79.3904);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (1,10,'4. Buca','Few places encapsulate Toronto’s dining culture better than Buca, where executive chef Rob Gentile prepares some of the city’s most original and intricate plates in a bare-bones industrial room.', 'https://cdn.torontolife.com/wp-content/uploads/2016/08/byblos-1680x0-c-default.jpg', '604 King St. W.', 43.6439, -79.3996);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (1,10,'5. Byblos','The dining room is one of the most elegant in the city, with caramel leather banquettes and a barrel-vaulted ceiling. A plate of the creamy house-made labneh—a thick Persian-style yogurt—comes with chunks of wood oven–fired flatbread.', 'https://cdn.torontolife.com/wp-content/uploads/2016/08/jacobs-caesar-1680x0-c-default.jpg', '11 Duncan St.', 43.6475, -79.3882);

--        MAP 10(belongs to user 1): Pointers
INSERT INTO markers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (1,6,' asma_veganfoodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address' , 43.655, -79.813);
INSERT INTO markers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (1,6,'asma_veganfoodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.755, -79.413);
INSERT INTO markers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (1,6,'asma_veganfoodspot#3','my number 3 vegam food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#3_address', 43.955, -79.113);

--        MAP 7(belongs to user 2): Pointers         --
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (2,7,'rahul: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.655, -79.413);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (2,7,'rahul: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.625 ,-79.532);
INSERT INTO markers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (2,7,'rahul: foodspot#3','my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#3_address', 43.255, -79.213);
--        MAP 8(belongs to user 2): Pointers         --
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (2,8,'rahul: vegan foodspot#1','my number 1 vefood spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address', 43.635, -79.313);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (2,8,'rahul: vegan foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.235, -79.413);
INSERT INTO markers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (2,8,'rahul: vegan foodspot#3','my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#3_address', 43.435, -79.513);

--        MAP 1(belongs to user 3): Pointers         --
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,1,'lucas: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.635, -79.413);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,1,'lucas: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.635, -79.513);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,1,'lucas: foodspot#3','my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#3_address', 43.635, -79.113);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,1,'lucas: foodspot#4','my number 4 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#4_address', 43.135, -79.313);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,1,'lucas: foodspot#5','my number 5 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#5_address', 43.135, -79.233);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: foodspot#6','my number 6 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#6_address', 43.435, -79.113);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: foodspot#7','my number 7 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#7_address', 43.235, -79.313);
--        MAP 3(belongs to user 3): Pointers         --
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: vegan foodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address', 43.235, -79.313);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: vegan foodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.115, -79.113);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: vgean foodspot#3','my number 3 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#3_address', 43.135, -79.613);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: vegan foodspot#4','my number 4 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#4_address', 43.635, -79.613);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: vegan foodspot#5','my number 5 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#5_address', 43.635, -79.313);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: vegan foodspot#6','my number 6 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#6_address', 43.135, -79.313);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: vegan foodspot#7','my number 7 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#7_address', 43.235, -79.213);
--        MAP 5(belongs to user 3): Pointers         --
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,5,'raho: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.635, -79.313);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,5,'raho foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.125, -79.123);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,5,'raho foodspot#3','my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#3_address', 43.735, -79.813);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,5,'raho foodspot#4','my number 4 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#4_address', 43.635, -79.923);


--        MAP 2(belongs to user 4): Pointers         --
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,2,'raho: foodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address', 43.635, -79.113);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,2,'raho foodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.635, -79.213);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,2,'raho foodspot#3','my number 3 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#3_address', 43.635, -79.932);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,2,'raho foodspot#4','my number 4 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#4_address', 43.635, -79.613);
--        MAP 5(belongs to user 4): Pointers         --
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,4,'suhur: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.635, -79.213);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,4,'suhur: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.635, -79.313);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,4,'suhur: veganfoodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address', 43.435, -79.013);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,4,'suhur: veganfoodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.135, -79.313);



--        MAP 9(belongs to user 6): Pointers         --
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,9,'Starbucks #1','Closest Starbucks, only 60 m away!!', 'https://media-exp1.licdn.com/dms/image/C4D0BAQEQxk9y2rk7Hw/company-logo_200_200/0?e=2159024400&v=beta&t=cb41HQizJjoxW778MdkvTZNxKCfiEm4yUKW9_7vnYOg', '625 King St W', 43.6439916, -79.4035925);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,9,'Starbucks #2','This Starbucks is still pretty close, only 400 m away!', 'https://media-exp1.licdn.com/dms/image/C4D0BAQEQxk9y2rk7Hw/company-logo_200_200/0?e=2159024400&v=beta&t=cb41HQizJjoxW778MdkvTZNxKCfiEm4yUKW9_7vnYOg', '580 Queen St W', 43.64737, -79.4059146);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,9,'Starbucks #3','This Starbucks is close by, 650 m away!', 'https://media-exp1.licdn.com/dms/image/C4D0BAQEQxk9y2rk7Hw/company-logo_200_200/0?e=2159024400&v=beta&t=cb41HQizJjoxW778MdkvTZNxKCfiEm4yUKW9_7vnYOg', '438 Richmond St W', 43.6513952, -79.3829692);
INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,9,'Starbucks #4','This Starbucks is if you need to smell the fresh air before you smell the coffee, 1 km away.', 'https://media-exp1.licdn.com/dms/image/C4D0BAQEQxk9y2rk7Hw/company-logo_200_200/0?e=2159024400&v=beta&t=cb41HQizJjoxW778MdkvTZNxKCfiEm4yUKW9_7vnYOg', '1005 Queen St W', 43.6445745, -79.4188332);



