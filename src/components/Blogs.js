  import React from 'react'
  import Blog from './Blog'
  import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

  const BlogForm = ({blogs, user}) => (
    <div>
      
        <h2>Blogs</h2>
          <table><tbody>
          {blogs.map(blog => 
            <tr key='${blog._id}'><td>
            <Link to={`/blogs/${blog.id}`}>
            {blog.title} {blog.author}
            </Link>
            </td></tr>
          )}
          </tbody></table>

      </div>
  )

  export default BlogForm