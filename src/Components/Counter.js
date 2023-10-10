import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        })
        )
    }
    render() {
        return (
            <div>
                <div>The button has been pressed {this.state.count} times</div>
                <button onClick={() => this.increment()}>increment</button>
            </div>

        )
    }
}

export default Counter