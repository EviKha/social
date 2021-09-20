import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
const Dialogs = (props) => {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogItems}>
                <Dialog id='1' name='Manetka' />
                <Dialog id='2' name='Samoedka' />
                <Dialog id='3' name='Damirka' />
                <Dialog id='4' name='Evelinka' />
            </div>
            <div className={st.messages}>
                <Message text='Hi!' />
                <Message text='How are you?' />
                <Message text='Im fine' />
                <Message text='Bye!' />
            </div>
        </div>
    )
}

export default Dialogs;