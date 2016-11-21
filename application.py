from flask import Flask,request, render_template, g, redirect, Response
import os
from sqlalchemy import *
from sqlalchemy.pool import NullPool
import traceback

tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
app = Flask(__name__, template_folder=tmpl_dir)

#connect to database
DATABASEURI = "postgresql://jz2685:d88tn@104.196.175.120:5432/postgres"
engine = create_engine(DATABASEURI)

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
  except Exception:
    pass

@app.route('/')
def welcome():
    return render_template('welcome.html')

@app.route('/signup')
def signup():
	return render_template('sign-up.html')

@app.route('/signin')
def signin():
	return render_template('sign-in.html')

@app.route('/home')
def home():
    return render_template('home.html')

##add a new user
@app.route('/adduser', methods=['POST'])
def adduser():
    	try:
		UNAME = str(request.form['uname'])
		PSW = str(request.form['psw'])
		print UNAME,PSW
		g.conn.execute("INSERT INTO USER(UNAME,PSW) VALUES (\'" + UNAME + "\',\'" + PSW + "\');")
		return render_template("signup.html")

	except Exception:
		print traceback.print_exc()
		return 'False'

if __name__ == '__main__':
    import click
    @click.command()
    @click.option('--debug', is_flag=True)
    @click.option('--threaded', is_flag=True)
    @click.argument('HOST', default='0.0.0.0')
    @click.argument('PORT', default=8111, type=int)
    def run(debug, threaded, host, port):

        HOST, PORT = host, port
        print "running on %s:%d" % (HOST, PORT)
        app.run(host=HOST, port=PORT, debug=debug, threaded=threaded)

    run()
