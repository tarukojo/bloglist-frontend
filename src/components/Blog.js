import React from 'react'
import blogService from './../services/blogs'
import { BrowserRouter as Link } from 'react-router-dom'

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      blog: this.props.blog,
      user: this.props.blog.user.name
    }
  }

  likeBlog = (event) => {
    event.preventDefault()
    console.log(this.state.blog.likes + 1)
    try {
      const user =JSON.parse(window.localStorage.getItem('loggedBlogappUser'))
      console.log(user)
      const newBlog = { 
        user: user.id,
        title: this.state.blog.title,
        author: this.state.blog.author,
        url: this.state.blog.url,
        likes: this.state.blog.likes + 1
      }
      console.log(newBlog)
      blogService.update(this.state.blog.id, newBlog)
      this.setState({blog: { title: newBlog.title, author: newBlog.author, url: newBlog.url, likes: newBlog.likes }})
    } catch (exception) {
      console.log(exception)
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
      <div key={this.state.blog.id} style={blogStyle}>  
        <div>{this.state.blog.title}</div>
        <div>{this.state.blog.author}</div>
        <div><a href={this.state.blog.url}>{this.state.blog.url}</a></div>
        <div>{this.state.blog.likes} <button onClick={this.likeBlog}>Like</button></div>
        <div>Added by {this.state.user}</div>
      </div>
    )
  }

}

export default Blog