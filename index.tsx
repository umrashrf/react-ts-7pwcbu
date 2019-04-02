import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Grid from './Grid'
import './style.css'

interface AppProps {
}
interface AppState {
}
class App extends Component<AppProps, AppState> {
  render() {
    return (
      <Router>
        <Route 
          path="/:keyword1,:keyword2" 
          render={(args) => (
            <div>
              <div className='half'>
                <Grid keyword={args.match.params.keyword1} size="300" />
              </div>
              <div className='half'>
                <Grid keyword={args.match.params.keyword2} size="300" />
              </div>
            </div>
          )} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'))
