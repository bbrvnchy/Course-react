import classes from'./MyPosts.module.css'
import Post from './Post/Post';

// Массив данных
let posts= [
    {message:'Hello world', likesCount:11},
    {message:'Hi, how are you?', likesCount:12}
]

const MyPosts =(post)=>{

    // Перебор массива
    let postsElement = posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)


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