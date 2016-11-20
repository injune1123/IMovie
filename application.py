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
  except Exception as e:
    pass

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/signup')
def signup():
	return render_template('signup.html')

@app.route('/signin')
def signin():
	return render_template('signin.html')

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
