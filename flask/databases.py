# -*- coding: utf-8 -*- 


from flask import Flask,render_template,request,g,session,url_for
import MySQLdb
import os
import json
from flask_cors import CORS
from time import localtime, strftime  
import datetime



#MySQL配置
host = 'localhost'
user = 'root'
password = '123'
database = 'pro'


app = Flask(__name__) 
cors = CORS(app, resources={r"/*": {"origins": "*"}}) 

# 建立数据库连接
db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)



#定义路由
@app.route("/login",methods=['POST','GET'])
def login():
    id = request.values.get("id")
    pwd = request.values.get("pwd")

    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    cursor.execute("SELECT * from teacher where id = %s and pwd = %s",(id,pwd,))

    #查询结果 只查一个
    data = cursor.fetchall()

    #查询结果个数
    count = cursor.rowcount

    if count != 0:
        return "ok"
    else:
        return "no"
		
#定义路由
@app.route("/test",methods=['POST','GET'])
def test():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
	
    id = request.values.get("id")
    cursor.execute("SELECT * from que where id = %s and is_show = 1",(id,))

    #查询结果 只查一个
    data = cursor.fetchall()
	

	
    #查询结果个数
    count = cursor.rowcount
	
    print(data)

    return json.dumps(data)
	
	
@app.route("/getp",methods=['POST','GET'])
def get_p():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
	
	
    id = request.values.get("id")
    cursor.execute("SELECT ap,bp,cp,dp from que where id = " + id)
	
	#查询结果 只查一个
    data = cursor.fetchone()
	
	
	
	
    print(data)
	
    return json.dumps(data)
	
	

@app.route("/addc",methods=['POST','GET'])
def add_c():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
	
    id = request.values.get("id")
    c = int(request.values.get("c"))
	
    array = ['a','b','c','d']
	
    c = array[c]
	
	
    sql = "UPDATE que set {}p = {}p + 1 where id = {}".format(c,c,id)
	
    print(sql)
	
	
	
    cursor.execute(sql)
	
    db.commit()
	
    return "yes"
	
	
@app.route("/getr",methods=['POST','GET'])
def getr():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
	
    sql = "SELECT id from que order by rand() limit 1"
	
    cursor.execute(sql)
	
	
	#查询结果 只查一个
    data = cursor.fetchone()
	
	
	
    return json.dumps(data)
    
    
@app.route("/addt",methods=['POST','GET'])
def addt():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    temp = request.values.get("temp")
    humi = request.values.get("humi")
    time = strftime("%H:%M", localtime()) 
    dates = str(datetime.date.today())
    
    cursor.execute("insert into tmp(date,time,temp,humi) values(%s,%s,%s,%s)",(dates,time,temp,humi))
    
    db.commit()
    
    return "200"
    
    
@app.route("/gett",methods=['POST','GET'])
def gett():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    dates = str(datetime.date.today())
    
    
    cursor.execute("SELECT temp,time FROM(SELECT temp,time FROM tmp WHERE date = %s ORDER BY time DESC LIMIT 10)aa ORDER BY time",(dates,))

    
    
    data = cursor.fetchall()
	
	
	
    return json.dumps(data)
    
    
    
@app.route("/add",methods=['POST','GET'])
def add():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    que = request.values.get("que")
    a = request.values.get("a")
    b = request.values.get("b")
    c = request.values.get("c")
    d = request.values.get("d")
    ans = request.values.get("ans")
    #sql = "INSERT INTO que (que,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s)",(que,a,b,c,d,ans,)
	
    cursor.execute("insert into que(que,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s)",(que,a,b,c,d,ans))
    #print(sql)
    
    #cursor.execute(sql)

    db.commit()
	
	
	
    return "200"
    

#获取题单
@app.route("/getql",methods=['POST','GET'])
def getql():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    cursor.execute("select * from que_list")
    
    data = cursor.fetchall()
    
    return json.dumps(data)
    
    
#根据提单获取题目
@app.route("/getque",methods=['POST','GET'])
def getque():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    list_id = request.values.get("list_id")
    
    
    cursor.execute("select * from que where list_id = %s",(list_id))
    
    
        
    data = cursor.fetchall()
    
    return json.dumps(data)
	
   
    
    
    
    
    
    
    
		
	
    
if __name__ == '__main__':  
    app.run(host='0.0.0.0',port=5000,debug=True)