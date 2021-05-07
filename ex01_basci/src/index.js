import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

import App from './App';

//reander() : 레엑트 컴포넌트 , 화면에 html 뷰를 생성 해주는 역활을 한다 
/* ReactDOM.render(<p>Hello world!!!</p>, document.getElementById('root')); */


// 들어갈 내용 어떠한 테그가 들어가야한다 앞뒤로 
ReactDOM.render(<App/>,
	 document.getElementById('root'));
