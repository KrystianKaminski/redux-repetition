import { createStore, combineReducers } from 'redux'

const INITIAL_STATE = {
    firstAction: false
}

const COUNTER_INITIAL_STATE = {
    counter: 0
}

const INC = 'counter/INC'
const DEC = 'counter/DEC'

const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'FIRST_ACTION') {
        return {
            ...state,
            firstAction: true
        }
    }
    return state // by default returns prev state
}

const counterReducer = (state = COUNTER_INITIAL_STATE, action) => {
    if (action.type === INC) {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === DEC) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    return state
}

const reducersCombine = combineReducers({
    firstActionReducerName: reducer,
    counterReducerName: counterReducer
})

export const store = createStore(
    reducersCombine,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const FIRST_ACTION = 'FIRST_ACTION'

const firstAction = () => ({ type: FIRST_ACTION})

const add = () => ({type: INC})
const dec = () => ({type: DEC})

window.dispatchFirstAction = () => store.dispatch(firstAction())

window.increment = () => store.dispatch(add())
window.decrement = () => store.dispatch(dec())

window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()

window.increment()
window.increment()
window.increment()
window.decrement()
