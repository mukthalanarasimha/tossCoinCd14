import {Component} from 'react'

import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {
    TossResultImage: headsImage,
    headCount: 0,
    tails: 0,
  }

  TossResult = () => {
    const {headCount, tails} = this.state
    let tossImage = ''
    let latestHeadCount = headCount
    let latestTails = tails
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      tossImage = headsImage
      latestHeadCount += 1
    } else {
      tossImage = TailsImage
      latestTails += 1
    }
    this.setState({
      TossResultImage: tossImage,
      headCount: latestHeadCount,
      tails: latestTails,
    })
  }

  render() {
    const {TossResultImage, headCount, tails} = this.state
    const total = headCount + tails
    return (
      <div className="bg_container">
        <div className="min_container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragragh">Heads (or) Tails</p>
          <div className="image_toss_section">
            <img
              src={TossResultImage}
              alt="ss result"
              className="toss result"
            />
            <button
              className="toss_button"
              type="button"
              onClick={this.TossResult}
            >
              Toss coin
            </button>
          </div>
          <div className="result_container">
            <div className="result_show">
              <p>Total:{total}</p>
            </div>
            <div className="result_show">
              <p>heads:{headCount}</p>
            </div>
            <div className="result_show">
              <p>Tails:{tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
