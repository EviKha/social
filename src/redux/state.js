const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
                { text: 'Hi' },
                { text: 'How are you?' },
                { text: 'Im fine' },
                { text: 'Bye!' },
            ],
            dialogs: [
                { id: '1', name: 'Manetka' },
                { id: '2', name: 'Samoedka' },
                { id: '3', name: 'Damirka' },
                { id: '4', name: 'Evelinka' }
            ]
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
    }


}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
window.store = store;


export default store;