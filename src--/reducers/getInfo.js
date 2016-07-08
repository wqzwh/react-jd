import { combineReducers } from 'redux';
import { ADD_NUM_INFO,RECEIVE_DATAS } from '../constants/ActionTypes';

function products(state, action) {
  console.log(action)
  switch (action.type) {
    case ADD_NUM_INFO:
      return Object.assign({}, state, {
        inventory: state.inventory - 1
      })
    default:
      return state
  }
}

function byId(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case RECEIVE_DATAS:
      return Object.assign({},
        state,
        action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      )
    default:
      const { productId } = action
      if (productId) {
        return Object.assign({}, state, {
          [productId]: products(state[productId], action)
        })
      }
      return state
  }
}

function visibleIds(state = [], action) {
  console.log(action);
  switch (action.type) {
    case RECEIVE_DATAS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getProduct(state, id) {
  return state.byId[id]
}

export function getVisibleProducts(state) {
  console.log(state)
  return state.visibleIds.map(id => getProduct(state, id))
}