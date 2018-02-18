import React from 'react'
const Blog = ({key, blog}) => (
    <tr>
      <td key={key}>{blog.title}</td>
      <td key={key+'2'}>{blog.author}</td>
    </tr>
)

export default Blog