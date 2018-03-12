import React from 'react';
import {connect} from 'react-redux';
import './index.css';

class Authorization extends React.Component {

    render () {
        return (
            <div>
                <input placeholder='Логин' /><br/>
                <input placeholder='Пароль' /><br/><br/>
                <button color='teal'>Вход</button>
            </div>
        )
    }


}

export default connect(undefined,{})(Authorization);