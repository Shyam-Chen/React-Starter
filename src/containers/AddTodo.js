import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addTodo } from '../actions'



let AddTodo = ({ dispatch }) => {
  let input

  const submitFunc = e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  const refFunc = node => {
    input = node
  }

  return (
    <div>
      <form onSubmit={ submitFunc }>
        <input ref={ refFunc } />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func
};

AddTodo = connect()(AddTodo);

export default AddTodo
