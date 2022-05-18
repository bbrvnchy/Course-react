import classes from'./MyPosts.module.css'
import Post from './Post/Post';

const MyPosts =(props)=>{

    // Перебор массива
    let postsElement = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)


    return(
        <div>
            <textarea className={classes.textarea} placeholder='New posts'></textarea>
            <button type='submit' className={classes.button}>Add post</button>
            <button type='reset' className={classes.button}>Remove</button>
            <div className={classes.posts}>
                {postsElement}     {/* Вставляем массив  */}
            </div>
        </div>
    )
}
export default MyPosts;