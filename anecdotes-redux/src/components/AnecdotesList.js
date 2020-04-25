import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { vote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdotesList = (props) => {
    useEffect(() => {
        props.onInitializeAnecdotes()
    }, [])

    const handleVote = (id) => {
        const anecdote = props.anecdotes.find(anec => anec.id === id)
        props.onVote(id, anecdote)
        props.onNotification(anecdote)
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {props.anecdotes.sort((anecdoteA, anecdoteB) => anecdoteB.votes - anecdoteA.votes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    const pattern = new RegExp(state.filter, 'i')

    return {
        anecdotes: !state.filter
            ? state.anecdotes
            : state.anecdotes.filter(({ content }) => pattern.test(content)),
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => ({
    onInitializeAnecdotes: () => dispatch(initializeAnecdotes()),
    onVote: (id, anecdote) => dispatch(vote(id, anecdote)),
    onNotification: (anecdote) => dispatch(notification('You voted ' + anecdote.content, 5000))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnecdotesList)
