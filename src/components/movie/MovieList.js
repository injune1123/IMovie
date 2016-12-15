import React, {PropTypes} from 'react';
import MovieListRow from './MovieListRow';

const MovieList = ({movies}) =>{
	return (
		<table className="table">
			<thead>
			<tr>
				<th>&nbsp;</th>
				<th>vid</th>				
				<th>name</th>
				<th>category</th>
				<th>Snapshot url</th>
				<th>S3 playable url</th>
			</tr>
			</thead>
			<tbody>
				{movies.map( movie =>
					<MovieListRow key={movie.vid} movie={movie} />
				)}
			</tbody>	
		</table>
	);
};

MovieList.propTypes = {
	movie: PropTypes.array.isRequired
};

export default MovieList;