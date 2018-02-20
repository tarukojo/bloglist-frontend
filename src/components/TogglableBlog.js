import React from 'react'
import blogService from './../services/blogs'
import PropTypes from 'prop-types'

class TogglableBlog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      deleted: false,
      blog: this.props.blog,
      user: JSON.parse(window.localStorage.getItem('loggedBlogappUser'))
    }
  }

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible})
    console.log(this.props.children)
  }

  deleteBlog = (event) => {
    event.preventDefault()
    console.log(this.state.blog.id)
    try {
      console.log(this.state.blog.id)
      blogService.deleteBlog(this.state.blog.id)
      this.setState({ deleted: true })
    } catch (exception) {
      console.log(exception)
    }
  }

  hasRights = () => {
    /*console.log('hasrights()')
    console.log('user:', this.state.blog.user._id)
    console.log('logged in user:', this.state.user.id)
    */
    if (this.state.blog.user !== undefined && this.state.blog.user._id.length > 0) {
      if (this.state.user.id === this.state.blog.user._id) {
        return true
      } else {
        return false
      }
    }
    return true
  }

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : (this.state.deleted ? 'none' : '') }
    const showWhenVisible = { display: this.state.visible ? (this.state.deleted ? 'none' : '') : 'none' }
    const hideWhenDeleted = { display: this.state.deleted ? 'none' : '' }
    
    const showDelete = { display: this.hasRights() ? '' : 'none' }

    return (
      <div key={this.props.blog.id} style={hideWhenDeleted}>
        <div style={hideWhenVisible}>
          <a href='#' onClick={this.toggleVisibility}>{this.props.title}</a>
        </div>
        <div style={showWhenVisible}>
          <a href='#' onClick={this.toggleVisibility}>{this.props.title}</a>
          {this.props.children}  
          <div style={showDelete}><button onClick={this.deleteBlog}>Delete</button></div>        
        </div>
      </div>
    )
  }
}

TogglableBlog.propTypes = {
  title: PropTypes.string.isRequired,
  blog: PropTypes.object.isRequired
}

export default TogglableBlog;