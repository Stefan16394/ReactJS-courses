import React, { Component } from 'react'

const withLogging = (WrappedComponent) => {

    return class extends Component {
        componentDidMount() {
            console.log(`${WrappedComponent.name} ready!`)
        }
        render() {
            return (
                <div>
                    <WrappedComponent />
                </div>

            )
        }
    }
}

export default withLogging;