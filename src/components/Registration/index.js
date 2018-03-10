import React from 'react';
import {connect} from 'react-redux';
import { Input,Button,Dropdown } from 'semantic-ui-react';
import './index.css';

class Registration extends React.Component {
    options = [
        { key: '.com', text: '.com', value: '.com' },
        { key: '.ru', text: '.ru', value: '.ru' },
        { key: '.net', text: '.net', value: '.net' },
        { key: '.org', text: '.org', value: '.org' },
    ]
    render () {
        return (
            <div>
                <span>Имя</span>
                <Input placeholder='Имя' /><br/>
                <span>Фамилия</span>
                <Input placeholder='Фамилия' /><br/>
                <span>Отчество</span>
                <Input placeholder='Отчество' /><br/>
                <span>Логин</span>
                <Input
                    label={<Dropdown defaultValue='.com' options={this.options} />}
                    labelPosition='right'
                    placeholder='Логин'
                  /><br/>

                <span>Пароль</span>
                <Input placeholder='Пароль' /><br/><br/>

                <Button color='teal'>Зарегестрироваться</Button>
            </div>
        )
    }


}

export default connect(undefined,{})(Registration);