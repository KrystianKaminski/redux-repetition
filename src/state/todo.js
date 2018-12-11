const NEW_TASK = 'todo/NEW_TASK'
const ADD_TASK = 'todo/ADD_TASK'
const TOGGLE_IS_COMPLETED = 'todo/TOGGLE_IS_COMPLETED'
const DELETE_TASK = 'todo/DELETE_TASK'

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

export const toggleIsCompleted = (taskKey) => ({
    type: TOGGLE_IS_COMPLETED,
    taskKey
})

export const deleteTask = (taskKey) => ({
    type: DELETE_TASK,
    taskKey
})

const createTask = task => ({
    text: task,
    isCompleted: false,
    id: Date.now()
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

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
        case TOGGLE_IS_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.taskKey ?
                        {
                            ...task,
                            isCompleted: !task.isCompleted
                        }
                        : task
                )
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskKey)
            }

        default:
            return state
    }
}