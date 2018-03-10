import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

class Notification extends React.Component {
  render() {
    const message = this.props.message.message

    if (message === null || message === '') {
      return null
    }
    return (
      <Alert color="success">
        {message}
      </Alert>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification) 

export default ConnectedNotification