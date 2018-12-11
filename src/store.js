import { createStore, combineReducers } from 'redux'

import counter, { add, dec } from './state/counter'

import todo, { newTaskTextHandler, addTask } from './state/todo'

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
    counter,
    todo
})

export const store = createStore(
    reducersCombine,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const FIRST_ACTION = 'FIRST_ACTION'

const firstAction = () => ({ type: FIRST_ACTION })


window.dispatchFirstAction = () => store.dispatch(firstAction())

window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()

store.dispatch(add())
store.dispatch(add())
store.dispatch(add())
store.dispatch(dec())

window.dispatchAddTask = () => store.dispatch(addTask())

window.dispatchAddTask('aaa')