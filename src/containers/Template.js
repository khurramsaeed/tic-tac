import React, {Component} from 'react'

class Template extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>Tic Tac</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Template
