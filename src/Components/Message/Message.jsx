import { NavLink } from 'react-router-dom';
import classes from './Message.module.css'

// Компонента Диалогов
const Dialog = (props) => {
    return (
        <div className={classes.items}>
            <div className={classes.items__icon}></div>
            <NavLink to={'/message/' + props.id} className={classes.items__name}>{props.name}</NavLink>
        </div>
    )
}
//Компонента Сообщений
const Messages = (props) => {
    return (
        <div className={classes.messages}>{props.name}</div>
    )
}


const Message = (props) => {

    //Метод map для диалогов
    let dialogsElement = props.dialogs.map((d)=><Dialog name={d.name} id={d.id} />)

    //Метод map для сообщений
    let messagesElement = props.messages.map((m)=><Messages message={m.message} />)

    return (
        <section className={classes.message}>
            <div className={classes.message__body}>
                <div className={classes.message__profile}>
                    {/* Метод map для диалогов */}
                    {dialogsElement}
                </div>
                <div className={classes.message__dialogs}>
                    {/* Метод map для сообщений */}
                    {messagesElement}
                </div>
            </div>
        </section>
    )
}

export default Message;