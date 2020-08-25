import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
	
	render() {
		return (
			<div>
				<button
					style={{ fontSize: 20 }}
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm m-2 "
				>
					Reset
				</button>
				<br></br>

				{this.props.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={this.props.onDelete}
						counter={counter}
						onDecrement={this.props.onDecrement}
						onIncrement={this.props.onIncrement}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
