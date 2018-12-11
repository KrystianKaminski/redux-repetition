import { createStore, combineReducers } from 'redux'

const reducer = () => ({
    name: 'Krystian'
})

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
