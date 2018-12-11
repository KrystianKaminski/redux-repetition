const NEW_TASK = 'todo/NEW_TASK'
const ADD_TASK = 'todo/ADD_TASK'
const TOGGLE_IS_COMPLETED = 'todo/TOGGLE_IS_COMPLETED'
const DELETE_TASK = 'todo/DELETE_TASK'
const SHOW_ALL = 'todo/SHOW_ALL'
const SHOW_COMPLETED = 'todo/SHOW_COMPLETED'
const SHOW_UNCOMPLETED = 'todo/SHOW_UNCOMPLETED'

const INITIAL_STATE = {
    tasks: [],
    newTask: '',
    filterMethod: 'ALL'
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

export const showAll = () => ({
    type: SHOW_ALL
})

export const showCompleted = () => ({
    type: SHOW_COMPLETED
})

export const showUncompleted = () => ({
    type: SHOW_UNCOMPLETED
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
        case SHOW_ALL:
            return {
                ...state,
                filterMethod: 'ALL'
            }
        case SHOW_COMPLETED:
            return {
                ...state,
                filterMethod: 'COMPLETED'
            }
        case SHOW_UNCOMPLETED:
            return {
                ...state,
                filterMethod: 'UNCOMPLETED'
            }

        default:
            return state
    }
}