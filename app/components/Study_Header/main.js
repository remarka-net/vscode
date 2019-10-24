import React from 'react';
import './main.css';

export default class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: `Звіти практики`,
      two: `Переддипломна практика 4-й курс`,
      three: `Переддипломна практика 6-й курс`,
    };
  }

  render() {
    return (
      <div>
        <ul id="headlines">
          <li>
            <a href="">{this.state.one}</a>
          </li>
          <li>
            <a href="">{this.state.two}</a>
          </li>
          <li>
            <a href="">{this.state.three}</a>
          </li>
        </ul>
      </div>
    );
  }
}
