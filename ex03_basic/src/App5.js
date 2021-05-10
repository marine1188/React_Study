// TopMenu2.js 와  set
import React, { Component } from 'react';
import TopMenu2 from './component/TopMenu2';
import BodyContnet from './component/BodyContnet';
import MainTitle from './component/MainTitle';

// 컴포넌트 분리 
// state 사용
class App5 extends Component {
	constructor(props) {
		super(props);
		console.log('constructor');
	}
	state = {
		option: 'read',
		subject: { title: '인물 소개', sub: '우리나라를 빛낸 인물들!!' },
		welcome: { title: 'welcome', sub: 'Hello, React!!!' },
		contents: [
			{ no: 1, title: '연아는.....', desc: '수정했어요.2014년 동계 올림픽 여자 싱글 부문 은메달 ...' },
			{ no: 2, title: '순신이는.....', desc: '이순신 장군 연혁~ ...' },
			{ no: 3, title: '세종대왕은.....', desc: '세종대왕 연혁~ ' },
		],
		_title: "welcome",
		_desc: "Hello, React!!!",

	}
	change = (i) => {
		let _title = ''
		let _desc = ''
		console.log(i)
		debugger;
		if (this.state.option === 'welcome') {
			_title = this.state.welcome.title
			_desc = this.state.welcome.sub;

		}
		else if (this.state.option === 'read') {


			this.setState((prevState) => ({


				_title: this.state.contents[i - 1].title,
				_desc: this.state.contents[i - 1].desc,



			}));




		}

		console.log("안")
		
	}


	render() {
		console.log("render")
		var _title, _desc = null;
		// debugger;
		return (
			<div>
				{/* <MainTitle
					title={this.state.subject.title}
					sub={this.state.subject.sub}
				></MainTitle> */}
				<header>
					<h1>
						<a href="/" onClick={(e) => {

							alert('event process')
							console.log(e);
							//debugger; /* 잠깐멈추기 */
							// e.preventDefault(); //태그가 갖고 있는 기본동작을 못하게 할 때 사용 리렌더링안되게 막는다.
						}
						}>{this.state.subject.title}</a>


					</h1>
					<h2>{this.state.subject.sub}</h2>
				</header>
				<TopMenu2 data={this.state.contents} fn={this.change}></TopMenu2>

				<BodyContnet title={this.state._title} desc={this.state._desc}></BodyContnet>

				<h2>{this.state._title}{this.state._desc} ㅎ</h2>


			</div>
		);
		
	}
}


export default App5;