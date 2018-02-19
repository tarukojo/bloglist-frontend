import React from 'react'


class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      blog: this.props.blog
    }
  }

  render() {
    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }
    return (
    
    <div style={blogStyle}>  
      <div>{this.state.blog.title}</div>
      <div><a href={this.state.blog.url}>{this.state.blog.url}</a></div>
      <div>{this.state.blog.likes} <button>Like</button></div>
      <div>Added by {this.state.blog.author}</div>     
    </div>
    
    )
  }

}

export default Blog