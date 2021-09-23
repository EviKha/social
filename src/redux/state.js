let rerenderEntireTree = ()=> {
    console.log('State changed')
};
let state = {

    profilePage: {
        posts: [
            {id:1, message: 'Hi! You have!', likeCount: '1000', img: 'https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg' },
            {id:2, message: 'Turn it up!', likeCount: '333', img: 'https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg' },
        ],
        newPostText : 'HELLOOOOOOO'
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


}
window.state=state;

export const addPost = () => {
    let newPost = {
        id: '5',
        message: state.profilePage.newPostText,
        likeCount:'0',
        img: 'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png'
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);

}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}
export const subscribe = (observer) => {}
export default state;