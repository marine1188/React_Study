//제 윤태 님 코드
//APP5 SET 
import React, { Component } from 'react';

class TopMenu2 extends Component {
	render() {
		var lists = [];
		var data = this.props.data;
		var i = 0;

		while (i < data.length) {

			lists = lists.concat(
				<li key={i}>
					<a href={"/content/" + data[i].no}
						onClick={(e) => {
							console.log(this.props.fn(e.target.href.split("/")[4]))
							this.props.fn(e.target.href.split("/")[4]);
							e.preventDefault();
						}}>{data[i].title}</a>
				</li>

			)
			i = i + 1;


		}

		return (
			<nav>
				<ul>
					{lists}
				</ul>
			</nav>
		);
	}
}

export default TopMenu2;