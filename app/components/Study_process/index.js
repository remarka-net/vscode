import React from 'react';
import './index.css';
import XML from './XML.png';

export default class Process extends React.Component {
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
      width: '40%',
    };

    const thThirdWidth = {
      width: '10%',
    };
    /* Дорешать вопрос с шириной таблицы, возможно сделать max-width OR display-flex */

    return (
      <div id="proc">
        <h1>Навчальний процес</h1>
        <p>Навчальні плани</p>
        <table id="study_practice">
          <tr name="head_table">
            <th style={thFirstWidth}>Тип</th>
            <th style={thSecondWidth}>Назва</th>
            <th style={thThirdWidth}>Змінено</th>
            <th style={thThirdWidth}>Ким змінено</th>
          </tr>

          <tr name="first">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_бакалаври__2016_2015_ІТС</a>
            </td>
            <td className="pr_change">06.02.2019 12:57</td>
            <td className="pr_change">Биков П.І.</td>
          </tr>

          <tr name="second">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_бакалаври__2016_2015_ІТС</a>
            </td>
            <td className="pr_change">06.02.2019 12:57</td>
            <td className="pr_change">Биков П.І.</td>
          </tr>

          <tr name="third">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_бакалаври__2016_2015_ІТС</a>
            </td>
            <td className="pr_change">06.02.2019 12:57</td>
            <td className="pr_change">Биков П.І.</td>
          </tr>

          <tr name="fourth">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_бакалаври__2016_2015_ІТС</a>
            </td>
            <td className="pr_change">06.02.2019 12:57</td>
            <td className="pr_change">Биков П.І.</td>
          </tr>

          <tr name="fifth">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_млад.специалист_2017_ІТС_ІТМ-ПЕРЕХОДНОЙ_2018</a>
            </td>
            <td className="pr_change">06.02.2019 12:57</td>
            <td className="pr_change">Биков П.І.</td>
          </tr>
        </table>
      </div>
    );
  }
}
