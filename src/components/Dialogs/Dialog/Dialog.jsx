import React from 'react';
import st from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
const Dialog = (props) => {
    let url = `/dialogs/${props.id}`
    return (
        <div className={st.dialog}>
            <NavLink to={url} activeClassName={st.active}>
                {props.name}
            </NavLink>
        </div>

    )
}

export default Dialog;