import React, { Component } from 'react'
import FormManager from '../../hoc/FormManager';
import user from '../models/user'

class Login extends Component {

    render() {
        const style={
            padding: "20px",
            maxWidth: "400px",
            margin: "auto",
        }
        return (
            <form style={style} onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input name ='username' type="text" className="form-control" value={this.props.username} onChange={this.props.handleChange}  aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name ='password' type="password" className="form-control" value={this.props.password} onChange={this.props.handleChange}  placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}


export default FormManager(Login,user.login)