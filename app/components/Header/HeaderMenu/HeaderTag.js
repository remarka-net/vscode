import React from 'react';
import { FormattedMessage } from 'react-intl';
import HeaderLink from '../HeaderLink';
import './HeaderMenu';
import './HeaderMenu.css';
import its_48u from '../images/its_48u.png';


export default function Header(){
  return(
    <div className = 'header'>
      <img src = {its_48u}  className = "logo"/>
        <div className = 'title'>
          <HeaderLink  to="/">
            <FormattedMessage id="boilerplate.components.Header.instituteName" />
          </HeaderLink>
        </div>
        <div className = 'links'>
          <HeaderLink to="/study">
            <FormattedMessage id="boilerplate.components.Header.studing" />
          </HeaderLink>
          <HeaderLink to='/'>
            <FormattedMessage id="boilerplate.components.Header.univercity" />
          </HeaderLink >
          <HeaderLink to="/">
              <FormattedMessage id="boilerplate.components.Header.workForStudents" />
          </HeaderLink>
          <HeaderLink to="/">
              <FormattedMessage id="boilerplate.components.Header.magazine" />
          </HeaderLink>
          <HeaderLink to="/">
              <FormattedMessage id="boilerplate.components.Header.conferences" />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage id="boilerplate.components.Header.graduates" />
          </HeaderLink>
        </div>
    </div>
  )
}