import { getAll, createAnecdote, voteAnecdote } from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      return state.map(anecdote =>
        anecdote.id === action.updatedAnecdote.id ? action.updatedAnecdote : anecdote
      )

    case 'CREATE':
      return state.concat(action.data)

    case 'INIT_ANECDOTES':
      return action.anecdotes

    default:
      return state
  }
}

export const vote = (id, anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await voteAnecdote(id, anecdote)

    return dispatch({
      type: 'VOTE',
      updatedAnecdote
    })
  }
}

export const create = (content) => {
  return async dispatch => {
    const newAnecdote = await createAnecdote(content)

    return dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()

    return dispatch({
      type: 'INIT_ANECDOTES',
      anecdotes
    })
  }
}

export default reducer