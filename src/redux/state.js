const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi! You have!', likeCount: '1000', img: 'https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg' },
                { id: 2, message: 'Turn it up!', likeCount: '333', img: 'https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg' },
            ],
            newPostText: 'HELLOOOOOOO'
        },
        messagesPage: {
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
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost = {
                id: '5',
                message: this._state.profilePage.newPostText,
                likeCount: '0',
                img: 'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png'
            }
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.messagebody;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let messagebody = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({ id: 6, text: messagebody });
            this._callSubscriber(this._state);
        }
    }


}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (messagebody) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    messagebody: messagebody
})

window.store = store;


export default store;