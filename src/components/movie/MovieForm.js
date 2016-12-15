import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const MovieForm = ({movie, allAuthors, onSave, onChange, saving, errors}) =>{
	return(
		<form>
			<h1>Manage Movie</h1>
			<TextInput
				name="name"
				label="Name"
				value={movie.name}
				onChange={onChange}
				error={errors.title}/>
			<SelectInput
				name="authorId"
				label="Author"
				value={movie.authorId}
				defaultOption="Select Author"
				options={allAuthors}
				onChange={onChange}
				error={errors.authorId}
			/>
			<TextInput
				name="category"
				label="Category"
				value={movie.category}
				onChange={onChange}
				error={errors.category}
			/>
			<TextInput
				name="vid"
				label="Vid"
				value={movie.vid}
				onChange={onChange}
				error={errors.vid}
			/>
			<TextInput
				name="playableUrl"
				label="PlayableUrl"
				value={movie.playableUrl}
				onChange={onChange}
				error={errors.playableUrl}
			/>
			<TextInput
				name="snapshot"
				label="snapshot"
				value={movie.snapshot}
				onChange={onChange}
				error={errors.snapshot}
			/>
			<input
				type="submit"
				disabled={saving}
				value={saving ? "Saving..." : "save"}
				className="btn btn-primary"
				onClick={onSave}
			/>
		</form>
	);
};

MovieForm.propTypes = {
	movie: React.PropTypes.object.isRequired,
	allAuthors: React.PropTypes.array,
	onSave: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired,
	saving: React.PropTypes.bool,
	errors: React.PropTypes.object
};

export default MovieForm;