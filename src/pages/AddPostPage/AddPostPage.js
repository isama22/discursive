import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Select from 'react-select'
import './AddPostPage.css'

class AddPostPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      title: '',
      description: ''
    }
  }

  formRef = React.createRef()

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddPost(this.state.formData, this.props.history)
  }


  render() {
    return (
      <div className="add-post-page">
        <div className="add-page-header">
          <p className='page-title'>Add a post</p>
        </div>
        <div className='add-service-form'>
          <form
            ref={this.formRef} 
            autoComplete="off" 
            onSubmit={this.handleSubmit}
          >
            <div className='form-item'>
              <label className='form-label'>Title :: </label>
              <input
                className="service-form"
                name="title"
                value={this.state.formData.title}
                onChange={this.handleChange}
                required
              /> 
            </div>
            <div className='form-item'>
              <label className='form-label'>Description of Post :: </label>
              <textarea 
                className="description"
                name="description"
                value={this.state.formData.description}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className='add-links'>
                <Link className='cancel-button' to='/'>Cancel</Link>
                <button
                    className="btn"
                    type="submit"
                    disabled={this.state.invalidForm}
                >
                    Add
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPostPage