import profileReducer from './profileReducer';
import messageReducer from './messageReducer';

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }


}



window.store = store;


export default store;