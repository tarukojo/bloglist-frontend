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
    } catch(exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  render() {
    return (
      <div>
     <Notification message={this.state.error}/>   
      {this.state.user === null ?
      <LoginForm username={this.state.username} handleLoginFieldChange={this.handleLoginFieldChange}
        password={this.state.password} login={this.login} /> :
      <div>
        <p>{this.state.user.name} logged in</p>
        <BlogForm blogs={this.state.blogs} />
      </div>}
      </div>
    );
  }
}

export default App;
