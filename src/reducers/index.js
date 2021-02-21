const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      if (state.mylist.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload.inputsearch,
        mylistSearch: state.mylist.filter((item) => {
          if (action.payload.inputsearch.length > 2) {
            return item.title.includes(action.payload.inputsearch);
          }
          return [];
        }),
        originalsSearch: state.originals.filter((item) => {
          if (action.payload.inputsearch.length > 2) {
            return item.title.includes(action.payload.inputsearch);
          }
          return [];
        }),
        trendsSearch: state.trends.filter((item) => {
          if (action.payload.inputsearch.length > 2) {
            return item.title.includes(action.payload.inputsearch);
          }
          return [];
        }),
      };
    default:
      return state;
  }
};

export default reducer;
