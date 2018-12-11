import React from 'react'

import { connect } from 'react-redux'

import { newTaskTextHandler } from './state/todo'

const Todo = (props) => (
    <div>
        <input
            value={props._currentTask}
            onChange={props._newTaskTextHandler}
        />
        <button>Add task!</button>
    </div>
)

const mapStateToProps = state => ({
    _currentTask: state.todo.currentTask,
    _tasks: state.todo.tasks
})

const dispatchToProps = dispatch => ({
    _newTaskTextHandler: () => dispatch(newTaskTextHandler())
})


export default connect(
    mapStateToProps,
    dispatchToProps
)(Todo)