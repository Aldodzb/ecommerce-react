import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [],
  products: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.NEW_PRODUCT: {
      let newState = _.cloneDeep(state);
      let product = action.payload;
      let newItem = {
        id: state.items.length + 1,
        title: product.title,
        description: product.description,
        price: product.price
      };
      newState.products.push(newItem);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;
