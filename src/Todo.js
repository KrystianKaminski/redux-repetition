import React from 'react'

import { connect } from 'react-redux'

import {
    newTaskTextHandler,
    addTask,
    toggleIsCompleted,
    deleteTask,
    showAll,
    showCompleted,
    showUncompleted
} from './state/todo'

const Todo = (props) => (
    <div>
        <input
            value={props._currentTask}
            onChange={props._newTaskTextHandler}
        />
        <button
            onClick={props._addTask}
        >
            Add task!
        </button>
        <button
        onClick={() => props._showAll()}
        >
        Show all
        </button>
        <button
        onClick={() => props._showCompleted()}
        >
        Show completed
        </button>
        <button
        onClick={() => props._showUncompleted()}
        >Show uncompleted</button>
        <ul>
            {props._tasks
            
            .filter(task => {
                switch(props._filterMethod) {
                    case 'ALL':
                        return true
                    case 'COMPLETED':
                        return task.isCompleted
                    case 'UNCOMPLETED':
                        return !task.isCompleted

                    default:
                        return true
                }
            })
            
            .map(task => (
                <div>

                    <li
                        style={
                            task.isCompleted ?
                                { textDecoration: 'line-through' }
                                : { textDecoration: 'none' }
                        }
                        onClick={() => props._toggleIsCompleted(task.id)}
                    >
                        {task.text}
                    </li>
                    <button
                        onClick={() => props._deleteTask(task.id)}
                    >
                    X
                    </button>
                </div>
            ))}
        </ul>
    </div>
)

const mapStateToProps = state => ({
    _currentTask: state.todo.currentTask,
    _tasks: state.todo.tasks,
    _filterMethod: state.todo.filterMethod
})

const dispatchToProps = dispatch => ({
    _newTaskTextHandler: (e) => dispatch(newTaskTextHandler(e.target.value)),
    _addTask: () => dispatch(addTask()),
    _toggleIsCompleted: (taskKey) => dispatch(toggleIsCompleted(taskKey)),
    _deleteTask: (taskKey) => dispatch(deleteTask(taskKey)),
    _showAll: () => dispatch(showAll()),
    _showCompleted: () => dispatch(showCompleted()),
    _showUncompleted: () => dispatch(showUncompleted())
})


export default connect(
    mapStateToProps,
    dispatchToProps
)(Todo)