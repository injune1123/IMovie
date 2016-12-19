import React, {PropTypes} from 'react';


class StringRecommendation extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			recommendationList : []

		}
	}
	componentDidMount(){
		var that = this;
		socket.on('message', function(data){
		console.log("get data in string list")
        var res=JSON.parse(data);
        console.log(res);
        var recList = res.rec_list;
        that.setState({recommendationList : recList});
      });
	}

	render(){

		return(
		<div id="recommended-string-div">
			<h1>Recommended for you</h1>
			{this.state.recommendationList.map(
				function(item){
				return (<span>{item}</span>);
				}
			)}
		</div>
		);
	}
}

export default StringRecommendation;