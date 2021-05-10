
import React, { useState, useEffect, Component } from 'react';
import TopHeader from './component/TopHeader';

class App4 extends Component {
  constructor() {
    super();
    this.state = {
      contents: [
        { id: 0, content: 'blanblan', name: '김연아' },
        { id: 1, content: 'blanblan2', name: '이순신' },
        { id: 2, content: 'blanblan3', name: '세종대왕' },
      ],
      selected: 0,
    };
  }
  onChangePage = (no) => {
    this.setState({ selected: no });
  };
  render() {
    return (
      <div>
        <TopHeader
          data={this.state.contents}
          onChangePage={this.onChangePage}
        ></TopHeader>
        {JSON.stringify(this.state.contents[this.state.selected])}
      </div>
    );
  }
}

export default App4;
​