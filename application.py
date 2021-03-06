from flask import Flask,request, render_template, g, redirect, Response
import os
from sqlalchemy import *
from sqlalchemy.pool import NullPool
import traceback

tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
app = Flask(__name__, template_folder=tmpl_dir)

#connect to database
DATABASEURI = "postgresql://cl3469:rezq8@104.196.175.120/postgres"
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
        PSW = str(request.form['PSW'])
        UName = str(request.form['UName'])
        EMAIL = str(request.form['EMAIL'])
        print PSW, UName,EMAIL
        profiles = g.conn.execute("Select UID from users where email=%s and psw=%s",EMAIL,PSW)
        if profiles:
            print profiles
            return render_template('sign-up.html', msg='User already existed!')
        else:
            g.conn.execute("INSERT INTO users(PSW, UName,EMAIL) VALUES (%s, %s, %s);",PSW, UName,EMAIL)
            profiles = g.conn.execute("Select UID from users where email=%s and psw=%s",EMAIL,PSW)
            for profile in profiles:
                UID=str(profile)[1]
            print UID
            redirect_to_index = render_template('/home.html',data="ok")
            response = app.make_response(redirect_to_index )
            response.set_cookie('uid',value=UID)
            response.set_cookie('name',value=UName)
            return response
    except:
        print traceback.print_exc()
        return 'Oops something goes wrong!'

##usersignin
@app.route('/login', methods=['POST'])
def login():
    try:
        PSW = str(request.form['PSW'])
        EMAIL = str(request.form['EMAIL'])
        print PSW, EMAIL
        profiles = g.conn.execute("Select UID from users where email=%s and psw=%s",EMAIL,PSW)
        UID=''
        for profile in profiles:
            UID=str(profile)[1]
        if UID:
            redirect_to_index = render_template('/home.html',data="ok")
            response = app.make_response(redirect_to_index )
            response.set_cookie('uid',value=UID)
            return response
        else:
            return render_template('sign-up.html', msg='User does not exist!')
    except:
        print traceback.print_exc()
        return 'Oops something goes wrong!'

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
