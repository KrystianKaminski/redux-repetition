import React from 'react'

import { connect } from 'react-redux'

import { newTaskTextHandler, addTask } from './state/todo'

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
    </div>
)

const mapStateToProps = state => ({
    _currentTask: state.todo.currentTask,
    _tasks: state.todo.tasks
})

const dispatchToProps = dispatch => ({
    _newTaskTextHandler: (e) => dispatch(newTaskTextHandler(e.target.value)),
    _addTask: () => dispatch(addTask())
})


export default connect(
    mapStateToProps,
    dispatchToProps
)(Todo)