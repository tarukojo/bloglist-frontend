  import React from 'react'
  import Blog from './Blog'
  import TogglableBlog from './TogglableBlog';

  const BlogForm = ({blogs, user}) => (
    <div>
      
        <h2>Blogs</h2>

          {blogs.map(blog => 
            <TogglableBlog key={blog.id} title={blog.title} blog={blog} ref={component => this.blogKey = component}>
            <Blog key={blog._id} blog={blog}/>
            </TogglableBlog>
          )}

      </div>
  )

  export default BlogForm