const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    messages: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'Im fine' },
        { id: 4, text: 'Bye!' },
    ],
    dialogs: [
        { id: '1', name: 'Manetka' },
        { id: '2', name: 'Samoedka' },
        { id: '3', name: 'Damirka' },
        { id: '4', name: 'Evelinka' }
    ],
    newMessageBody: ''
};
const messageReducer = (state = initialState, action) => {
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