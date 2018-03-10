import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const message = this.props.message.message

    if (message === null) {
      return null
    }
    return (
      <div className="message">
        {message}
      </div>
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