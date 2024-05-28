// Write your code here
import {Component} from 'react'
import './index.css'

const Headimageurl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const Tailimageurl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    TotalCount: 0,
    HeadCount: 0,
    TailsCount: 0,
    isHead: Headimageurl,
  }

  onChangeValue = () => {
    const {HeadCount, TailsCount, TotalCount} = this.state
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 1) {
      this.setState({HeadCount: HeadCount + 1})
      this.setState({isHead: Headimageurl})
    } else {
      this.setState({TailsCount: TailsCount + 1})
      this.setState({isHead: Tailimageurl})
    }
    this.setState({TotalCount: TotalCount + 1})
  }

  render() {
    const {TotalCount, HeadCount, TailsCount, isHead} = this.state
    console.log(isHead)
    return (
      <div className="container">
        <div className="card">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="main-para">Heads (or) Tails</p>
          <div>
            <img src={isHead} alt="toss result" className="image-style" />
          </div>
          <button type="button" className="btn" onClick={this.onChangeValue}>
            Toss Coin
          </button>
          <div className="final-score">
            <p className="total-para">Total: {TotalCount}</p>
            <p className="Head-para">Heads: {HeadCount}</p>
            <p className="Tails-para">Tails: {TailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
