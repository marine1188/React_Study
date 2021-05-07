/* src/js/SalesHistory.js */
import React, { Component } from 'react';

//컴포너트 만들기 

class Title extends Component {

	render() {
		return (
			<div>
				<h1>슈퍼 물건 판매내역 </h1>
			</div>
		);
	}
}

class InputSale extends Component {
	render() {
		return (
			<div>
				<table>
					<tr>
						<th colSpan="2">슈퍼 물건 판매 내역 - 입력 화면 -</th>
					</tr>

					<tr>
						<td>판매일자</td>
						<td><input id="" name="sell_date" type="date"></input></td>
					</tr>
					<tr>
						<td>분류</td>
						<td>
							<select name="sell_object">
								<option value="">분류 선택</option>
								<option value="식품">식품</option>
								<option value="야채">야채</option>
								<option value="과일">과일</option>
							</select>
						</td>

					</tr>
					<tr>
						<td>제품</td>
						<td>
							<input type="taxt" name="sell_product"></input>
						</td>

					</tr>

					<tr>
						<td>단가</td>
						<td>
							<input type="text" id="sell_price" name="sell_price" />
						</td>
					</tr>

					<tr>
						<td>수량</td>
						<td>
							<input type="text" name="amount" value="1" size="3" onchange="change();" />
						</td>
					</tr>

					<tr>
						<td>금액</td>
						<td>
							<input type="text" id="sell_sum"name="sell_sum"></input>
						</td>
					</tr>
				</table>
			</div>
		);
	}

}

class SalesTable extends Component {
	render() {
		return (
			<div>
				<table>
					<tr>
						<td>판매일자</td>
						<td>분류</td>
						<td>제품</td>
						<td>수량</td>
						<td>금액</td>
					</tr>
				</table>
			</div>

		);
	}
}



class SaleHistory extends Component {
	render() {
		return (
			<div className='SaleHistory'>
				<Title></Title>
				<InputSale></InputSale>
				<SalesTable></SalesTable>

			</div>

		);
	}
}

export default SaleHistory;

