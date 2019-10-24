import React from 'react';
import TodoLists from './Lists/lists';
import A from 'components/A';
import './Wrapper.css';
import Vector from './vector.png';


function Footer() {

  return (
    <div className="Wrapper">
        <TodoLists />
        <A href="/">
          <img className="ButtonUp" src={Vector} alt="scroll up" />
        </A>
    </div>
  );
}

export default Footer;
