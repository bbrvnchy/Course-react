import classes from'./Profile.module.css'

const Profile =()=>{
    return(
    <main className={classes.content}>
        <section className={classes.list}>
            <div className={classes.icon}>
                <img src='https://papik.pro/uploads/posts/2021-09/1631762389_14-papik-pro-p-prikolnie-avatarki-risunki-14.jpg' alt=''></img>
            </div>
            <div className={classes.items}>
                <h2 className={classes.title}>Vladislav Bobrovnichiy</h2>
                <div className={classes.date}>Date of Birth: 22 june</div>
                <div className={classes.city}>City: Minsk</div>
                <div className={classes.education}>Education: GGPK</div>
                <div className={classes.email}>Web Site:...@mail.ru</div>
            </div>
        </section>
    </main>
    )
}
export default Profile;