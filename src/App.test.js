import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
    let app
    beforeAll(() => {
      app = mount(<App />)
    })
  
    it('renders only login button'), () => {
        const mockHandler = jest.fn()

        const loginComponent = mount(
            <Togglable buttonLabel="show...">
                <LoginForm username="" handleFieldChange={mockHandler}
                password="" login={mockHandler} />
            </Togglable>
          )
        const loginDiv = loginComponent.find('.loginButtonDiv')
        expect(loginDiv.getElement().props.style).toEqual({ display: 'none' })
    }

    it('renders none blogs it gets from backend', () => {
      app.update()
      const blogComponents = app.find(Blog)
      expect(blogComponents.length).toEqual(0)
    })
  })
