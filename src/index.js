import React, { Component } from 'react'
import { render } from 'react-dom'
import Content from './component/Content'
import AppBar from './component/AppBar.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  state = {
    width: null,
    height: null
  }

  updateDimensions() {
    console.log("updateDimensions")
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { width, height } = this.state
    return (
      <div ref={this.saveRef}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0  " />

        <div id="content-wrapper" className="mui--text-center" style={{ paddingBottom: '0' }}>
          <Content />
        </div>
        <footer>
          <div className="mui--text-center">
            <a style={{ textAlign: 'center', height: '8%' }} href="https://www.linkedin.com/in/daniel-christiani-6b22904a/">
              <img style={{ height: '100%' }} src="../../assets/view-my-linkedin-profile.png" alt="Linkedin Page" />
            </a>
          </div>
        </footer>
      </div>
    )
  }
}
render(<App />, document.querySelector('#app'))