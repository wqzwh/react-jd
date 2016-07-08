import { ADD_NUM_INFO,CUT_NUM_INFO,RECEIVE_DATAS } from '../constants/ActionTypes';

// 定义默认初始值的state
const initialState = [
  {
    count: 1,
    price:0,
    id: 0
  }
];

// export default function AppCartAddNumInfo(state = initialState, action) {
//   console.log(action.type);
//   switch (action.type) {
//     case ADD_NUM_INFO:
//       return [
//         {
//           id: state.reduce((maxId, value) => Math.max(value.id, maxId), -1) + 1,
//           count: action.text,
//           price:action.price
//         }, 
//         ...state//旧的状态数据
//       ]
//     default:
//       return state
//   }
// }
export default function AppCartAddNumInfo(state = {}, action) {
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