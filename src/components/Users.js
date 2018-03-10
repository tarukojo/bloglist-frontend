import React from 'react'
import User from './User'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, PageHeader, Table } from 'react-bootstrap'

class Users extends React.Component {
    render() {
        const users = this.props.users
        return (
        <div>
            <PageHeader>Users</PageHeader>
            <Table striped hover condensed>
                <tr><td></td><td><strong>Blogs added</strong></td></tr>
            {users.map(user => <tr key={user.id}><td><Link to={`/users/${user.id}`}>{user.name}</Link></td><td>{user.blogs.length}</td></tr>)}
            </Table>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      users: state.users
    }
  }
  
  const ConnectedUsers = connect(mapStateToProps)(Users) 
  
  export default ConnectedUsers