import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
}

const addHomeList = (state, action) => {
    return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.nextPage
    });
}

const header_reducer=(state = defaultState, action)=>{
    switch(action.type){
        case "home/CHANGE_HOME_DATA":
            return changeHomeData(state,action);
        case "home/ADD_HOME_LIST":
            return addHomeList(state,action);
        case "home/TOGGLE_TOP_SHOW":
            return state.set("showScroll", action.show)
        default:
            return state;
    }
}

export default header_reducer;

