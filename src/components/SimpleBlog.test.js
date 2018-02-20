import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders title and author', () => {
    const blog = {
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      author: 'Matti Vanhanen',
      likes: 1
    }
    const mockHandler = jest.fn()

    const blogComponent = shallow(<SimpleBlog blog={blog} onClick={mockHandler} />)
    const contentDiv = blogComponent.find('.Content')

    expect(contentDiv.text()).toContain(blog.title)
    expect(contentDiv.text()).toContain(blog.author)
  })

  it('renders likes', () => {
    const blog = {
      title: 'Likejä testataan',
      author: 'Kaija Gurunen',
      likes: 24
    }
    const mockHandler = jest.fn()

    const blogComponent = shallow(<SimpleBlog blog={blog} onClick={mockHandler} />)
    const likesDiv = blogComponent.find('.Likes')

    expect(likesDiv.text()).toContain(blog.likes)
  })

  it('click like button twice', () => {
    const blog = {
      title: 'Likejä testataan',
      author: 'Kaija Gurunen',
      likes: 24
    }
    const mockHandler = jest.fn()

    const blogComponent = shallow(<SimpleBlog blog={blog} onClick={mockHandler} />)

    const button = blogComponent.find('button')
    button.simulate('click')
    button.simulate('click')

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})