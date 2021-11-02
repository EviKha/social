import React from 'react';
import Dialogs from './Dialogs'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messageReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: () => {
            dispatch(sendMessageCreator());          
        },
        sendMessage: (body) => {
              dispatch(updateNewMessageBodyCreator(body));
        }
    }
};
const SuperDialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogContainer;