import React from 'react'
import Blog from './Blog'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap'

class BlogForm extends React.Component {
    render() {
        const blogs = this.props.blogs
        return (
        <div>
            <PageHeader>Blogs</PageHeader>
            <ListGroup>
              {blogs.map(blog => 
                 <ListGroupItem key='${blog.id}'>
                  <Link to={`/blogs/${blog.id}`}>
                  {blog.title} {blog.author}
                  </Link>
                </ListGroupItem>
              )}
              </ListGroup>
          </div>
        )
    }
}   

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    users: state.users
  }
}

const ConnectedBlogForm = connect(mapStateToProps)(BlogForm) 

export default ConnectedBlogForm