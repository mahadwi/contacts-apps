import React from 'react';

class MyComponent extends React.Component {
    render() {
        return <p>Hello, {this.props.name}</p>
    }
}

export default MyComponent;