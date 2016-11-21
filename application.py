from flask import Flask,request, render_template, g, redirect, Response,jsonify
import os,csv
from sqlalchemy import *
from sqlalchemy.pool import NullPool
import traceback

tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
public_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
app = Flask(__name__, template_folder=tmpl_dir, static_folder=public_dir,static_url_path='')

#connect to database
host = "104.196.175.120" 
password ="rezq8"  
user =  "cl3469"
DATABASEURI = "postgresql://%s:%s@%s/postgres" % (user, password, host)
engine = create_engine(DATABASEURI)
import logging

logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)
@app.before_request
def before_request():
  """
  This function is run at the beginning of every web request
  (every time you enter an address in the web browser).
  We use it to setup a database connection that can be used throughout the request
  The variable g is globally accessible
  """
  try:
    g.conn = engine.connect()
  except:
    print "uh oh, problem connecting to database"
    traceback.print_exc()
    g.conn = None

@app.teardown_request
def teardown_request(exception):
  """
  At the end of the web request, this makes sure to close the database connection.
  If you don't the database could run out of memory!
  """
  try:
    g.conn.close()
  except Exception as e:
    pass

@app.route('/insertM')
def insertM():

  # print to_id,from_id
  with open(public_dir+'/vc.csv', 'rb') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')

    cat ={}
    for row in spamreader:
      ct=0
      print row
      for e in row:
        if len(e)>0: ct+=1
      if ct == len(row):
        try:
           g.conn.execute("INSERT into movie values (%s,%s,%s,%s)",row[0],row[1],row[2],row[3])
        except Exception as e:
          print e
        try:
          try:
            cursor =  g.conn.execute("select tid from tags where TNAME=%s;",row[4])
            tid = cursor.fetchone()[0]
          except:
            cursor = g.conn.execute("INSERT into tags(TNAME) values (%s); select max(tid) from tags;",row[4])
            tid = cursor.fetchone()[0]

          g.conn.execute("INSERT into movie_tag(mid,tid) values(%s,%s);",row[0],tid)
        except Exception as e:
          print e
  # g.conn.execute("INSERT into msg values (%s,%s,%s,%s)",int(time.time()),from_id,to_id,text)

  return jsonify(data="ok")

@app.route('/')
def hello_world():
    return render_template('home.html')

@app.route('/signup')
def signup():
	return render_template('sign-up.html')

@app.route('/signin')
def signin():
	return render_template('signin.html')


'''
@app.route('/')
def signin():
	return render_template('signin.html')

##add a new user
@app.route('/adduser', methods=['POST'])
def adduser():
    	try:
		PID = str(request.form['PID'])
		SHP = str(request.form['SHP'])
		print PID, SHP

		g.conn.execute("INSERT INTO Posses_Stats(SID,PID) VALUES (\'" + PID + "\',\'" + SHP + "\');")
		return render_template("signup.html")
	except Exception, e:
		print traceback.print_exc()
		return 'False'

'''
if __name__ == '__main__':
    import click
    @click.command()
    @click.option('--debug', is_flag=True)
    @click.option('--threaded', is_flag=True)
    @click.argument('HOST', default='0.0.0.0')
    @click.argument('PORT', default=8111, type=int)
    def run(debug, threaded, host, port):
        """
        This function handles command line parameters.
        Run the server using

            python server.py

        Show the help text using

            python server.py --help
        """
        HOST, PORT = host, port
        print "running on %s:%d" % (HOST, PORT)
        app.run(host=HOST, port=PORT, debug=debug, threaded=threaded)

    run()
