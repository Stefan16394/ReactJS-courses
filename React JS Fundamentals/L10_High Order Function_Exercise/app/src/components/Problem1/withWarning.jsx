import React, { Component } from 'react'

function withWarning(WrappedComponent) {
    return class extends Component {
        render() {
            return (
                <div className="alert">
                    <span className="alert-symbol">&#9888;</span>
                     <WrappedComponent/>
                </div>
            )
        }
    }
}

export default withWarning;
