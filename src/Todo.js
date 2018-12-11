import React from 'react'

import { connect } from 'react-redux'

import { newTaskTextHandler, addTask, toggleIsCompleted } from './state/todo'

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
        <ul>
            {props._tasks.map(task => (
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
            ))}
        </ul>
    </div>
)

const mapStateToProps = state => ({
    _currentTask: state.todo.currentTask,
    _tasks: state.todo.tasks
})

const dispatchToProps = dispatch => ({
    _newTaskTextHandler: (e) => dispatch(newTaskTextHandler(e.target.value)),
    _addTask: () => dispatch(addTask()),
    _toggleIsCompleted: (taskKey) => dispatch(toggleIsCompleted(taskKey))
})


export default connect(
    mapStateToProps,
    dispatchToProps
)(Todo)