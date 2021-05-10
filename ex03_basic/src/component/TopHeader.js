import React, { Component } from 'react';

class TopHeader extends Component {
  render() {
    const { data, onChangePage } = this.props;
    return (
      <div>
        {data.map((value, key) => {
          return (
            <li>
              <a
                onClick={() => {
                  onChangePage(value.id);
                }}
                value={value.id}
              >
                {value.name}
              </a>
            </li>
          );
        })}
      </div>
    );
  }
}
export default TopHeader;