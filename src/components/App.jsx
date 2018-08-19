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
        const value = event.target.value;
        this.setState((prevState) => {
            console.log(value);
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
