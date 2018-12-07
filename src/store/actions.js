/*
vuex的actions模块
 */
import {

  reqShoppingInfo,
  reqLbtList,
  reqNetEaseText,
  reqShopSea,
  reqMisteNav,
  reqMisteNavTwo,
  reqClassify,
  reqKnowThing,
  reqOneOther
} from '../api'

import {
  RECEIVE_INFO,
  RECEIVE_SEA,
  RECEIVE_TEXT,
  RECEIVE_LBT,
  RECEIVE_NAV,
  RECEIVE_TWO,
  RECEIVE_ONE_OTHER,
  RECEIVE_CLASSIFY,
    RECEIVE_KNOW
} from './mutation-types'

export default {
  // 异步获取数据

  // 异步  获取分类
  async getClassify({commit}) {
    const result = await reqClassify()
    if(result.code===0) {
      const classify = result.data
      commit(RECEIVE_CLASSIFY, {classify})

      console.log("---action---",this.result.data)
    }
  },

  // 异步  获取识物
  async getKnowThing({commit}) {
    const result = await reqKnowThing()
    if(result.code===0) {
      const know = result.data
      commit(RECEIVE_KNOW, {know})

      console.log("---action---",this.result)
    }
  },

  // 异步获取  首页其他
  async getOneOther({commit}) {
    const result = await reqOneOther()
    if(result.code===0) {
      const oneOther = result.data
      commit(RECEIVE_ONE_OTHER, {oneOther})
      console.log("---action---",this.result)
    }
  },



  // 异步获取中间下面商品价格信息
  async getMisteNavTwo({commit}) {
    const result = await reqMisteNavTwo()
    if(result.code===0) {
      const two = result.data
      commit(RECEIVE_TWO, {two})

      console.log("---action---",this.result)
    }
  },

  // 异步获取商品信息
  async getShoppingInfo({commit}) {
    const result = await reqShoppingInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
      // cb && cb()
    }
  },

  // 异步获取海外直采信息
  async getShopSea({commit}) {
    const result = await reqShopSea()
    if(result.code===0) {
      const sea = result.data
      commit(RECEIVE_SEA, {sea})


    }
  },

  //异步获取首页网易自营文本信息
  async getNetEaseText({commit}) {
    const result = await reqNetEaseText()
    if(result.code===0) {
      const text = result.data
      commit(RECEIVE_TEXT, {text})

    }
  },

  //异步获取首页轮播图信息
  async getLbtList({commit}) {
    const result = await reqLbtList()
    if(result.code===0) {
      const lbt = result.data
      commit(RECEIVE_LBT, {lbt})

    }
  },

  //异步获取首页轮播图上面的文字信息
  async getMisteNav({commit}) {
    const result = await reqMisteNav()
    if(result.code===0) {
      const nav = result.data
      commit(RECEIVE_NAV, {nav})

    }
  },

}
