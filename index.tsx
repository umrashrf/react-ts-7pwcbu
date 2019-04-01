import React, { Component } from 'react'
import { render } from 'react-dom'
import Grid from './Grid'
import './style.css'

const KEYWORD: string = 'Miami'

interface AppProps {
}
interface AppState {
}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <Grid keyword={KEYWORD} size='300' />
    );
  }
}

render(<App />, document.getElementById('root'))
