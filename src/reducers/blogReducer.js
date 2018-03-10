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

export const initializeBlogs = () => {
    return async (dispatch) => {
      const blogs = await blogService.getAll()
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