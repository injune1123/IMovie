import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from  'toastr';
import {Link} from 'react-router';



class SignupPage extends React.Component{

	constructor(props, context) {
		super(props, context);
		this.saveCurUserInfo = this.saveCurUserInfo.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {value: ''};
	}

	saveCurUserInfo(){
		sessionStorage.currentUserId=this.state.value;
	    data = {};
        data['uid'] = sessionStorage.currentUserId;
        data['mid'] = 99822;
        data['epoch'] = new Date().getTime();
        console.log('uid',data);
        socket.emit('click_video', data);
	}
	handleChange(event) {
    	this.setState({value: event.target.value});
    }
	render () {
		return (
			<div className="wrapper" id="signup-wrapper">
				<form className="form-signup">
				<h2 className="form-signup-heading">Please Signup</h2>

				<input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
				<input type="password" className="form-control" name="password" placeholder="Password" required="" />      
				<input type="password" className="form-control" name="re-password" placeholder="Confirm Password" required="" />      
				<Link to="movies">
					<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.saveCurUserInfo}>Sign Up</button>   
				</Link>

				</form>
			</div>
		);
	}
}

export default SignupPage;


