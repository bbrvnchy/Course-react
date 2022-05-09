import classes from'./MyPosts.module.css'
import Post from './Post/Post';

const MyPosts =()=>{
    return(
        <div>
            <textarea className={classes.textarea} placeholder='New posts'></textarea>
            <button type='submit' className={classes.button}>Add post</button>
            <button type='reset' className={classes.button}>Remove</button>
            <div className={classes.posts}>
                <Post message='Hello world' likesCount='15'/>
                <Post message='Hi, how are you?' likesCount='20'/>
            </div>
        </div>
    )
}
export default MyPosts;