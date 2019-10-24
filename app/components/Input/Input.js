import React from 'react';
import { FormattedMessage } from 'react-intl';

const Input = ({type, placeholder, id}) => (
    <div className="input">
        
        <FormattedMessage id="exchange_form.name">
            {(msg) => (
                <input type={type ? type : null} id = {id ? id : null} placeholder={placeholder ? placeholder : msg}/>
            )}
        </FormattedMessage>
    </div>
)

export default Input;