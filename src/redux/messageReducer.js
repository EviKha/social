const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.messagebody;
            return state;
        case SEND_MESSAGE:
            let messagebody = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, text: messagebody });
            return state;
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (messagebody) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    messagebody: messagebody
})
export default messageReducer;