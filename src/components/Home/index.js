// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {count: true}

  onIn = () => {
    this.setState(prevState => ({count: !prevState.count}))
  }

  onOut = () => {
    this.setState(prevState => ({count: !prevState.count}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="contain">
        {count ? (
          <div className="box">
            <Login />
            <div>
              <button onClick={this.onIn}>Login</button>
            </div>
          </div>
        ) : (
          <div className="box">
            <Logout />
            <div>
              <button onClick={this.onOut}>Logout</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
