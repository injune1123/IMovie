import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MovieListRow = ({movie}) =>{
	return (
		<tr>
			<td><a href={movie.playableUrl} target="_blank">Watch</a></td>
			<td>{movie.vid}</td>				
			<td><Link to={'/movie/'+ movie.vid}>{movie.name}</Link></td>
			<td>{movie.category}</td>
			<td>{movie.snapshot}</td>
			<td>{movie.playableUrl}</td>
		</tr>
	);
};

MovieListRow.propTypes = {
	movie: PropTypes.object.isRequired
};

export default MovieListRow;
