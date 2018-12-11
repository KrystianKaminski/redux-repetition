const INC = 'counter/INC'
const DEC = 'counter/DEC'

const INITIAL_STATE = {
    counter: 0
}

const add = () => ({type: INC})
const dec = () => ({type: DEC})


export default (state = INITIAL_STATE, action) => {
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