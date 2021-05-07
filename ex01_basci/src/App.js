/* src/App.js */
import React, { Component } from 'react';


//컴포너트 만들기 
class ModuleEX extends Component {
	render() {
		return (
			<header>
				<div>Hello world!!!***</div>

			</header>

		);
	}
}

class MyInfo extends Component {
	render() {
		return (
			<header>
				<div>
					<table >
						<tr>
							<th colSpan="2">나의 정보 </th>
						</tr>
						<tr>
							<td>이름 :</td>
							<td>조성규</td>
						</tr>
						<tr>
							<td>취미 :</td>
							<td>스킨스쿠버</td>
						</tr>
						<tr>
							<td>성향 :</td>
							<td>외향 </td>
						</tr>
					</table>
				</div>

			</header>

		);
	}
}


class App extends Component {
	render() {
		return (
			<div className='App'>
				<ModuleEX></ModuleEX>
				<MyInfo></MyInfo>
			</div>

		);
	}
}

export default App;

