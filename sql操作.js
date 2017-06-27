三 。 MySql中的SQL语句 
　　1 . 数据库创建 : Create database db_name; 
　　数据库删除 : Drop database db_name; 删除时可先判断是否存在，写成 : drop database if exits db_name 
　　 
　　2 . 建表 : 创建数据表的语法 : create table table_name (字段1 数据类型 , 字段2 数据类型); 
　　 例 : create table mytable (id int , username char(20)); 
　　 删表 : drop table table_name; 例 : drop table mytable; 
　　 
　　8 . 添加数据 : Insert into 表名 [(字段1 , 字段2 , ….)] values (值1 , 值2 , …..); 
　　如果向表中的每个字段都插入一个值,那么前面 [ ] 括号内字段名可写也可不写 
　　 例 : insert into mytable (id,username) values (1,’zhangsan’); 
　　 
　　9 . 查询 : 查询所有数据 : select * from table_name; 
　　查询指定字段的数据 : select 字段1 , 字段2 from table_name; 
　　例 : select id,username from mytable where id=1 order by desc;多表查询语句------------参照第17条实例 
　　 
　　10 . 更新指定数据 , 更新某一个字段的数据（注意，不是更新字段的名字） 
　　Update table_name set 字段名=’新值’ [, 字段2 =’新值’ , …..][where id=id_num] [order by 字段 顺序] 
　　例 : update mytable set username=’lisi’ where id=1; 
　　Order语句是查询的顺序 , 如 : order by id desc(或asc) , 顺序有两种 : desc倒序(100—1,即从最新数据往后查询),asc(从1-100)，Where和order语句也可用于查询select 与删除delete 
　　 
　　11 . 删除表中的信息 : 
　　 删除整个表中的信息 : delete from table_name; 
　　 删除表中指定条件的语句 : delete from table_name where 条件语句 ; 条件语句如 : id=3; 
　　 
　　12 . 创建数据库用户 
　　一次可以创建多个数据库用户如： 
　　CREATE USER username1 identified BY ‘password’ , username2 IDENTIFIED BY ‘password’…. 
　　 
　　13 . 用户的权限控制：grant 
　　 库，表级的权限控制 : 将某个库中的某个表的控制权赋予某个用户 
　　 Grant all ON db_name.table_name TO user_name [ indentified by ‘password’ ]; 
　　 
　　14 . 表结构的修改 
　　（1）增加一个字段格式： 
　　alter table table_name add column (字段名 字段类型); ----此方法带括号 
　　（2）指定字段插入的位置： 
　　alter table table_name add column 字段名 字段类型 after 某字段； 
　　删除一个字段： 
　　alter table table_name drop字段名; 
　　（3）修改字段名称/类型 
　　alter table table_name change 旧字段名 新字段名 新字段的类型; 
　　（4）改表的名字 
　　alter table table_name rename to new_table_name; 
　　（5）一次性清空表中的所有数据 
　　truncate table table_name; 此方法也会使表中的取号器(ID)从1开始 
　　 
　　15 . 增加主键，外键，约束，索引。。。。(使用方法见17实例) 
　　① 约束（主键Primary key、唯一性Unique、非空Not Null） 
　　② 自动增张 auto_increment 
　　③外键Foreign key-----与reference table_name(col_name列名)配合使用，建表时单独使用 
　　④ 删除多个表中有关联的数据----设置foreign key 为set null ---具体设置参考帮助文档 



数据库及表导出导入示例：

导出数据库
mysqldump -u root -p123456 gameTop > gameTop_db.sql

导出数据库的表
mysqldump -u -p123456 root gameTop gametop800 > gameTop_table.sql

导出数据库的特定表
mysqldump -u root -p123456  gameTop --table gametop800  > gameTop_table.sql


导入数据库：

登录MySQL:      mysql -uroot -p123456
创建数据库：    create database gameTop;


导入数据库：    

mysql -uroot -p123456 gameTop < gameTop_db.sql

 

导入数据库表：

mysql -uroot -p123456 gameTop  gametop800 <  gameTop_table.sql


导入数据库表：
mysql -uroot -p123456 gameTop  < gameTop_table.sql   （不指定表名）