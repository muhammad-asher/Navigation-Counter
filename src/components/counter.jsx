import React, { Component } from "react";
class Counter extends Component {
	

	//one approch to bind event handlers
	//constructor() {
	//	super();
	//	this.handleIncrement = this.handleIncrement.bind(this);
	//}

	//arrow functions dont rebind this keyword they inherit it
	
	render() {
		console.log(this.props);
		
		return (
			<React.Fragment className="row">
				<span style={{ fontSize: 18 }} className={this.getbadgeclasses()}>
					{this.formatcount()}
				</span>
				
				<button
					onClick={()=>this.props.onIncrement(this.props.counter )}
					style={{ fontSize: 20 }}
					className="btn btn-secondary btn-sm"
				>
					Increment +
				</button>
				<button
					onClick={()=>this.props.onDecrement(this.props.counter )}
					style={{ fontSize: 20 }}
					className="btn btn-secondary btn-sm m-2"
					disabled={this.props.counter.value===0 ?'disabled':""}
				>
					Decrement -
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					style={{ fontSize: 20 }}
					className="btn btn-danger btn-sm m-2"
				>
					Delete 
				</button>
				<br></br>
			</React.Fragment>
		);
	}
	getbadgeclasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatcount() {
		const { value: count } = this.props.counter ;
		return count === 0 ? "Zero" : count;
	}
} 

export default Counter;
