export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket.reduce((acc, item) => item.price + acc, 0);
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {...state,
      user: action.user
    }
    case "ADD_TO_BASKET":
      //logic to add in basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //removing from basket

      //we cloned the basket
      let newBasket = [...state.basket];

      //checking item to be removed
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      if (index >= 0) {
        //item exist in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove item with id ${action.id} as it's nonexisting`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
