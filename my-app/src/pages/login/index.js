import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {LoginWrapper,
        LoginBox,
        Input,
        Button
} from './style';
import {actionCreators} from './store';
import {Navigate} from 'react-router-dom';

class Login extends PureComponent{
    render(){
        const {loginStatus} = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='Account' ref = {(input) => {this.account=input}}/>
                        <Input placeholder='Password' type='password' ref = {(input)=>{this.password=input}}/>
                        <Button onClick={()=>{this.props.login(this.account,this.password)}}>LogIn</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Navigate to = '/'/>
        }

        
    }
}


const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login','login'])
});

const mapDispatch = (dispatch) =>({
    login(account, password){
        dispatch(actionCreators.login(account.value, password.value));
    }
})

export default connect(mapStateToProps, mapDispatch)(Login);