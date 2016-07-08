import _data from './Detail.json'

const TIMEOUT = 100

export default {
  getProducts(cb, timeout) {
    setTimeout(() => cb(_data), timeout || TIMEOUT)
  }

//   buyProducts(payload, cb, timeout) {
//     setTimeout(() => cb(), timeout || TIMEOUT)
//   }
}
