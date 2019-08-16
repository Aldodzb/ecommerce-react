import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [],
  products: [
    {
      id: 1,
      title: "Aspiradora",
      description:
        "La nueva aspiradora Nappo ofrece un potente rendimiento gracias a sus 1500 Watts",
      price: "2370"
    },
    {
      id: 2,
      title: "Prensa Tipo Sargento",
      description:
        "Prensa Tipo Sargento 50x250. Marca Davidson. Largo total 30cm. Envío a todo el país.",
      price: "120"
    }
  ],
  counters: {
    newProducts: 2
  }
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
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
        id: newState.products.length + 1,
        title: product.title,
        description: product.description,
        price: product.price
      };
      newState.counters.newProducts++;
      newState.products.push(newItem);
      return newState;
    }

    case ACTIONS.Types.REFRESH_UNSEEN: {
      let newState = _.cloneDeep(state);
      newState.counters.newProducts = 0;
      return newState;
    }

    default:
      return state;
  }
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
