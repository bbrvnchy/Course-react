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


const Message = () => {
    //Массив диалогов
    let dialogs = [
        { name: 'Misha', id: '1' },
        { name: 'Leo', id: '2' },
        { name: 'Lena', id: '3' },
        { name: 'Nastya', id: '4' }
    ]
    //Массив сообщений
    let messages = [
        { message: 'hello' },
        { message: 'How are you?' },
        { message: 'How are you?' },
    ]

    //Метод map для диалогов
    let dialogsElement = dialogs.map((d)=><Dialog name={d.name} id={d.id} />)

    //Метод map для сообщений
    let messagesElement = messages.map((m)=><Messages name={m.message} />)

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