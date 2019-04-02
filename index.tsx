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
          exact={true} 
          path="/"
          render={() => (
            <div>
              <div className='half'>
                <Grid keyword="" size="300" />
              </div>
              <div className='half'>
                <Grid keyword="" size="300" />
              </div>
            </div>
          )} />
        <div>
          <Route 
            path="/:keyword1" 
            render={({ match }) => (
             <div className='half'>
                <Grid keyword={match.params.keyword1} size="300" />
              </div>
            )} />
          <Route 
            path="/:keyword1/:keyword2" 
            render={({ match }) => (
              <div className='half'>
                <Grid keyword={match.params.keyword2} size="300" />
              </div>
            )} />
          </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'))
