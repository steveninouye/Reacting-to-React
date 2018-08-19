import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'this is text from state',
            hasLoaded: false
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount() {
        this.setState({ hasLoaded: true });
    }

    handleInput(event) {
        const value = event.target.value; // need to save event in a variable or will it will be garbage collected before setState changes the state of the Component
        this.setState((prevState) => {
            return { text: value };
        });
    }

    handleButtonClick() {
        this.setState((prevState) => {
            return { hasLoaded: !prevState.hasLoaded };
        });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <Fragment>
                    <h1>{`${this.props.str} ${this.state.text}`}</h1>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleInput}
                    />
                    <button onClick={this.handleButtonClick}>
                        Load New Content
                    </button>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <h1>Loading...</h1>
                    <button onClick={this.handleButtonClick}>
                        Load Content
                    </button>
                </Fragment>
            );
        }
    }
}

export default App;
