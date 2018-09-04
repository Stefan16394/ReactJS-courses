import React, { Component } from 'react'
import withForm from '../helpers/withForm';
import Form from './Form';

class Form2 extends Component {

    render() {
        return (
            <div>
                <input name='another' type='password' />
            </div>
        )
    }
}

Form2 = withForm(Form2)

export default Form2;