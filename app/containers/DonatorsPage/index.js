import React from 'react';
import './index.css';
import { FormattedMessage } from 'react-intl';
import Images from './images'


export default function DonatorsPage(){
    return(
        <div className = 'page'>
            <h1 className ='Title'>
                <FormattedMessage id = 'boilerplate.containers.Donators.h1' className ='title'/>
            </h1>
            <div className = 'listtitle'>
                <FormattedMessage id = 'boilerplate.containers.Donators.ListTitle'/>
            </div>
            <div className='images'>
                <Images/>
            </div>
        </div>
    )
}