import React from 'react'
import blogService from './../services/blogs'

class TogglableBlog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      deleted: false,
      blog: this.props.id
    }
  }

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible})
    console.log(this.props.children)
  }

  deleteBlog = (event) => {
    event.preventDefault()
    try {
      console.log(this.state.blog)
      blogService.deleteBlog(this.state.blog)
      this.setState({ deleted: true })
    } catch (exception) {
      console.log(exception)
    }
  }

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : (this.state.deleted ? 'none' : '') }
    const showWhenVisible = { display: this.state.visible ? (this.state.deleted ? 'none' : '') : 'none' }
    const hideWhenDeleted = { display: this.state.deleted ? 'none' : '' }

    
    return (
      <div key={this.props.id} style={hideWhenDeleted}>
        <div style={hideWhenVisible}>
          <a href='#' onClick={this.toggleVisibility}>{this.props.title}</a>
        </div>
        <div style={showWhenVisible}>
          <a href='#' onClick={this.toggleVisibility}>{this.props.title}</a>
          {this.props.children}  
          <div><button onClick={this.deleteBlog}>Delete</button></div>        
        </div>
      </div>
    )
  }
}

export default TogglableBlog;