import React, { Component, Fragment } from 'react';

// const App = (props) => {
//     return <h1>{props.str}</h1>;
// };

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'this is text from sate'
        };
    }

    render() {
        return(
        <Fragment>
            <h1>{`${this.props.str} ${this.state.text}`}</h1>
            <input type="text" />
        </Fragment>)
    }
}

export default App;
