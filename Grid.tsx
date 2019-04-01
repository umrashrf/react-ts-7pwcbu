import uuid from 'uuid'
import React, { Component } from 'react'
import UnsplashImage from './UnsplashImage'

interface GridProps {
  size: string,
}
interface GridState {
  keyword?: string,
}
export default class Grid extends Component<GridProps, GridState> {
  size: string

  constructor(props) {
    super(props)
    this.state = {}
  }

  search = (e) => {
    this.setState({ 
      keyword: e.target.value,
    })
  }

  render() {
    return (
      [
        <p>
          <input 
            style={{width: '300px'}}
            placeholder='Type your keyword here (at least 3 characters)'
            value={this.state.keyword}
            onChange={this.search}
          />
        </p>
      ].concat(
        Array.from(Array(9).keys()).map(() => {
          if (this.state.keyword 
          && this.state.keyword.length >= 3) {
            return <UnsplashImage 
                    key={uuid.v4}
                    keyword={this.state.keyword} 
                    size={this.props.size} />
          }
        })
      )
    )
  }
}