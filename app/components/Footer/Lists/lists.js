import React from 'react';
import TodoItems from './listItems';
import { FormattedMessage } from 'react-intl';
import HeaderLink from './HeaderLink';


const scope = 'boilerplate.components.Header.';

const topics=[
    {id: 1, title: 'about', link: '/'},
    {id: 2, title: 'entrance', link: '/'},
    {id: 3, title: 'departments', link: '/'},
    {id: 4, title: 'scientificWork', link: '/'},
    {id: 5, title: 'studing', link: '/'},
    {id: 6, title: 'deansOffice', link: '/'},
    {id: 7, title: 'academicCouncil', link: '/'},
    {id: 8, title: 'usefulLinks', link: '/'},
  ]

export default function TodoLists(){
    return(
        <div className="Lists">
        { topics.map(topic => {
            const footerId = scope + topic.title;
            return (
                <div>
                        <HeaderLink to={topic.link}>
                            <FormattedMessage id={footerId} />
                        </HeaderLink>
                        <TodoItems  topic={topic.title} />
                </div>)
                })}
        </div> 
    )
}