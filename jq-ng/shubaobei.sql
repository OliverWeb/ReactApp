SET NAMES 'utf8';
DROP DATABASE IF EXISTS shubaobei;
CREATE DATABASE shubaobei CHARSET=UTF8;
USE shubaobei;

CREATE TABLE kf_dish(
    did INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64),
    price FLOAT(6,2),
    img_sm VARCHAR(64),
    img_lg VARCHAR(64),
    detail VARCHAR(2048),
    material VARCHAR(2048)
);
INSERT INTO book_dish(did,img_sm,img_lg,name,price,material,detail) VALUES
(   null,
    'p0281.jpg',
    'p0281-l.jpg',
    '【80个维尼故事】',
    21.00,
 '故事多多，适合小孩的读物'
),
(   null,
    'p2679.jpg',
    'p2679-l.jpg',
    '【米老鼠】',
    16.5,
  '故事多多，适合小孩的读物'
),
(   null,
    'p8489.jpg',
    'p8489-l.jpg',
    '【赛车总动员】',
    32,
    '故事多多，适合小孩的读物'
),
(   null,
    'p7818.jpg',
    'p7818-l.jpg',
    '【宝宝点读书】',
    6.5,
   '故事多多，适合小孩的读物'
    
),
(   null,
    'p9138.jpg',
    'p9138-l.jpg',
    '【解谜世界】',
    32,
   '故事多多，适合小孩的读物'
    
),
(   null,
    'p4788.jpg',
    'p4788-l.jpg',
    '【疯狂动物城】',
    25,
    '故事多多，适合小孩的读物'
    
),
(   null,
    'p7933.jpg',
    'p7933-l.jpg',
    '【解谜乘法】',
    1.5,
   '故事多多，适合小孩的读物'
),
(   null,
    'p6611.jpg',
    'p6611-l.jpg',
    '【音乐播放器故事书】',
    12,
    '故事多多，适合小孩的读物'
);

CREATE TABLE book_order(
    oid INT PRIMARY KEY AUTO_INCREMENT,
    phone VARCHAR(16),
    user_name VARCHAR(16),
    sex INT,    /*1:男  2:女*/
    order_time LONG,
    addr VARCHAR(256),
    did INT
);
INSERT INTO book_order(oid, phone,user_name,sex,order_time,addr,did) VALUES
(NULL,'13501234567','oliver',1,1445154859209,'杭州',3),
(NULL,'13207654321','zhang',1,1445254997612,'山东',2),
(NULL,'13899999999','le',1,1445354959209,'济宁',5),
(NULL,'13683675299','zhang',2,1445354889209,'金乡',4);
