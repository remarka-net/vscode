import React from 'react';
import './index.css';
import DOC from './DOC.png';

export default class PracticeFinal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const thFirstWidth = {
      width: '2%',
    };

    /*    let inputStyle = {
            border: '1px solid black'
          }; */

    const thSecondWidth = {
      width: '18%',
    };

    return (
      <table id="master_practice">
        <tr name="head_table">
          <th style={thFirstWidth} />
          <th style={thSecondWidth} />
        </tr>

        <tr name="first">
          <td>
            <img src={DOC} alt="XML" />
          </td>
          <td>
            <a href="">Щоденник</a>
          </td>
        </tr>

        <tr name="second">
          <td>
            <img src={DOC} alt="XML" />
          </td>
          <td>
            <a href="">Робоча программа</a>
          </td>
        </tr>

        <tr name="third">
          <td>
            <img src={DOC} alt="XML" />
          </td>
          <td>
            <a href="">Договір на практику</a>
          </td>
        </tr>

        <tr name="fourth">
          <td>
            <img src={DOC} alt="XML" />
          </td>
          <td>
            <a href="">Опис практик</a>
          </td>
        </tr>
      </table>
    );
  }
}
