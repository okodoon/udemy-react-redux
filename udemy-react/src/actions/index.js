export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// actionCreator => actionを定義してactionを返す関数
export const increment = () => ({
    type: INCREMENT
})
export const declement = () => ({
    type: DECREMENT
})
