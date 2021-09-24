import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messageReducer';
const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogItems = state.dialogs.map(d => <Dialog id={d.id} name={d.name} />)
    let messageItem = state.messages.map(m => <Message text={m.text} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageCLick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let messagebody = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(messagebody));
    }
 

    return (
        <div className={st.dialogs}>
            <div className={st.dialogItems}>
                {dialogItems}
            </div>
            <div className={st.messages}>
                <div>{messageItem}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter Message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageCLick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;