import React from 'react';
import st from './Message.module.css';
const Message = (props) => {
    let text = props.text;
    return (
        <div className={st.message}>
            {text}
        </div>
    )
}

export default Message;