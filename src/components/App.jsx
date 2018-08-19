import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'this is text from sate'
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        const value = event.target.value; // need to save event in a variable or will it will be garbage collected before setState changes the state of the Component
        this.setState((prevState) => {
            return { text: value };
        });
    }

    render() {
        return (
            <Fragment>
                <h1>{`${this.props.str} ${this.state.text}`}</h1>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleInput}
                />
            </Fragment>
        );
    }
}

export default App;
