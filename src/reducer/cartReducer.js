export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {...state,cartList:payload.products,total:payload.total};
      break;
    case "REMOVE_FROM_CART":
      return {...state,cartList:payload.products,total:payload.total};
      break;
    case "CLEAR_CART":
      return {...state,total:payload.total, cartList:payload.products};
      break;
  
    default:
      throw new Error("No Case Found");
  }
};
