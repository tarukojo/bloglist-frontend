import React from 'react'
import User from './User'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Users = ({users}) => (
    <div>
        <h2>Users</h2>
        <table>
            <tbody>
                <tr><td></td><td><strong>Blogs added</strong></td></tr>
        {users.map(user => <tr key={user.id}><td><Link to={`/users/${user.id}`}>{user.name}</Link></td><td>{user.blogs.length}</td></tr>)}
            </tbody>
        </table>
    </div>
)

export default Users