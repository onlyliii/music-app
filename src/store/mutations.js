// 引入mutation-type.js的所有导出
import * as types from './mutation-type'

// mutations是一个对象，key是方法，方法名是type，参数一是state，参数二是payload(传入的数据)
const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations
