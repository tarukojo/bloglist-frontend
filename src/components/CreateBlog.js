import React from 'react'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

const CreateBlog = ({createNew, handleFieldChange, title, author, url}) => (
    <div>
      <h2>Create New Blog</h2>
  
      <form onSubmit={createNew}>
      <FormGroup>
      <ControlLabel>Title:</ControlLabel>
        <FormControl
            name="title"
            value={title}
            onChange={handleFieldChange}
          />
        <ControlLabel>Author:</ControlLabel> 
        <FormControl
            name="author"
            value={author}
            onChange={handleFieldChange}
          />
        <ControlLabel>Url:</ControlLabel> 
        <FormControl
            name="url"
            value={url}
            onChange={handleFieldChange}
          />
          <p/>
          <Button bsStyle="success" type="submit">Create</Button>
          </FormGroup>
      </form>
    </div>
  )

  export default CreateBlog