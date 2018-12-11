import { createStore, combineReducers } from 'redux'

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

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const firstAction = () => ({ type: 'FIRST_ACTION'})

window.dispatchFirstAction = () => store.dispatch(firstAction())

window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()
