import React, {propTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>{
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="/movie" activeClassName="active">Movie</Link>
			{" | "}
			<Link to="/about" activeClassName="active">About</Link>
		</nav>
	);
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