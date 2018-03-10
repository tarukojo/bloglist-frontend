import React from 'react'

const User = ({user}) => (
    <div>
        <h2>{user.name}</h2>
        <strong>Added blogs</strong>
        <ul>
        {user.blogs.map(blog => <li key={blog._id}>{blog.title}</li>)}
        </ul>
    </div>
)

export default User