import React from 'react';
import Dialogs from './Dialogs'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messageReducer';
const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageCLick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (messagebody) => {
        props.store.dispatch(updateNewMessageBodyCreator(messagebody));
    }
 

    return <Dialogs sendMessage = {onSendMessageCLick} newMessage={onNewMessageChange} messagesPage={state}/>
}

export default DialogsContainer;