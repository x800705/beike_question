# -*- coding: utf-8 -*- 


from flask import Flask,render_template,request,g,session,url_for,send_file
import MySQLdb
import os
import json
from flask_cors import CORS
from time import localtime, strftime  
import datetime
import uuid 
import pandas as pd


#MySQL配置
host = 'localhost'
user = 'root'
password = '123'
database = 'pro'



app = Flask(__name__) 


app.config['UPLOAD_FOLDER'] = '/www/wwwroot/test/back/static/image'

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
    time = strftime("%H:%M:%S", localtime()) 
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
    qid = request.values.get("qid")
    a = request.values.get("a")
    b = request.values.get("b")
    c = request.values.get("c")
    d = request.values.get("d")
    ans = request.values.get("ans")
    #sql = "INSERT INTO que (que,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s)",(que,a,b,c,d,ans,)
	
    cursor.execute("REPLACE into que(que,list_id,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s,%s)",(que,qid,a,b,c,d,ans))
    #print(sql)
    
    #cursor.execute(sql)

    db.commit()
	
	
	
    return "200"

@app.route("/addOne",methods=['POST','GET'])
def addOne():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    que = request.values.get("que")
    iid = request.values.get("item_id")
    user_id = request.values.get("user_id")
    a = request.values.get("a")
    b = request.values.get("b")
    c = request.values.get("c")
    d = request.values.get("d")
    ans = request.values.get("ans")
    #sql = "INSERT INTO que (que,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s)",(que,a,b,c,d,ans,)
	
    cursor.execute("REPLACE into que(que,item_id,user_id,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s,%s,%s)",(que,iid,user_id,a,b,c,d,ans,))
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
    
   
    
    cursor.execute("select * from que where list_id = %s",(list_id,))
    
    
    
    
        
    data = cursor.fetchall()
  
    
    return json.dumps(data)
	
   
    
    
    
#显示图片
@app.route('/image/<url>')  
def show_image(url):  
    # 图片文件的路径
    
 
    
    image_path = os.path.join('static/image', url)  
      
  
    # 使用 send_file 来发送图片文件  
    return send_file(image_path, mimetype='image/jpeg')
    

    
#上传图片
@app.route('/upload', methods=['GET', 'POST'])  
def upload_file():  

        # 获取文件
    file = request.files['file']
        # 检测文件格式
   

            # 使用uuid生成唯一图片名
    first_name = str(uuid.uuid4())
            # 将 uuid和后缀拼接为 完整的文件名
    file_name = first_name + '.' + 'jpg'
            # 保存原图
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], file_name))

    return file_name
    

    
@app.route('/addlist', methods=['GET', 'POST'])      
def addlist():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    name = request.values.get("name")
    img_src = request.values.get("img_src")
    
    cursor.execute("insert into que_list(name,img_src) values(%s,%s)",(name,img_src))
    
    
    db.commit()
	
	
	
    return "200"
    
    

@app.route('/addexcel', methods=['GET', 'POST'])   
def excel():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    file = request.files['file']
    
    list_id = request.values.get("list_id")
    

    
    df = pd.read_excel(file)
    
   
    
    
     
     
    for i in df.index.values:
        que = str(df.iloc[i]["que"])
        a = str(df.iloc[i]["a"])
        b = str(df.iloc[i]["b"])
        c = str(df.iloc[i]["c"])
        d = str(df.iloc[i]["d"])
        ans = str(df.iloc[i]["ans"])
        
        
        if(ans == 'a'):
            ans = '0'
        elif(ans == 'b'):
            ans = '1'
        elif(ans == 'c'):
            ans = '2'
        else:
            ans = '3'
   
        
        
        
        cursor.execute("REPLACE into que(que,list_id,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s,%s)",(que,list_id,a,b,c,d,ans,))
        
        db.commit()
        
    
        
        
        
        
        
        
        
       
  
    return "200"
    
    
#获取类型
@app.route("/getitem",methods=['POST','GET'])
def getitem():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    

    

    
    cursor.execute("select * from que_item")
    
    
    
    
        
    data = cursor.fetchall()
    

  
    
    return json.dumps(data)
        
        

@app.route("/getitemr",methods=['POST','GET'])
def getitemr():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    list_id = request.values.get("item_id")
    
    if(list_id == "-1"):
        cursor.execute("SELECT * from que order by rand() limit 1")
    else:
        cursor.execute("SELECT * from que where item_id = (%s) order by rand() limit 1 ",(list_id,))
	
 
   
	
	
	#查询结果 只查一个
    data = cursor.fetchone()
	
	
	
    return json.dumps(data)
    
    

#登录贝壳刷题
@app.route("/logins",methods=['POST','GET'])
def logins():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    id = request.values.get("id")
    pwd = request.values.get("pwd")
    
    #是否存在用户
    cursor.execute("SELECT * from user where id = %s",(id,))
    data = cursor.fetchall()
    
        #存在用户 登录
    if cursor.rowcount == 1:
        
        #判断用户密码是否正确
        cursor.execute("SELECT * from user where id = (%s) and pwd = (%s)",(id,pwd,))
        data = cursor.fetchall()
        if cursor.rowcount == 1:
            return "1"
        else:
            return "0"
    #不存在用户 注册
    else:
        cursor.execute("insert into user(id,pwd) values(%s,%s)",(id,pwd))
        db.commit()
        return "1"
        
    


#收藏
@app.route('/get_star', methods=['GET', 'POST'])      
def get_star():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    user_id = request.values.get("user_id")
    qid = request.values.get("qid")
    
    cursor.execute("insert into user_star(user_id,qid) values(%s,%s)",(user_id,qid))
    
    
    db.commit()
	
	
	
    return "200"
    

