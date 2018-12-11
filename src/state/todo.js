const NEW_TASK = 'todo/NEW_TASK'
const ADD_TASK = 'todo/ADD_TASK'

const INITIAL_STATE = {
    tasks: [],
    newTask: ''
}

export const newTaskTextHandler = (value) => ({
    type: NEW_TASK,
    value
})

export const addTask = newTask => ({
    type: ADD_TASK,
    newTask
})

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case NEW_TASK: 
            return {
                ...state,
                newTask: action.value
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.newTask)
            }

        default:
            return state
    }
}