import React, {PureComponent} from 'react';
import {RecommendWrapper, RecommendItem} from '../style';
import {connect} from 'react-redux';

class Recommend extends PureComponent{
    render(){
        const reqSvgs = require.context ( '../img', true, /\.png$/ );
        const allSvgFilepaths = reqSvgs.keys ();
        const imagePath = allSvgFilepaths[1]
        const image = reqSvgs( imagePath );
        let urlImage = {url:image.default};
        return(
            <RecommendWrapper>
                {this.props.list.map((item)=>{
                    return (<RecommendItem key={item.get("id")} imgURL={urlImage.url}/>);
                })}
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state)=>({
    list: state.getIn(["home","recommendList"])
})

export default connect(mapStateToProps,null)(Recommend);