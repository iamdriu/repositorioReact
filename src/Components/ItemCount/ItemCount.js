import { Component } from 'react'

class ClassCount extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0}
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1 
        })
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1 
        })
    }

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <button onClick={this.decrement}type="button" class="btn btn-light">-</button>
                <p>{this.state.count}</p>
                <button onClick={this.increment} type="button" class="btn btn-light">+</button>
            </div>
        )
    }
}

export default ItemCount