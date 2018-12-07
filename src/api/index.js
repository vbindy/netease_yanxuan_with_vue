/*
与后台交互模块
 */
import ajax from './ajax'

export const reqShoppingInfo = () => ajax('/shopping_info')



export const reqLbtList = () => ajax('/lbt_list')

export const reqNetEaseText = () => ajax('/netEase_text')

export const reqShopSea = () => ajax('/shop_sea')

export const reqMisteNav = () => ajax('/shop_cateList')

export const reqMisteNavTwo = () => ajax('/shop_cateList_two')

export const reqClassify = () => ajax('/shop_classify')

export const reqKnowThing = () => ajax('/shop_know_thing')

export const reqOneOther = () => ajax('/shop_one_other')
