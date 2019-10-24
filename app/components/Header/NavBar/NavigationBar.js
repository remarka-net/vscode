import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavBarLink from '../NavBarLink';
import "./NavBar.css";
import './NavBar'

export default function Navbar(){
    return(
        <div className = "navbar">
          <div className = 'navcomponents'>
            <NavBarLink to="/">
              <FormattedMessage id="boilerplate.components.Header.about" />
            </NavBarLink>
            <NavBarLink to="/Test">
              <FormattedMessage id="boilerplate.components.Header.entrance" />
            </NavBarLink>
            <NavBarLink to="/history">
              <FormattedMessage id="boilerplate.components.Header.departments" />
            </NavBarLink>
            <NavBarLink to="/kafedra">
              <FormattedMessage id="boilerplate.components.Header.studing" />
            </NavBarLink>
            <NavBarLink to="/">
              <FormattedMessage id="boilerplate.components.Header.scientificWork" />
            </NavBarLink>
            <NavBarLink to="/">
              <FormattedMessage id="boilerplate.components.Header.deansOffice" />
            </NavBarLink>
            <NavBarLink to="/">
              <FormattedMessage id="boilerplate.components.Header.academicCouncil" />
            </NavBarLink>
          </div>
        </div> 
    )
}