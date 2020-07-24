const initialState = {
    loading: true,
    post: null,
    comments: []
  };

export default function postPageReducer(state = initialState, action) {
     switch(action.type){
      case "START_LOADING_POST":
        return {
          ...state,
          loading: false
        }
        default:
        return state;
      }
   }




    