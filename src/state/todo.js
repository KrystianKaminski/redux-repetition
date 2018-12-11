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

export const addTask = () => ({
    type: ADD_TASK,
})

const createTask = task => ({
    text: task,
    isCompleted: false
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
                tasks: state.tasks.concat(createTask(state.newTask))
            }

        default:
            return state
    }
}