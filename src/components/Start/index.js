import React from 'react';
import {connect} from 'react-redux';
import Authorization from './components/Authorization';
import Registration from './components/Registration';
import {Button} from 'semantic-ui-react';

class Start extends React.Component {
    render () {
        return (
            <Button attached='left'>Вход</Button>
            <Button attached='right'>Регистрация</Button>
            <Authorization/>
            <Registration/>
        )
    }
}

export default connect (undefined,{undefined})(Start);