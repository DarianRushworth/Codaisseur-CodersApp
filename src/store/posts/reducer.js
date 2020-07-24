const initialState = {
    posts: [],
    loading: false
}

export default function postsReducer(state = initialState, action) {
    switch(action.type){
        case "POSTS_LOADING":
            return {
                ...state,
                loading: true
            }

        case "FETCHED_5_POSTS":
            return {
                ...state,
                posts: 
                [...state.posts, 
                    ...action.payload], 
                loading: false
            }
        
        default:
        return state;
    }
    }