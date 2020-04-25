import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => { 
    const res = await axios.get(baseUrl)

    return res.data
}

export const createAnecdote = async (content) => {
    const anecdote = {
        content,
        votes: 0
    }

    const res = await axios.post(baseUrl, anecdote)

    return res.data
}

export const voteAnecdote = async (id, anecdote) => {
    const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
    }

    const res = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)

    return res.data
}