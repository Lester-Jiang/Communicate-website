import React, {Component} from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    
    MobileComponent,
    CardBodyItem,
    MobileSearch} from './style';
import  {actionCreators} from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {Icon} from '../../statics/iconfont/iconfont.js';
import {Link } from 'react-router-dom';
import{Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../statics/nevigation/iconfont.css';
import '../../statics/search/iconfont.css';
import ContextAwareToggle from './ContextAwareToggle.js';

class Header extends Component{
    getListArea = () => {
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList){
            for(let i = (page-1)*10; i<page*10; i++){
                pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
            }
        }

        if (focused || mouseIn){
            return(
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        Hot Search
                        <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className='iconfont spin'>&#xe851;</i>
                            <span style={{cursor:"pointer"}}>change</span>
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        }else{
            return null;
        }
    }

    computerSize = (focused, handleInputFocus, handleInputBlur, list, login, logout)=> (<HeaderWrapper>
        <Icon/>
        <Link to="/">
            <Logo/>
        </Link>
        <Container>
            <Row>
                <Col md={8}>
                    <Nav>
                        <Link to="/">
                            <NavItem className='left active'>Home</NavItem>
                        </Link>
                        <NavItem className='left'>Download</NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in = {focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch
                                    className={focused? 'focused': ''}
                                    onFocus={()=>{handleInputFocus(list)}}
                                    onBlur = {handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            {this.getListArea()}
                        </SearchWrapper>
                        {/* <NavItem className='right'>
                            <i className='iconfont'>&#xe636;</i>
                        </NavItem>
                        {
                            login? 
                            <NavItem onClick={logout} className='right login'>LogOut</NavItem> : 
                            <Link to="/login"><NavItem className='right login'>LogIn</NavItem></Link>
                        } */}
                    </Nav>
                </Col>
                <Col md={4}>
                    <Addition>
                        <NavItem className='right'>
                            <i className='iconfont'>&#xe636;</i>
                        </NavItem>
                        {
                            login? 
                            <NavItem onClick={logout} className='right login'>LogOut</NavItem> : 
                            <Link to="/login"><NavItem className='right login'>LogIn</NavItem></Link>
                        }
                        <Link to='/write'>
                            <Button className='writting'>
                                <i className="iconfont">&#xe615;</i>
                                Writing
                            </Button>
                        </Link>
                        <Button className='reg'>Regist</Button>
                    </Addition>
                </Col>
            </Row>
        </Container>
    </HeaderWrapper>);

    mobileSize = () => (
        <MobileComponent>
            <Accordion defaultActiveKey="0">
                <Card className='card'>
                    <Card.Header className='cardHeader'>
                        <Link to="/">
                            <Logo/>
                        </Link>
                        <ContextAwareToggle eventKey="0">
                            <i className='iconfont'>&#xe605;</i>
                        </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='cardBody'>
                            <CardBodyItem>Home</CardBodyItem>
                            <CardBodyItem>Download</CardBodyItem>
                            <CardBodyItem>
                                <MobileSearch></MobileSearch>
                                <i className='iconfont'>&#xe62b;</i>
                            </CardBodyItem>
                            <CardBodyItem>Download</CardBodyItem>
                            <CardBodyItem>Download</CardBodyItem>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </MobileComponent>
    );

    render(){
        const  {focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props;
        if(!this.state.mobile){
            return this.computerSize(focused, handleInputFocus, handleInputBlur, list, login, logout);
        }else{
            return this.mobileSize();
        }
        
    }

    constructor(props) {
        super(props);
        this.state = { mobile: false };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        if(window.innerWidth<=960){
        this.setState({...this.state, mobile:true});
        }else{
        this.setState({...this.state, mobile:false});
        }
    }

}


const mapStateToProps = (state)=>{
    return{
        focused: state.getIn(['header','focused']),
        // focused: state.get('header').get('focused')
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header','mouseIn']),
        login: state.getIn(["login", "login"])

    }
}

const mapDispachToProps = (dispatch)=>{
    return{
        handleInputFocus(list){
            if (list.size===0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originalAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originalAngle){
                originalAngle = parseInt(originalAngle, 10);
            }else{
                originalAngle=0;
            }
            spin.style.transform = `rotate(${originalAngle+360}deg)`;
            if (page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Header);