import { NavLink } from 'react-router-dom';
import classes from './Message.module.css'

const Dialog = (props) => {
    return (
        <div className={classes.items}>
            <div className={classes.items__icon}></div>
            <NavLink to={'/message/' + props.id} className={classes.items__name}>{props.name}</NavLink>
        </div>
    )
}

const DialogWrapper = (props) => {
    return (
        <div className={classes.DialogWrapper}>{props.name}</div>
    )
}

const Message = () => {
    return (
        <section className={classes.message}>
            <div className={classes.message__body}>
                <div className={classes.message__profile}>
                    <Dialog name='Misha' id='1' />
                    <Dialog name='Leo' id='2' />
                    <Dialog name='Lena' id='3' />
                    <Dialog name='Nastya' id='4' />
                </div>
                <div className={classes.message__dialogs}>
                    <DialogWrapper name='Hello' />
                    <DialogWrapper name='How are you?' />
                </div>
            </div>
        </section>
    )
}

export default Message;