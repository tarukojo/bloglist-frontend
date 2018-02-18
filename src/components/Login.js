import React from 'react'

const LoginForm = ({username, handleLoginFieldChange, password, login}) => (
    <div>
      <h2>Kirjaudu</h2>
  
      <form onSubmit={login}>
        <div>
          käyttäjätunnus
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleLoginFieldChange}
          />
        </div>
        <div>
          salasana
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleLoginFieldChange}
          />
        </div>
        <button type="submit">kirjaudu</button>
      </form>
    </div>
  )

  export default LoginForm