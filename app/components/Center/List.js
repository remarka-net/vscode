import React from 'react';
import { FormattedMessage } from 'react-intl';
import CenterLink from './CenterLink';
import Input from '../Input/Input';
import './List.css';

const topics=[
    {id:1,title: 'files',link:'/'},
    {id:1,title: 'folders',link:'/'},
    {id:1,title: 'teachers',link:'/'}
]

const scope = 'boilerplate.containers.Center.'

export default function ToDoList(){
    return(
        <ul>
            {topics.map(topics => {
                const CenterId = scope + topics.title;
                    return (<lo>
                        <CenterLink to={topics.link}>  
                            <Input type ='checkbox' id ='input_check_box'/>  
                            <FormattedMessage id = {CenterId}/>

                        </CenterLink>
                    </lo>)
            })}
        </ul>
        )
    }