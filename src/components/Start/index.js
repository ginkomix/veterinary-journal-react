import React from 'react';
import {connect} from 'react-redux';
import Authorization from '../Authorization';
import Registration from '../Registration';
import {Button} from 'semantic-ui-react';
import {choice} from '../../actions/startForm';
import './index.css';

class Start extends React.Component {
    
    renderForm = ()=>{
        switch(this.props.button) {
            case 'log':
                return (<Authorization/>)
            case 'reg':
                return (<Registration/>)
            default : 
                return (<Authorization/>)
        }
    }
    
    clickButton = (ev)=> {
        let target = ev.target;
        if(target.classList.contains('log')) {
            this.props.choice('log');
            document.querySelector('.reg').classList.remove('activeForm');
            target.classList.add('activeForm');
        }
        if(target.classList.contains('reg')) {
            this.props.choice('reg');
            document.querySelector('.log').classList.remove('activeForm');
            target.classList.add('activeForm');
        }

    }
    
    render () {
        return (
            <div class='startForm'>
               <div onClick={this.clickButton}>
                <Button className='log activeForm' attached='left'>Вход</Button>
                <Button className='reg' attached='right'>Регистрация</Button>
                </div>
                {this.renderForm()}
                
            </div>
        )
    }
}

export default connect(state=>({
    button:state.startForm
}),{
    choice
})(Start);