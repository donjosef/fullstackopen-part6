import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  let output = null

  if (notification) {
    output = (
      <div style={style}>
        {notification}
      </div>
    )
  }

  return output
}

export default Notification