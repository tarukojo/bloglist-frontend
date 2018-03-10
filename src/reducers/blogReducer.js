import blogService from '../services/blogs'

export const blogCreation = (title, author, url) => {
    return {
        type: 'CREATE_NEW',
        data: {
            'title': title, 
            'author': author, 
            'url': url 
        }
    }
}

export const blogInitialization = () => {
    return async (dispatch) => {
      const origBlogs = await blogService.getAll()
      const blogs = origBlogs.sort(function(a, b) {
        return b.likes - a.likes
      })
      dispatch({
        type: 'INIT_BLOGS',
        data: blogs
      })
    }
}

const blogReducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_NEW':
        return [...state, action.data]
      case 'INIT_BLOGS':
        return action.data
      default:
        return state
    }
}
  
export default blogReducer