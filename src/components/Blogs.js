  import React from 'react'
  import Blog from './Blog'

  const BlogForm = ({blogs}) => (
    <div>
      
        <h2>blogs</h2>
        <table>
          <tbody>
          {blogs.map(blog => 
            <Blog key={blog._id} blog={blog}/>
          )}
          </tbody>
        </table>
      </div>
  )

  export default BlogForm