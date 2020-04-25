const initialState = ''

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_FILTER':
            return action.filterValue
        default:
            return state
    }
}

export const setFilter = (filterValue) => {
    return {
        type: 'SET_FILTER',
        filterValue
    }
}

export default filterReducer