import React, { Component } from 'react'

const admin='c2262186-22e8-4f94-8833-643697d221cd'
const user='46d931a3-750c-4290-b66b-e662311685c8'

function withAuthorization(WrappedComponent, roles) {
    return class WithAuthorization extends Component {
        constructor(props) {
            super(props);
            this.state = {
                role:sessionStorage.getItem('roleid')
            };
        }

        render = () => {
            let userHasAccess = roles.includes(this.state.role)
         
            if (userHasAccess) {
                return <WrappedComponent {...this.props} />
            } else {
                return <h1>Unauthorized</h1>
            }
        }
    }
}

export function withAdminAuthorization(Component) {
    return withAuthorization(Component, [admin]);
}

export function withUserAuthorization(Component) {
    return withAuthorization(Component, [admin,user]);
}
