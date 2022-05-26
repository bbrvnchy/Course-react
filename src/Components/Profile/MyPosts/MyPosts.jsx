import classes from'./MyPosts.module.css'
import Post from './Post/Post';
import React from "react";

const MyPosts =(props)=>{

    // Перебор массива
    let postsElement = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    // createRef

    let newPostElement = React.createRef()

    //Добавление поста
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }
    return(
        <div>
            <textarea ref={newPostElement} className={classes.textarea} placeholder='New posts'></textarea>
            <button onClick={addPost} className={classes.button} >Add post</button>
            <button className={classes.button}>Remove</button>
            <div className={classes.posts}>
                {postsElement}     {/* Вставляем массив  */}
            </div>
        </div>
    )
}
export default MyPosts;