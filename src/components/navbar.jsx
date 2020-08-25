import React, { Component } from "react";
class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					<b>Navbar</b>
		<span className="badge badge-pill badge-secondary m-2">{this.props.totalcounters}</span>
				</a>
			</nav>
		);
	}
}

export default NavBar;
