import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


class EditPage extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state ? this.props.location.state.post : null
    }

    formRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleUpdatePost(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    renderEditForm() {
        return (
            <div className="add-service-page">
                <div className="add-page-header">
                    <p className='page-title'>Edit <span className='mobile-erase'>::</span></p>
                </div>
                <div className='add-service-form'>
                    <form 
                        ref={this.formRef} 
                        autoComplete="off" 
                        onSubmit={this.handleSubmit}
                    >
                        <div className='form-item'>
                            <label className='form-label'>Service Title :: </label>
                            <input
                                className="service-form"
                                name="title"
                                value={this.state.formData.title}
                                onChange={this.handleChange}
                                required
                            /> 
                        </div>
                        <div className='form-item'>
                            <label className='form-label'>Description of Service :: </label>
                            <textarea 
                                className="service-form description"
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
                                Update Service
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formData ? this.renderEditForm() : <Redirect to='/' />;
    }
}

export default EditPage