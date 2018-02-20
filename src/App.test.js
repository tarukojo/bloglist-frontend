import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'
import TogglableBlog from './components/TogglableBlog';

describe('<App />', () => {
    let app
    beforeAll(() => {
      app = mount(<App />)
    })
  
    it('renders only login button'), () => {
        const mockHandler = jest.fn()

        const loginDiv = app.find('.loginButtonDiv')
        expect(loginDiv.getElement().props.style).toEqual({ display: 'none' })
    }

    it('renders none blogs it gets from backend', () => {
      app.update()
      const blogComponents = app.find(Blog)
      expect(blogComponents.length).toEqual(0)
    })
  })

  describe('when user is logged', () => {
    let app
    beforeAll(() => {
      app = mount(<App />)
      const user = {
        username: 'tester',
        token: '1231231214',
        name: 'Teuvo Testaaja'
      }
      
      localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
    })

    it('all notes are rendered', () => {
      app.update()
      const blogComponents = app.find(Blog)
      const togglableBlogComponents = app.find(TogglableBlog)
      expect(blogComponents.length).toEqual(blogService.blogs.length)
      expect(togglableBlogComponents.length).toEqual(blogService.blogs.length)
      
    })
  })
