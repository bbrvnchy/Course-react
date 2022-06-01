import {rerenderEntireTree} from "../render";

const state = {
    profilePage:{
        posts: [
            {message:'Hello world', likesCount:11},
            {message:'Hi, how are you?', likesCount:12}
        ],
    },
    dialogsPage:{
        dialogs: [
            { name: 'Misha', id: '1' },
            { name: 'Leo', id: '2' },
            { name: 'Lena', id: '3' },
            { name: 'Nastya', id: '4' }
        ],
        messages: [
            { message: 'hello' },
            { message: 'How are you?' },
            { message: 'How are you?' },
        ]
    }
}

export let addNewPost = (postMessage) =>{
    let newPost = {
        message: postMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)

    rerenderEntireTree(state)
}

export default state;