#判断是否收藏
@app.route("/is_star",methods=['POST','GET'])
def is_star():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    user_id = request.values.get("user_id")
    qid = request.values.get("qid")
    
    cursor.execute("SELECT * from user_star where user_id = (%s) and qid = (%s)",(user_id,qid))
    
    data = cursor.fetchall()
    

    
    if cursor.rowcount == 1:
        return "true"
    else:
        return "false"


#取消收藏
@app.route('/drop_star', methods=['GET', 'POST'])      
def drop_star():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    user_id = request.values.get("user_id")
    qid = request.values.get("qid")
    
    cursor.execute("delete from user_star where user_id = %s and qid = %s",(user_id,qid))
    
    
    db.commit()
	
	
	
    return "200"
    

#增加收藏人数
@app.route('/add_star', methods=['GET', 'POST'])      
def add_star():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    qid = request.values.get("qid")

    
    cursor.execute("update que set star = star + 1 where id = {}".format(qid))
    
    
    db.commit()
	
	
	
    return "200"
		

#减少收藏人数
@app.route('/del_star', methods=['GET', 'POST'])      
def del_star():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    qid = request.values.get("qid")

    
    cursor.execute("update que set star = star - 1 where id = {}".format(qid))
    
    
    db.commit()
	
	
	
    return "200"
    

#获取收藏列表
@app.route('/get_star_list', methods=['GET', 'POST'])      
def get_star_list():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    user_id = request.values.get("user_id")

    
    cursor.execute("select * from que where id in (select qid from user_star where user_id = %s)",(user_id,))

    data = cursor.fetchall()
    
    return json.dumps(data)
    
	
	
	
    return 
    
    
    

#增加收藏人数
@app.route('/add_heart', methods=['GET', 'POST'])      
def add_heart():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    qid = request.values.get("qid")

    
    cursor.execute("update que set heart = heart + 1 where id = {}".format(qid))
    
    
    db.commit()
	
	
	
    return "200"
    

#取消收藏
@app.route('/drop_heart', methods=['GET', 'POST'])      
def drop_heart():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    qid = request.values.get("qid")

    
    cursor.execute("update que set heart = heart - 1 where id = {}".format(qid))
    
    
    db.commit()
	
	
	
    return "200"
    
    
#提交评论
@app.route('/push_comment', methods=['GET', 'POST'])      
def push_comment():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    qid = request.values.get("qid")
    user_id = request.values.get("user_id")
    content = request.values.get("content")

    
    cursor.execute("insert into comment(qid,user_id,content) values(%s,%s,%s)",(qid,user_id,content,))
    
    
    db.commit()
	
	
	
    return "200"
    
    
#获取评论
@app.route('/get_comment', methods=['GET', 'POST'])      
def get_comment():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    qid = request.values.get("qid")


    #多级查询
    #select (select pwd from user where id = user_id),content from comment where qid = 23
    cursor.execute("select user_id,content from comment where qid = %s ORDER by id desc",(qid,))
    
    
    data = cursor.fetchall()

	
	
    return json.dumps(data)
    
    

#添加互动
@app.route('/react', methods=['GET', 'POST'])      
def react():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    get_id = request.values.get("get_id")
    push_id = request.values.get("push_id")
    qid = request.values.get("qid")
    type = request.values.get("type")
    
    
    

    #多级查询
    #select (select pwd from user where id = user_id),content from comment where qid = 23
    cursor.execute("insert into react(get_id,push_id,qid,type) values(%s,%s,%s,%s)",(get_id,push_id,qid,type,))
    
    
    db.commit()

	
	
    return "200"
  
  
#评论互动
@app.route('/react_comment', methods=['GET', 'POST'])      
def react_comment():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    get_id = request.values.get("get_id")
    push_id = request.values.get("push_id")
    qid = request.values.get("qid")
    content = request.values.get("content")
    type = request.values.get("type")
    
    
    

    #多级查询
    #select (select pwd from user where id = user_id),content from comment where qid = 23
    cursor.execute("insert into react(get_id,push_id,qid,content,type) values(%s,%s,%s,%s,%s)",(get_id,push_id,qid,content,type,))
    
    
    db.commit()

	
	
    return "200"
    
    
  
#获取互动  
@app.route('/get_react', methods=['GET', 'POST'])      
def get_react():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    user_id = request.values.get("user_id")
  
    
    
    

    #多级查询
    #select (select pwd from user where id = user_id),content from comment where qid = 23
    
    #select push_id,(select que from que where id = qid) from react where get_id = "老学长"
    cursor.execute("select push_id,type,(select que from que where id = qid),content from react where get_id = %s  order by id desc",(user_id,))
    
    
    data = cursor.fetchall()

	
	
    return json.dumps(data)
    
    
#获取未读信息
@app.route('/count_react', methods=['GET', 'POST'])      
def count_react():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    user_id = request.values.get("user_id")
  
    
    
    

    #多级查询
    #select (select pwd from user where id = user_id),content from comment where qid = 23
    
    #select push_id,(select que from que where id = qid) from react where get_id = "老学长"
    cursor.execute("select count(*) from react where get_id = %s and is_read = 0",(user_id,))
    
    
    data = cursor.fetchall()

	
	
    return json.dumps(data)
    
    
#获取未读信息
@app.route('/is_read', methods=['GET', 'POST'])      
def is_read():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    user_id = request.values.get("user_id")
  
    
    
    

    #多级查询
    #select (select pwd from user where id = user_id),content from comment where qid = 23
    
    #select push_id,(select que from que where id = qid) from react where get_id = "老学长"
    cursor.execute("update react set is_read = 1 where get_id = %s",(user_id,))
    
    
    db.commit()

	
	
    return "200"
if __name__ == '__main__':  
    app.run(host='0.0.0.0',port=5000,debug=True)