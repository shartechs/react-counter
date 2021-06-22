import React, {Component} from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.initialCount,
      countReverse: props.initialCount
    }
  }

    render() {

        return (
          <ThemeContext.Consumer>
            {style => (
              <div>
              <button style={style} onClick={() => this.changeCount(-1)}>-</button>
              <span>{this.state.count}</span>
              <span>{this.state.countReverse}</span>
              <button style={style} onClick={() => this.changeCount(1)}>+</button>
            </div>
            )}
            </ThemeContext.Consumer>
          )

    }

    changeCount(amount) {
      this.setState(prevState => {
        return {count: this.state.count + amount}

    })
    this.setState(prevState => {
      return {countReverse: this.state.countReverse - amount}

  })

}
}