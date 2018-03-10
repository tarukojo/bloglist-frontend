import React from 'react'

const Users = ({users}) => (
    <div>
        <h2>Users</h2>
        <table>
            <tbody>
                <tr><td></td><td><strong>Blogs added</strong></td></tr>
        {users.map(user => <tr key={user.id}><td>{user.name}</td><td>{user.blogs.length}</td></tr>)}
            </tbody>
        </table>
    </div>
)

export default Users