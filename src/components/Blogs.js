import React from 'react'
import Blog from './Blog'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class BlogForm extends React.Component {
    render() {
        const blogs = this.props.blogs
        return (
        <div>
          
            <h2>Blogs</h2>
              <table><tbody>
              {blogs.map(blog => 
                <tr key='${blog.id}'><td>
                <Link to={`/blogs/${blog.id}`}>
                {blog.title} {blog.author}
                </Link>
                </td></tr>
              )}
              </tbody></table>

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