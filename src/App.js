import React from 'react'
import blogService from './services/blogs'
import LoginForm from './components/Login'
import BlogForm from './components/Blogs'
import CreateBlog from './components/CreateBlog'
import loginService from './services/login'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import userService from './services/users'
import Users from './components/Users'
import User from './components/User'
import Blog from './components/Blog'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleSubmitMessage } from './reducers/notificationReducer'
import { blogInitialization } from './reducers/blogReducer'
import { userInitialization } from './reducers/userReducer'
  
const Menu = () => (
  <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      Blog List App
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem href="#">   
        <NavLink to="/blogs" activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}>Blogs</NavLink>&nbsp;
      </NavItem>
      <NavItem href="#">
        <NavLink to="/users" activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}>Users</NavLink>&nbsp;
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

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
      message: '',
      users: []
    }
  }

  componentDidMount = async () => {
    try {
      this.props.blogInitialization()

      this.props.userInitialization()
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

      blogService.getAll().then(blogs => {
        this.setState({ blogs: blogs})
        this.props.handleSubmitMessage('New message created:'+ this.state.title)
      })
    } catch (exception) {
      this.setState({
        error: 'Cannot create a new blog'
      })
    }
    
    this.createBlog.toggleVisibility()    
    setTimeout(() => {
      this.props.handleSubmitMessage('')
    }, 5000)
  }

  userById = (id) => 
    this.props.users.find(u => u.id === id)

  blogById = (id) =>
    this.props.blogs.find(b => b.id === id)
  
  render() {
    return (
      <div className="container"> 
        <Notification />   
        {this.state.user === null ?
        <Togglable buttonLabel="Login" ref={component => this.noteForm = component}>
        <LoginForm username={this.state.username} handleFieldChange={this.handleFieldChange}
          password={this.state.password} login={this.login} /></Togglable> :
        <div>
          <p>{this.state.user.name} logged in</p> <form onSubmit={this.logout}><Button type="submit" name="logout">Log out </Button></form>
          <Togglable buttonLabel="Create blog" ref={component => this.createBlog = component}><CreateBlog createNew={this.createNew} handleFieldChange={this.handleFieldChange} 
            title={this.state.title} author={this.state.author} url={this.state.url} /></Togglable>
          <Router>
            <div>
            <div>
              <Menu />
            </div>
            <Route exact path="/" render={() => <BlogForm blogs={this.state.blogs}/>} />
            <Route exact path="/users" render={() => <Users />} />
            <Route exact path="/blogs" render={() => <BlogForm />} />
            <Route exact path="/users/:id" render={({match}) =>
              <User user={this.userById(match.params.id)} />}/>
            <Route exact path="/blogs/:id" render={({match}) =>
              <Blog blog={this.blogById(match.params.id)} />}/>
            </div>
          </Router>
        </div>}    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  { handleSubmitMessage, blogInitialization, userInitialization }
)(App)
