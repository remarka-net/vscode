import React from 'react';
import { FormattedMessage } from 'react-intl';
import Centermenu from './centermenu/Centermenu'
import  './index.css';
import ToDoList from './List';





function Center(){
    return(
        <div className = 'parent'>
            <Centermenu >
               <div className = 'messages'>
                    <FormattedMessage id = "boilerplate.containers.HomePage.h2"/>
                </div>
                <hr/>
                <ToDoList/>
            </Centermenu>
        </div>
    );
}
export default Center;