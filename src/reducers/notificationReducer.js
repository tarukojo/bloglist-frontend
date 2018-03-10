const notificationAtStart = ''

const initialState = {
  message: notificationAtStart
}

export const handleSubmitMessage = (message) => {
  return { 
    type: 'CREATE MESSAGE',
    message
  }
}

const notificationReducer = (store = initialState, action) => {
  if (action.type === 'CREATE MESSAGE') {
    return  { message: action.message }
  }
  
  return store
}

export default notificationReducer