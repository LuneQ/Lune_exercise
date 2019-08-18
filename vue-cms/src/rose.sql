SET NAMES UTF8;
DROP DATABASE IF EXISTS rose;
CREATE DATABASE rose CHARSET=UTF8;
USE rose;

 #轮播图
 CREATE TABLE rose_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,#图片编号
  img_url VARCHAR(128)#图片链接
 );
 INSERT INTO rose_carousel VALUES
 (1,'images/car_01.jpg'),
 (2,'images/car_02.jpg'),
 (3,'images/car_03.jpg'),
 (4,'images/car_04.jpg');

 #新品资讯表
 CREATE TABLE rose_new(
  nid INT PRIMARY KEY AUTO_INCREMENT,#新闻编号
  title VARCHAR(32),#新闻名称
  add_time BIGINT,#上新时间
  click INT,#点赞次数
  img_url VARCHAR(128)#图片链接
 );
 INSERT INTO rose_new VALUES
 (1,'Love Story 抱抱甜心兔',1564543483,10,'images/new_01.png'),
 (2,'钥匙 吊坠',1564543483,10,'images/new_02.png'),
 (3,'流苏 吊坠',1564543483,10,'images/new_03.png'),
 (4,'Love Lock 粉色珍珠贝母',1564543483,10,'images/new_04.png'),
 (5,'锁骨链 项链',1564543483,10,'images/new_05.png'),
 (6,'狮子座狮子守护色 19支',1564543483,10,'images/new_06.png'),
 (7,'幸福熊嫣红 钟罩',1564543483,10,'images/new_07.png'),
 (8,'抱抱兔 录音版',1564543483,10,'images/new_08.png'),
 (9,'心动心许愿',1564543483,10,'images/new_09.png'),
 (10,'心动绽放红粉 中型',1564543483,10,'images/new_10.png');

 #用户评论列表
 CREATE TABLE rose_comments(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(32),
  add_time BIGINT,
  content VARCHAR(128)
 );
 INSERT INTO rose_comments VALUES
 (1,'匿名用户',1564543483,'啦啦啦'),
 (2,'风云',1564543483,'我来评论一下'),
 (3,'cherry',1564543483,'啦啦啦'),
 (4,'匿名用户',1564543483,'啦啦啦'),
 (5,'匿名用户',1564543483,'啦啦啦');

 #产品分类表
 CREATE TABLE rose_type(
  tid INT PRIMARY KEY,#类型编号
  type VARCHAR(32) #类型名称
 );
 INSERT INTO rose_type VALUES
 (1,"鲜花玫瑰"),
 (2,"永生玫瑰"),
 (3,"玫瑰珠宝"),
 (4,"玫瑰饰品");


 #产品表
 CREATE TABLE product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(64),
  price FLOAT(10,2),
  pic VARCHAR(128),
  typeId INT
 );
 INSERT INTO product VALUES
 (1,'狮子座狮子守护色',1999,'images/p1.png',1),
 (2,'小经典 朱砂 19支',1520,'images/p2.png',1),
 (3,'手捧朱砂 520支 80cm',19999,'images/p3.png',1),
 (4,'手捧许愿 520支 80cm',29099,'images/p4.png',1),
 (5,'经典朱砂 19支 80cm',1999,'images/p5.png',1),
 (6,'经典情动 19支 80cm',1999,'images/p6.png',1),
 (7,'经典惊艳 19支 80cm',1999,'images/p7.png',1),
 (8,'经典许愿 19支 80cm',1999,'images/p8.png',1),
 (9,'恒久情动 19支 40cm',1520,'images/p9.png',1),
 (10,'恒久朱砂 19支 40cm',1520,'images/p10.png',1),
 (11,'留声机嫣红',6999,'images/p11.png',2),
 (12,'甜心狗嫣红',15999,'images/p12.png',2),
 (13,'告白熊嫣红',1799,'images/p13.png',2),
 (14,'手捧你的名字嫣红',19999,'images/p14.png',2),
 (15,'心动心许愿',2699,'images/p15.png',2),
 (16,'天秤座守护色',1314,'images/p16.png',2),
 (17,'经典玫瑰熊嫣红',89999,'images/p17.png',2),
 (18,'水晶玫瑰 盛开版',1999,'images/p18.png',2),
 (19,'恒珍藏天蓝 繁花版',4699,'images/p19.png',2),
 (20,'恒经典红粉 单朵升级版',2699,'images/p20.png',2),
 (21,'火星-星环 中型项链',2999,'images/p21.png',3),
 (22,'水瓶座 中型项链',2999,'images/p22.png',3),
 (23,'永恒 双细结 中型耳饰',8399,'images/p23.png',3),
 (24,'手甜心熊 项链',3999,'images/p24.png',3),
 (25,'甜心熊 戒指',7999,'images/p25.png',3),
 (26,'永恒 四爪边镶 钻戒',29999,'images/p26.png',3),
 (27,'爱之信仰 20分耳饰',21999,'images/p27.png',3),
 (28,'经敞开心扉 立体 项链',6999,'images/p28.png',3),
 (29,'永恒 双细结 中型戒指',5999,'images/p29.png',3),
 (30,'加冕 六爪镶 50分钻戒',39999,'images/p30.png',3),
 (31,'项圈狗925银 中型手链与耳饰',1520,'images/p31.png',4),
 (32,'项圈狗925银 粉珐琅 中型手链与耳饰',1520,'images/p32.png',4),
 (33,'项圈狗925银 粉珐琅 中型项链与手链',1520,'images/p33.png',4),
 (34,'爱之礼赞 粉珐琅 中型项链',1314,'images/p34.png',4),
 (35,'爱之礼赞 红珐琅 中型手链',1314,'images/p35.png',4),
 (36,'爱之礼赞 蓝珐琅 中型耳饰',999,'images/p36.png',4),
 (37,'爱之礼赞 红珐琅 中型耳饰',999,'images/p37.png',4),
 (38,'项圈狗 红珐琅 中型手链',1314,'images/p38.png',4),
 (39,'项圈狗 粉珐琅 中型手链',1314,'images/p39.png',4),
 (40,'项圈狗 红珐琅 中型耳饰',1314,'images/p40.png',4);
 
#购物车列表
CREATE TABLE rose_cart_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  productId INT,
  count INT
);
INSERT INTO rose_cart_detail VALUES
(1, 1, 3),
(2, 8, 1),
(3, 15, 1),
(4, 18, 2);




