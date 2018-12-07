import Mock from 'mockjs'
import data from './data.json'

// console.log('mockServer')
// 指定监听的url和对应的json数据模板

Mock.mock('/shopping_info', {
  code: 0,
  data: data.info
})
Mock.mock('/lbt_list', {
  code: 0,
  data: data.focusList
})
Mock.mock('/netEase_text', {
  code: 0,
  data: data.policyDescList
})
Mock.mock('/shop_sea', {
  code: 0,
  data: data.tagList
})
Mock.mock('/shop_cateList', {
  code: 0,
  data: data.cateList
})

Mock.mock('/shop_cateList_two', {
  code: 0,
  data: data.flashSaleModule
})

///////////////////////////
//分类
Mock.mock('/shop_classify', {
  code: 0,
  data: data.classify
})

//识物
Mock.mock('/shop_know_thing', {
  code: 0,
  data: data.knowThing
})

//第一页其他
Mock.mock('/shop_one_other', {
  code: 0,
  data: data.oneOther
})


// export default xxx  不需要
