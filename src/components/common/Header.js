import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) =>{
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			<span>{" | "}</span>
			<Link to="/movies" activeClassName="active">Movies</Link>
			<span>{" | "}</span>
			<Link to="/about" activeClassName="active">About</Link>
			<span>{" | "}</span>
			<Link to="/me" activeClassName="active">User</Link>
			{loading && <LoadingDots interval={100} dots={20}/>}
		</nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;

/**
*import React from 'react';
*import AppBar from 'material-ui/AppBar';
*/
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

/**const AppBarExampleIcon = () => (
*  <AppBar
*    title="Title"
*    iconClassNameRight="muidocs-icon-navigation-expand-more"
*  />
*);
*
*export default AppBarExampleIcon;
*/