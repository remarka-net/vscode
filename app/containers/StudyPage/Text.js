/* eslint-disable lines-between-class-members */
import React from 'react';

export default class HelloComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      massage: `Hello world! Come to me!`,
    };
  }
  render() {
    return (
      <div id="firstBlock">
        <h1>{this.state.massage}</h1>
      </div>
    );
  }
}
