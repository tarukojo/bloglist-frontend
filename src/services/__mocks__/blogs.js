let token = null

const blogs = [
    {
        _id: "5a451df7571c224a31b5c8ce",
        id: "5a451df7571c224a31b5c8ce",
        title: "HTML on helppoa",
        author: "Writer Woman",
        likes: 10,
        user: {
            _id: "5a437a9e514ab7f168ddf138",
            username: "foobar",
            name: "Miska Manninen"
        }
    },
    {
        _id: "5a451df7371c224a31b5c8ce",
        id: "5a451df7371c224a31b5c8ce",
        title: "HTML on helppoa 2",
        author: "Laura Laatikko",
        likes: 8,
        user: {
          _id: "5a437a9e514ab7f168ddf138",
          username: "foobar",
          name: "Miska Manninen"
        }
    }
    
]

const getAll = () => {
    return Promise.resolve(blogs)
}

const setToken = (token) => {
    return
}
  
export default { getAll, blogs, setToken }