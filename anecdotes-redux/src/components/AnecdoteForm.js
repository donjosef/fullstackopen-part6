import React from 'react'
import { connect } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const handleCreateAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.content.value
        e.target.content.value = ''

        props.onCreate(content)
        props.onNotification(content)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleCreateAnecdote}>
                <div>
                    <input type="text" name="content" />
                </div>
                <button>create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onCreate: (content) => dispatch(create(content)),
    onNotification: (content) => dispatch(notification('You created ' + content, 5000))
})

export default connect(null, mapDispatchToProps )(AnecdoteForm)
