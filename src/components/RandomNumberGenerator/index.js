import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {generate: 0}

  generateBtn = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({generate: prevState.generate + randomNum}))
  }

  render() {
    const {generate} = this.state
    return (
      <div className="bg-cont">
        <div className="card-cont">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.generateBtn}>
            Generate
          </button>
          <p className="count">{generate}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
