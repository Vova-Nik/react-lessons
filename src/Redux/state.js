//import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsArr: [
            {
                id: 0,
                ava: "ava1.jpg",
                postName: "post 1",
                likesCount: 21,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },
            {
                id: 1,
                ava: "ava2.png",
                postName: "post 2",
                likesCount: 22,
                content: "Vivamus rutrum nisl non mauris consectetur ultricies. Pellentesque vel iaculis"
            },
            {
                id: 2,
                ava: "ava3.jpg",
                postName: "post 3",
                likesCount: 23,
                content: "Nullam sollicitudin ante non pretium porta. In efficitur sem nec eros ullamcorper,"
            },
            {
                id: 3,
                postName: "post 4",
                likesCount: 24,
                content: "Nullam vitae ultrices felis. Integer justo magna, ultrices vitae nibh eu, vehicula interdum odio."
            },
            {
                id: 4,
                ava: "ava5.jpg",
                postName: "post 5",
                likesCount: 25,
                content: "Vivamus nec semper nulla. Maecenas tincidunt nibh quis est posuere, ut gravida dui aliquet. "
            },
        ],
        newPostText: "it cama in new State",
    },
    dialogsPage: {
        messagesArr: [
            {id: 0, message: 'Mess from Dimych'},
            {id: 1, message: 'Mess from Sasha'},
            {id: 2, message: 'Mess from Sveta'},
            {id: 3, message: 'Mess from Kolya'},
            {id: 4, message: 'Mess from Andrew'},
            {id: 5, message: 'Mess from Valera'},
        ],
        dialogsArr: [
            {id: 0, name: 'Dimych'},
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Kolya'},
            {id: 4, name: 'Andrew'},
            {id: 5, name: 'Valera'},
        ],
    },
    sidebar: {}
};

let rerenderEntireTree = () => {
    console.log('rerenderEntireTree');
};

export let addPost = () => {
    let newPost = {
        id: 5,
        postName: 'from Redux  ',
        content: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postsArr.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
};

export let updateNewPostText = (newText) => { //by each one symbol
     state.profilePage.newPostText = newText;
     //state.profilePage.postsArr.push(newPost);
    rerenderEntireTree();
    console.log('Redux ---updateNewPostText', newText)
};

export const subscribe = (observer) => {
   // debugger;
    rerenderEntireTree = observer;
};

export default state;