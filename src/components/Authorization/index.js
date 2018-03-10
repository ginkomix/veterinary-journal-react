import React from 'react';
import {connect} from 'react-redux';
import { Input,Button } from 'semantic-ui-react';
import './index.css';

class Authorization extends React.Component {

    render () {
        return (
            <div>
                
                    <span>Логин</span>
                    <Input placeholder='Логин' /><br/>
               
                    <span>Пароль</span>
                    <Input placeholder='Пароль' /><br/><br/>
               
                <Button color='teal'>Вход</Button>
            </div>
        )
    }


}

export default connect(undefined,{})(Authorization);