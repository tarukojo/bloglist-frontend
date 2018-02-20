import React from 'react'
import { shallow } from 'enzyme'
import TogglableBlog from './TogglableBlog'

describe.skip('<TogglableBlog />', () => {
    let togglableComponent

    const blog = {
        title: 'title tässä',
        author: 'kirjoittaja',
        likes: 12
    }

    beforeEach(() => {
      togglableComponent = shallow(<TogglableBlog title="show" blog={blog}>
      <div class="testDiv"/>
      </TogglableBlog>
      )
    })

    it('renders its children', () => {
        expect(togglableComponent.contains(<div class="testDiv" />)).toEqual(true)
    })
    
    it('at start the children are not displayed', () => {
        const div = togglableComponent.find('.togglableContent')
        expect(div.getElement().props.style).toEqual({ display: 'none' })
    })
    
    it('after clicking the button, children are displayed', () => {
        const button = togglableComponent.find('a')
    
        button.at(0).simulate('click')
        const div = togglableComponent.find('.togglableContent')
        expect(div.getElement().props.style).toEqual({ display: '' })
    })
    

})