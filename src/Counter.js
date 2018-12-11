import React from 'react'

import { connect } from 'react-redux'

import { add, dec } from './state/counter'

const Counter = (props) => (
    <div>
        <h1>Value: {props._counter} </h1>
        <button
            onClick={props._increment}
        >
            +
        </button>
        <button
            onClick={props._decrement}
        >
            -
        </button>
    </div>

)

const mapStateToProps = (state) => ({
    _counter: state.counter.counter
})

const dispatchToProps = (dispatch) => ({
    _increment: () => dispatch(add()),
    _decrement: () => dispatch(dec())
})

export default connect(
    mapStateToProps,
    dispatchToProps
)(Counter)