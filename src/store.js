import { createStore, combineReducers } from 'redux'

import counter from './state/counter'

const INITIAL_STATE = {
    firstAction: false
}

const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'FIRST_ACTION') {
        return {
            ...state,
            firstAction: true
        }
    }
    return state // by default returns prev state
}


const reducersCombine = combineReducers({
    firstActionReducerName: reducer,
    counter
})

export const store = createStore(
    reducersCombine,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const FIRST_ACTION = 'FIRST_ACTION'

const firstAction = () => ({ type: FIRST_ACTION})


window.dispatchFirstAction = () => store.dispatch(firstAction())

window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()