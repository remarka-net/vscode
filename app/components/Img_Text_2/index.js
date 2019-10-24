import React from 'react';
import { FormattedMessage } from 'react-intl';
import Img from '../../components/Img/index'
import './index.css'


const Img_text_2 = ({ image, text }) => (
    <div className="img">
        <div className = 'img2'>
            <Img src={image} className = "imgstyle"/>
        </div>
        <FormattedMessage id={text}/>
    </div>
)

export default Img_text_2;