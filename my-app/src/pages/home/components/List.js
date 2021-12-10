import React, {PureComponent} from 'react';
import {ListItem, ListInfo, LoadMore} from "../style";
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends PureComponent{
    render(){
        const {list, getMoreList, page} = this.props;
        return(
            <div>
                {list.map((item,index)=>{
                    const reqSvgs = require.context ( '../img', true, /\.png$/ );
                    const allSvgFilepaths = reqSvgs.keys ();
                    const imagePath = allSvgFilepaths[0]
                    const image = reqSvgs( imagePath );
                    let urlImage = {url:image.default};

                    return (
                        <Link key={index} to={'/detail/'+item.get("id")}>
                            <ListItem>
                                <img alt='' className='pic' src={urlImage.url}/>
                                <ListInfo>
                                    <h3 className='title'>{item.get("title")}</h3>
                                    <p className='description'>{item.get("description")}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    );
                })}
                <LoadMore onClick={()=>getMoreList(page)}>
                    Load More...
                </LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get("home").get("articleList"),
    page: state.getIn(["home", "articlePage"])
});

const mapDispatch = (dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
});

export default connect(mapStateToProps, mapDispatch)(List);