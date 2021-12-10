import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import {actionCreators} from './store';
import { useParams, useLocation  } from "react-router-dom";

// function components
const Detail=({title,content})=>{
    const { id } = useParams();

    // get query value
    // const search = useLocation().search;
    // const id = new URLSearchParams(search).get('id');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionCreators.getDetail(id));
    }, [dispatch,id]);

    return(
        <DetailWrapper>
            <Header>
                {title}
            </Header>
            <Content dangerouslySetInnerHTML={{__html: content}}/>
        </DetailWrapper>
    );
}


// class Detail extends Component{
//     render(){
//         return(
//             <DetailWrapper>
//                 <Header>
//                     {this.props.title}
//                 </Header>
//                 <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
//             </DetailWrapper>
//         )
//     }

//     componentDidMount(){
//         console.log(this.props.id);
//         this.props.getDetail();
//     }
// }


const mapStateToProps = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});

// const mapDispatch = (dispatch) =>({
//     getDetail(){
//         dispatch(actionCreators.getDetail());
//     }
// })

export default connect(mapStateToProps, null)(Detail);