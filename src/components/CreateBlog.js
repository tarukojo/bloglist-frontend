import React from 'react'

const CreateBlog = ({createNew, handleFieldChange, title, author, url}) => (
    <div>
      <h2>Create New Blog</h2>
  
      <form onSubmit={createNew}>
        <div>
          <div>Title:</div> 
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleFieldChange}
          />
        </div>
        <div>
          <div>Author:</div> 
          <input
            type="text"
            name="author"
            value={author}
            onChange={handleFieldChange}
          />
        </div>
        <div>
          <div>Url:</div> 
          <input
            type="text"
            name="url"
            value={url}
            onChange={handleFieldChange}
          />
        </div>
        <div>
        <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )

  export default CreateBlog