import userService from '../services/users'

export const userInitialization = () => {
    return async (dispatch) => {
      const users = await userService.getAllUsers()
      dispatch({
        type: 'INIT_USERS',
        data: users
      })
    }
}

const userReducer = (state = [], action) => {
    switch (action.type) {
      case 'INIT_USERS':
        return action.data
      default:
        return state
    }
}
  
export default userReducer