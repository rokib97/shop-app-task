export const addToShop = (data) => {
  return {
    type: "ADDSHOP",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteShop = (id) => {
  return {
    type: "DELETESHOP",
    id,
  };
};
export const deleteAllShop = (id) => {
  return {
    type: "DELETEALLSHOP",
    id,
  };
};
