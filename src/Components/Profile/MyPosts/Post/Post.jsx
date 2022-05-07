import classes from './Post.module.css'

const Post = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.logo}></div>
            {props.message}
            <div>
                <span>like:{props.like}</span>
            </div>
        </div>
    )
}
export default Post;