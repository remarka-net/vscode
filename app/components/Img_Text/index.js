import React from 'react';
import { FormattedMessage } from 'react-intl';
import Img from '../../components/Img/index'
import './index.css'

const Img_text = ({ image, text }) => (
    <div className="img_text">
        <Img src={image} className = "imgstyle"/>
        <div className='Text'>
            <FormattedMessage id={text}/>
        </div>
    </div>
)

export default Img_text;