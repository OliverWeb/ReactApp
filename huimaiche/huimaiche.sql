SET NAMES UTF8;
DROP DATABASE IF EXISTS huimaiche;
CREATE DATABASE huimaiche CHARSET=UTF8;
USE huimaiche;
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  uEmail VARCHAR(32)
);
INSERT INTO user VALUES(NULL,'zhangle','123456','Oliver_web@163.com');
CREATE TABLE carsign(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	sign_name VARCHAR(32),
	position VARCHAR(64)
);
/* todo 图标*/
INSERT INTO carsign VALUES
(NULL,'大众','img_png/m_1.png'),
(NULL,'本田','img_png/m_2.png'),
(NULL,'吉利汽车','img_png/m_3.png'),
(NULL,'丰田','img_png/m_4.png'),
(NULL,'现代','img_png/m_5.png'),
(NULL,'别克','img_png/m_6.png'),
(NULL,'福特','img_png/m_7.png'),
(NULL,'日产','img_png/m_8.png'),
(NULL,'长安轿车','img_png/m_9.png'),
(NULL,'起亚','img_png/m_10.png'),
(NULL,'奔驰','img_png/m_11.png'),
(NULL,'比亚迪','img_png/m_12.png'),
(NULL,'雪佛兰','img_png/m_13.png'),
(NULL,'广汽传祺','img_png/m_14.png'),
(NULL,'马自达','img_png/m_15.png'),
(NULL,'斯柯达','img_png/m_16.png'),
(NULL,'荣威','img_png/m_17.png'),
(NULL,'奇瑞','img_png/m_18.png');



CREATE TABLE adviser(
  aid INT PRIMARY KEY AUTO_INCREMENT,
	adviser_pic VARCHAR(64),
  aname VARCHAR(64),
  location VARCHAR(64),
  title VARCHAR(64),
  star INT(64),
  service_num VARCHAR(64),
  satisfaction VARCHAR(64),
  save VARCHAR(64),
  msg VARCHAR(64),
	adviser_carsign VARCHAR(64)
);
INSERT INTO adviser VALUES
(NULL,'img_jpg/lilihua.jpg','李丽华','（杭州）','购车女王',5,'402','100%','1.04','诚心做好服务，你的满意是我前进的动力','1-2-3-4-5-6'),
(NULL,'img_jpg/heyan.jpg','何燕','（杭州）','颜值爆表实力派',5,'228','100%','1.89','用心做好细节，以诚赢得信赖','5-6-7-8-9-10-11-12'),
(NULL,'img_jpg/lengfei.jpg','冷飞','（杭州）','礼貌先生',5,'206','100%','1.89','找我底价买车','3-4-5-6-13-14-15-16'),
(NULL,'img_jpg/jinlulu.jpg','金露露','（杭州）','知识小青年',5,'136','100%','1.75','惠买车，底价购车没秘密','15-16-17-18');

create table cars(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	car_name VARCHAR(64),
	car_pic VARCHAR(64),
	buy_num VARCHAR(64),
	price VARCHAR(64),
	style VARCHAR(64),
	brand VARCHAR(64)
);
INSERT INTO cars VALUES
(NULL,'捷达','cars/1054373580_6.jpg','687','7.88','紧凑型','大众'),
(NULL,'吉利帝豪GS','cars/1112019747_6.jpg','472','7.66','SUV','吉利汽车'),
(NULL,'大众POLO','cars/0517213012_6.jpg','443','6.98','小型','大众'),
(NULL,'吉利远景','cars/1115063433_6.jpg','343','6.86','紧凑型','吉利汽车'),
(NULL,'吉利帝豪GL','cars/0530059322_6.jpg','304','7.25','紧凑型','吉利汽车'),
(NULL,'吉利新帝豪三厢','cars/1107558578_6.jpg','293','6.55','紧凑型','吉利汽车'),
(NULL,'朗逸','cars/1102082359_6.jpg','811','12.98','紧凑型','大众'),
(NULL,'吉利博越','cars/1101202942_6.jpg','754','9.88','SUV','吉利汽车'),
(NULL,'速腾','cars/0243074133_6.jpg','698','11.44','紧凑型','大众'),
(NULL,'思域','cars/0415589818_6.jpg','612','13.22','紧凑型','本田'),
(NULL,'长安CS75','cars/0431144782_6.jpg','580','14.85','SUV','长安轿车'),
(NULL,'英朗','cars/0405204869_6.jpg','568','12.85','紧凑型','别克'),
(NULL,'途观','cars/0417030965_6.jpg','573','22.88','SUV','大众'),
(NULL,'本田XR-V','cars/0945107556_6.jpg','500','19.77','SUV','本田'),
(NULL,'轩逸','cars/1134292428_6.jpg','497','17.66','紧凑型','日产'),
(NULL,'迈腾','cars/0415589818_6.jpg','493','20.80','中型','大众'),
(NULL,'本田CR-V','cars/0544597417_6.jpg','474','19.98','SUV','本田'),
(NULL,'宝来','cars/0520376375_6.jpg','464','15.88','紧凑型','大众'),
(NULL,'威驰','cars/0511518226_6.jpg','275','6.68','小型','丰田'),
(NULL,'飞度','cars/0613521952_6.jpg','268','6.48','小型','丰田'),
(NULL,'瑞纳三厢','cars/0406024793_6.jpg','204','5.98','小型','现代'),
(NULL,'起亚K2三厢','cars/0152046168_6.jpg','185','7.42','小型','起亚'),
(NULL,'哥瑞','cars/0542440683_6.jpg','164','5.68','小型','本田'),
(NULL,'雅阁','cars/0531161580_6.jpg','421','15.55','中型','本田'),
(NULL,'帕萨特','cars/1130416258_6.jpg','336','22.80','中型','现代'),
(NULL,'MISTRA名图','cars/1126154745_6.jpg','331','13.89','中型','大众'),
(NULL,'新蒙迪欧','cars/0706112826_6.jpg','279','16.75','中型','福特'),
(NULL,'凯美瑞','cars/0416152621_6.jpg','172','15.48','中型','丰田');
