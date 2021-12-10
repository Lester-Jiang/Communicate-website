import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';

class Write extends PureComponent{
    render(){
        const {loginStatus} = this.props;
        
        if(loginStatus){
            return(
                <div>Writing page is not finished</div>
            )
        }else{
            console.log(loginStatus);
            return (<Navigate to='/login'/>);
        }

        
    }
}


const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login','login'])
});


export default connect(mapStateToProps, null)(Write);