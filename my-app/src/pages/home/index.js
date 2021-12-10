import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import {connect} from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeRight,
    HomeLeft,
    BackTop
} from './style';

// purecomponent内部已经做好了shouldComponentUpdate的优化
// 利用purecomponent和immutable会避免一些问题

class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className='banner-img' src="https://code.visualstudio.com/assets/docs/nodejs/reactjs/welcome-to-react.png"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.props.changeScrollTopShow);
    }

    bindEvents(){
        window.addEventListener("scroll", this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(["home", "showScroll"])
})

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
        // console.log(document.documentElement.scrollTop);
    }
});

export default connect(mapStateToProps, mapDispatch)(Home);