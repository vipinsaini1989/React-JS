import React from 'react';

class MyCookies extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			numCookies: 2
		}
		this.handleCookiesUpdate = this.handleCookiesUpdate.bind(this);
	}
	handleCookiesUpdate(numCookies){
		this.setState({
			numCookies
		});
	}
	render(){
		const {numCookies} = this.state;
		return(
			<div>
        		<MyFun club={'vipin'} />
				<CookiesCounter numCookies={numCookies} />
				<AddRemove 
					numCookies={numCookies}
					onCookieUdate = {this.handleCookiesUpdate}
				/>
			</div>
			)
	}
}
class AddRemove extends React.Component {
	render(){
		const {onCookieUdate, numCookies}= this.props;
		return(
		<div>
		<button onClick={()=>onCookieUdate(numCookies +1)}> Add Cookie </button>
		<button onClick={()=>onCookieUdate(numCookies -1)}> Eat Cookie </button>
		</div>
		)
	}
}
const CookiesCounter = ({numCookies =0})=>{
	return(
			<h2> We have {numCookies} { numCookies <=1 ? 'cookie' : 'cookies'} </h2>
		);
}

const MyFun = (props)=>{
	const {club="wait"}= props;
	return(<h1> hello {club} </h1>);
}

export default MyCookies;