import * as types from '../constants/ActionTypes';
import dataInfo from '../data/data';

// 接收所有数据的方法
function receiveProducts(products) {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}


export function getAllProducts() {
  return dispatch => {
    dataInfo.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}

function addToCartUnsafe(productId) {
  console.log(productId);
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function addToCart(productId) {
  // return (dispatch, getState) => {
  //   if (getState().products.byId[productId].inventory > 0) {
  //     dispatch(addToCartUnsafe(productId))
  //   }
  // }
  return function (dispatch, getState){
    console.log(getState());
      if (getState().products.byId[productId].inventory > 0) {
          dispatch(addToCartUnsafe(productId))
      }
  }
}

export function checkout(products) {
  return (dispatch, getState) => {
    const cart = getState().cart
    dispatch({
      type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
      dispatch({
        type: types.CHECKOUT_SUCCESS,
        cart
      })
      // Replace the line above with line below to rollback on failure:
      // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}
