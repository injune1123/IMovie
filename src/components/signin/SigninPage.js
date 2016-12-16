import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from  'toastr';
import {Link} from 'react-router';



class SigninPage extends React.Component{

	render () {
		return (
			<div className="wrapper">
				<form className="form-signin">       
					<h2 className="form-signin-heading">Please login</h2>
					<input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
					<input type="password" className="form-control" name="password" placeholder="Password" required="" />      
					<label className="checkbox">
						<input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
					</label>
					<Link to="movies">
						<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
					</Link>
				</form>
			</div>
		);
	}
}

export default SigninPage;


