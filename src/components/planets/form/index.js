import React, { Fragment, useState } from "react";

const initialState = {
  name: "",
  description: "",
  link: "",
  img_url: "",
  id: ""
}

const Form = (props) => {

  const [fields, setFields] = useState(initialState)

  const handleFieldsChange = (event) => setFields({
    ...fields,
    [event.currentTarget.name]: event.currentTarget.value
  })

  const handleSubmit = (event) => {
    props.addPlanet(fields)
    event.preventDefault()
    setFields(initialState)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange} />
        </div>
        <div>
          <label htmlFor="img_url">img_url:</label>
          <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange} />
        </div>
        <div>
          <label htmlFor="link">link:</label>
          <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange} />
        </div>
        <div>
          <label htmlFor="id">id:</label>
          <input id="id" type="text" name="id" value={fields.id} onChange={handleFieldsChange} />
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  )
}


export default Form;