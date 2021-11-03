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
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = { ...state };
            stateCopy.newMessageBody = action.messagebody;
            return stateCopy;
        }

        case SEND_MESSAGE:
            {
                let stateCopy = { ...state };
                let messagebody = stateCopy.newMessageBody;
                stateCopy   .newMessageBody = '';
                stateCopy.messages = [...state.messages];
                stateCopy.messages.push({ id: 6, text: messagebody });
                return stateCopy;
            }
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