import React, {PropTypes} from 'react';


class StringRecommendation extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			recommendationList : [1]
		}
	}
	componentDidMount(){
		socket.on('message', function(data){
		console.log("get data in string list")
        var res=JSON.parse(data);
        console.log(data);

      });
	}

	render(){

		return(
		<div id="recommended-string-div">
			{this.state.recommendationList.map(
				function(item){
				return (<span>hi</span>);
				}
			)}
		</div>
		);
	}
}

export default StringRecommendation;