const initialData = {
  list: [],
};
const shopReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADDSHOP":
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

    case "DELETESHOP":
      const newList = state.list.filter((shop) => shop.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "DELETEALLSHOP":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default shopReducer;
