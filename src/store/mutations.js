/*
vuex的mutations模块
 */
import Vue from 'vue'
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

  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },


  [RECEIVE_SEA](state, {sea}) {
    state.sea = sea
  },


  [RECEIVE_TEXT](state, {text}) {
    state.text = text
  },


  [RECEIVE_LBT](state, {lbt}) {
    state.lbt = lbt
  },


  [RECEIVE_NAV](state, {nav}) {
    state.nav = nav
  },

  [RECEIVE_TWO](state, {two}) {
    state.two = two
  },

  [RECEIVE_ONE_OTHER](state, {oneOther}) {
    state.oneOther = oneOther
  },

  [RECEIVE_CLASSIFY](state, {classify}) {
    state.classify = classify
  },

  [RECEIVE_KNOW](state, {know}) {
    state.know = know
  }


}
