import classes from './Post.module.css'

const Post = (props) => {
    
    return (
        <div className={classes.item}>
            <div className={classes.logo}></div>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post;