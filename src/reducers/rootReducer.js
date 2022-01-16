const initState = {
  weatherList: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "push":
      return {
        ...state,
        weatherList: [...state.weatherList, action.payload],
      };
    case "pull":
      console.log("the pull is called")
      console.log(state)
      return {...state}
    default:
      return state
  }
};

export default rootReducer;
