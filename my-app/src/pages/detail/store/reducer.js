import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title:"",
    content:""

});

const detail_reducer=(state = defaultState, action)=>{
    switch(action.type){
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })

        default:
            return state;
    }
}

export default detail_reducer;

