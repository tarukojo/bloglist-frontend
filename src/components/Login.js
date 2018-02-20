import React from 'react'

const loginForm = {
  paddingTop: 10,
  paddingLeft: 2,
  marginBottom: 5
}

const usernameDiv = {
  paddingTop: 10,
  paddingLeft: 2,
  marginBottom: 5
}

const LoginForm = ({username, handleFieldChange, password, login}) => (
    <div className="loginForm">
      <h2>Kirjaudu</h2>
  
      <form onSubmit={login}>
        <div className="usernameDiv">
          käyttäjätunnus
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleFieldChange}
          />
        </div>
        <div>
          salasana
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleFieldChange}
          />
        </div>
        <button type="submit">kirjaudu</button>
      </form>
    </div>
  )

  export default LoginForm