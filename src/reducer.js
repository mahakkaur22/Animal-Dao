export const initialState = {
  address: "",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };

    default:
      return state;
  }
};

export default reducer;
