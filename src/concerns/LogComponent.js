import React, { Component } from 'react';

//logic lang sya
const LogComponent = WrappedComponent => {
    return class extends Component {
        componentDidMount() {
            console.log("Log user data");
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}


export default LogComponent;