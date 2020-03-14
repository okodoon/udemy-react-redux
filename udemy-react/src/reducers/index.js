//application内に存在する全てのreducerを総括する => 全reducerを一つのreducerにする
//combineReducersが全Reducerを一つのReducerに結合するもの
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// 複数のReducersを扱いたい場合は下
// export default combineReducers({foo, bar, baz})