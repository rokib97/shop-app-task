export const addToShop = (data) => {
  return {
    type: "ADDSHOP",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
