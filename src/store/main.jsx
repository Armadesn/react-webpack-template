/**
 * 
 * @param {*} users 
 * @param {*} action 
 * @event 主体导航模块
 */
import { fromJS }                                   from 'immutable'
import { defaultNavList , defaultNavValue }         from 'lib/util'

const initialState = {
    menuTopList : defaultNavList,
    checkedTag  : defaultNavValue,
    checkedNav  : defaultNavList,
    collapsed   : false
}

function mainAction(state = initialState, action) {

    switch(action.type) {
        /**
         * @event 添加导航
         */
        case 'ADD_NAV':
            return initialState;  
        break;
        /**
         * @event 选中项
         */
        case 'CHECKED_NAV':
            return initialState;  
            
        break;
        /**
         * @event 折叠
         */
        case 'CHECKED_SIDER':
            return initialState;  
        break;
        /**
         * @event 删除
         */
        case  'REMOVE_NAV' : 
            return initialState;     
        break;
        default:
            return initialState;     
   }
}

export default mainAction