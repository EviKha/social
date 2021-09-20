import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
const Dialogs = (props) => {
    let dialogData = [
        { id: '1', name: 'Manetka' },
        { id: '2', name: 'Samoedka' },
        { id: '3', name: 'Damirka' },
        { id: '4', name: 'Evelinka' }
    ];
    let messageData = [
        { text: 'Hi' },
        { text: 'How are you?' },
        { text: 'Im fine' },
        { text: 'Bye!' }
    ]
    
    let dialogItems = dialogData.map(d => <Dialog id={d.id} name={d.name} />)
    let messageItem = messageData.map(m=>  <Message text={m.text} />)

    return (
        <div className={st.dialogs}>
            <div className={st.dialogItems}>
                {dialogItems}
            </div>
            <div className={st.messages}>
               {messageItem}
            </div>
        </div>
    )
}

export default Dialogs;