import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
const Dialogs = (props) => {
  
    

    let dialogItems = props.dialogData.map(d => <Dialog id={d.id} name={d.name} />)
    let messageItem = props.messageData.map(m=>  <Message text={m.text} />)

    return (
        <div className={st.dialogs}>
            <div className={st.dialogItems}>
                {dialogItems}
            </div>
            <div className={st.messages}>
               {messageItem}
            </div>
        </div>
    )
}

export default Dialogs;