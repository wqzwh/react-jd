import dataInfo from './cs.json';

const TIMEOUT = 100

export default {
  getProducts(cb, timeout) {
    setTimeout(() => cb(dataInfo), timeout || TIMEOUT)
  }
}
