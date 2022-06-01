const initialData = {
  list: [],
};
const shopReducer = (state = initialData, action) => {
  switch (action.type) {
    case "addToShop":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return state;
  }
};

export default shopReducer;
