// types of action
const Types = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  NEW_PRODUCT: "NEW_PRODUCT"
};
// actions
const createItem = task => ({
  type: Types.CREATE_ITEM,
  payload: task
});

const deleteItem = id => ({
  type: Types.DELETE_ITEM,
  payload: id
});

const newProduct = productObj => ({
  type: Types.NEW_PRODUCT,
  payload: productObj
});

export default {
  createItem,
  deleteItem,
  newProduct,
  Types
};
