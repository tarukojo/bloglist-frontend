import React from 'react'
import blogService from './services/blogs'
import LoginForm from './components/Login'
import BlogForm from './components/Blogs'
import CreateBlog from './components/CreateBlog'
import loginService from './services/login'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null,
      title: '',
      author: '', 
      url: '',
      message: ''
    }
  }

  async componentDidMount() {
    try {
      const origBlogs = await blogService.getAll() 
      const blogs = origBlogs.sort(function(a, b) {
        return b.likes - a.likes
      })
      this.setState({ blogs })
    } catch (exception) {
      this.setState({
        error: 'Username or/and password is wrong',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
    
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({user})
      
      blogService.setToken(user.token)
    }
  }
  
  handleFieldChange = (event) => {
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
      console.log(user)

      blogService.setToken(user.token)
    } catch(exception) {
      this.setState({
        error: 'Username or/and password is wrong',
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

  createNew = (event) => {
    event.preventDefault()
    console.log("Creating new blog item")
    try {   
      blogService.create({ 'title': this.state.title, 'author': this.state.author, 'url': this.state.url })

      blogService.getAll().then(blogs =>
        this.setState({ blogs: blogs, message: 'Created new blog'})
      )
    } catch (exception) {
      this.setState({
        error: 'Cannot create a new blog'
      })
    }
    
    this.createBlog.toggleVisibility()    
    setTimeout(() => {
      this.setState({message: null})
    }, 5000)
  }

  render() {
    return (
      <div>
      <Notification message={this.state.message}/>   
      {this.state.user === null ?
      <Togglable buttonLabel="Login" ref={component => this.noteForm = component}>
      <LoginForm username={this.state.username} handleFieldChange={this.handleFieldChange}
        password={this.state.password} login={this.login} /></Togglable> :
      <div>
        <p>{this.state.user.name} logged in</p> <form onSubmit={this.logout}><button type="submit" name="logout">Log out </button></form>
        <Togglable buttonLabel="Create blog" ref={component => this.createBlog = component}><CreateBlog createNew={this.createNew} handleFieldChange={this.handleFieldChange} 
          title={this.state.title} author={this.state.author} url={this.state.url} /></Togglable>
        <BlogForm blogs={this.state.blogs}/>
      </div>}
      </div>
    );
  }
}

export default App;
