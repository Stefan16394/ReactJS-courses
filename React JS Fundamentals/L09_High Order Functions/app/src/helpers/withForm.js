import React, { Component } from 'react'

const withForm = (WrappedComponent) => {

    return class extends Component {

        render() {
            return (
                <div>
                    <input name='username' type='text' />
                    <input name='password' type='text' />
                    <WrappedComponent />
                </div>
            )
        }
    }
}

export default withForm;