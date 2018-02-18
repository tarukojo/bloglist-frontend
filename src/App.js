import React from 'react'
import blogService from './services/blogs'
import LoginForm from './components/Login'
import BlogForm from './components/Blogs'
import loginService from './services/login'
import Notification from './components/Notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
    
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({user})
      
      blogService.setToken(user.token)
    }
  }
  
  handleLoginFieldChange = (event) => {
    console.log("test ", event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }
  
  login = async (event) => {
    event.preventDefault()
    console.log("loginissa")
    try{
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
  
      this.setState({ username: '', password: '', user})
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
    } catch(exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = (event) => {
    event.preventDefault()
    console.log("Logging out")
    window.localStorage.removeItem('loggedBlogappUser')
    blogService.setToken(null)
    this.setState({ username: '', password: '', user: null})
  }

  render() {
    return (
      <div>
     <Notification message={this.state.error}/>   
      {this.state.user === null ?
      <LoginForm username={this.state.username} handleLoginFieldChange={this.handleLoginFieldChange}
        password={this.state.password} login={this.login} /> :
      <div>
        <p>{this.state.user.name} logged in</p> <form onSubmit={this.logout}><button type="submit" name="logout">Log out </button></form>
        <BlogForm blogs={this.state.blogs} />
      </div>}
      </div>
    );
  }
}

export default App;
