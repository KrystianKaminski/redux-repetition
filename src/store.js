import { createStore, combineReducers } from 'redux'



const reducer = (state, action) => {
   if (action.type === 'FIRST_ACTION') {
       return {firstAction: true}
   }
    return {firstAction: false}
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({
    type: 'FIRST_ACTION'
})

store.dispatch({
    type: 'FIRST_ACTION'
})
