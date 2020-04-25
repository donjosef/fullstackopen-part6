import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {

    const style = {
        marginBottom: 10
    }

    const handleChange = (event) => {
        props.onSetFilter(event.target.value)
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onSetFilter: (value) => dispatch(setFilter(value))
})

export default connect(null, mapDispatchToProps)(Filter)