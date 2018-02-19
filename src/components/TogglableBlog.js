import React from 'react'

class TogglableBlog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible})

    console.log(this.props.children)
  }

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    return (
      <div key={this.props.title}>
        <div style={hideWhenVisible}>
          <a href='#' onClick={this.toggleVisibility}>{this.props.title}</a>
        </div>
        <div style={showWhenVisible}>
          <a href='#' onClick={this.toggleVisibility}>{this.props.title}</a>
          {this.props.children}          
        </div>
      </div>
    )
  }
}

export default TogglableBlog;