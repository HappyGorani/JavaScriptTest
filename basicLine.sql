# ALTER TABLE test MODIFY id int NOT NULL AUTO_INCREMENT #alter <<변경 (자동증가on)
# ALTER TABLE test ADD type varchar(255) NOT NULL #alter변경tabletest에ADD열이름 유형 옵션
# alter table test modify column type varchar(255) #nullalbe로쉽게변경 대소문자상관없긔윤
# alter table testDB rename column type to name #열 이름 변겅
# alter table testDB modify column name varchar(255) after id
# alter table geust.authors rename guest.authors # 다른DB로 테이블 변경


# INSERT INTO test (memo) VALUE ('확인용') #insert into << 데이터삽입
## INSERT INTO 테이블이름(열이름) VALUE ('문자열' 또는 숫자) 

# SELECT * FROM test WHERE memo = 'testtest' #select << 데이터불러오기
# SELECT count(*) FROM TEST WHERE memo = 'testtest' #count << 조건에맞는 개수반환

# UPDATE test SET memo = '변경됨' WHERE id = 4
## UPDATE 테이블이름 SET 열이름 = '변경할 값' WHERE 조건

# DELETE FROM test WHERE id = 2 #delete << 삭제

# select name as authorsName, title,summary,body from authors   # 선택하여 불러온다 뭐를? name을 authorsName으로 불러오겠다,타이틀,요약,바디도 어디서? authors 테이블에서
# inner join posts on authors.id = posts.author_id # 근데 이 authors 테이블을 posts테이블과 붙힐거고 조건이 있다. On authors.id와 posts.author_id를 연결한후 조건을 본다
# where name = 'TestGuest1'  # 조건where은 이름중 = testGuest인 것만

