import React, { Component } from 'react'
import { render } from 'react-dom'
import Grid from './Grid'
import './style.css'

interface AppProps {
}
interface AppState {
}
class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <div className='half'>
          <Grid size='300' />
        </div>
        <div className='half'>
          <Grid size='300' />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'))
