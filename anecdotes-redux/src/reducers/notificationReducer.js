let timeoutId;

const initialState = ''

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTIFICATION':
            return action.notification
        case 'REMOVE_NOTIFICATION':
            return initialState
        default:
            return state
    }
}

export const notification = (notification, time) => {
    clearTimeout(timeoutId)

    return dispatch => {
        timeoutId = setTimeout(() => {
            dispatch(removeNotification())
        }, time)

        return dispatch({
            type: 'NOTIFICATION',
            notification
        })
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION',
        notification: ''
    }
}

export default notificationReducer