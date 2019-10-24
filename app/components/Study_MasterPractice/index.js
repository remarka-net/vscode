import React from 'react';
import './index.css';
import PDF from './PDF.png';

export default class PracticeMaster extends React.Component {
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
      width: '28%',
    };

    return (
      <table id="master_final_practice">
        <tr name="head_table">
          <th style={thFirstWidth} />
          <th style={thSecondWidth} />
        </tr>

        <tr name="first">
          <td>
            <img src={PDF} alt="XML" />
          </td>
          <td>
            <a href="">Opis_zvitu_z_praktiki (Yandovich) (1).pdf</a>
          </td>
        </tr>

        <tr name="second">
          <td>
            <img src={PDF} alt="XML" />
          </td>
          <td>
            <a href="">Робоча программаOpis_zvitu_z_praktiki_Bielavin.pdf</a>
          </td>
        </tr>

        <tr name="third">
          <td>
            <img src={PDF} alt="XML" />
          </td>
          <td>
            <a href="">Opis_zvitu_z_praktiki_Bobruiko.pdf</a>
          </td>
        </tr>

        <tr name="fourth">
          <td>
            <img src={PDF} alt="XML" />
          </td>
          <td>
            <a href="">Opis_Zvitu_Z_Praktiki_Kalambet (1).pdf</a>
          </td>
        </tr>
      </table>
    );
  }
}
