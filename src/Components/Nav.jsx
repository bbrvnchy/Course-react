import classes from'./Nav.module.css'

const Nav =()=>{
    return(
    <nav className={classes.navbar}>
        <ul className='menu'>
            <li className={classes.list}>
                <ion-icon name="person-circle-outline" className={classes.icon}></ion-icon>
                <a href="#" className={classes.link}>My profile</a>
            </li>
            <li className={classes.list}>
                <ion-icon name="newspaper-outline" className={classes.icon}></ion-icon>
                <a href="#" className={classes.link}>News</a>
            </li>
            <li className={classes.list}>
            <ion-icon name="chatbubble-outline" className={classes.icon}></ion-icon>
                <a href="#" className={classes.link}>Message</a>
            </li>
            <li className={classes.list}>
                <ion-icon name="person-outline" className={classes.icon}></ion-icon>
                <a href="#" className={classes.link}>Friends</a>
            </li>
            <li className={classes.list}>
                <ion-icon name="people-outline" className={classes.icon}></ion-icon>
                <a href="#" className={classes.link}>Communities</a>
            </li>
            <li className={classes.list}>
                <ion-icon name="musical-notes-outline" className={classes.icon}></ion-icon>
                <a href="#" className={classes.link}>Music</a>
            </li>
            <li className={classes.list}>
                <ion-icon name="settings-outline" className={classes.icon}></ion-icon>
                <a href="#" className={classes.link}>Settings</a>
            </li>
        </ul>
    </nav>
    )
}
export default Nav;