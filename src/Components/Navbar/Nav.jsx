import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={classes.navbar}>
            <ul className='menu'>
                <li className={classes.list}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <NavLink to="/profile" className={classes.link} activeClassName={classes.active}>My profile</NavLink>
                </li>
                <li className={classes.list}>
                    <ion-icon name="newspaper-outline"></ion-icon>
                    <NavLink to="/news" className={classes.link}>News</NavLink>
                </li>
                <li className={classes.list}>
                    <ion-icon name="chatbubble-outline" className={classes.icon}></ion-icon>
                    <NavLink to="/message" className={classes.link}>Message</NavLink>
                </li>
                <li className={classes.list}>
                    <ion-icon name="person-outline" className={classes.icon}></ion-icon>
                    <NavLink to="/friends" className={classes.link}>Friends</NavLink>
                </li>
                <li className={classes.list}>
                    <ion-icon name="people-outline" className={classes.icon}></ion-icon>
                    <NavLink to="/groups" className={classes.link}>Communities</NavLink>
                </li>
                <li className={classes.list}>
                    <ion-icon name="musical-notes-outline" className={classes.icon}></ion-icon>
                    <NavLink to="/audios" className={classes.link}>Music</NavLink>
                </li>
                <li className={classes.list}>
                    <ion-icon name="settings-outline" className={classes.icon}></ion-icon>
                    <NavLink to="settings" className={classes.link}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;