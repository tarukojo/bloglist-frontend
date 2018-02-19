  import React from 'react'
  import Blog from './Blog'
  import TogglableBlog from './TogglableBlog';

  const BlogForm = ({blogs}) => (
    <div>
      
        <h2>Blogs</h2>

          {blogs.map(blog => 
            <TogglableBlog title={blog.title} id={blog.id} ref={component => this.blogKey = component}>
            <Blog key={blog._id} blog={blog}/>
            </TogglableBlog>
          )}

      </div>
  )

  export default BlogForm