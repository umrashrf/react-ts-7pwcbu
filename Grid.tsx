import React, { Component } from 'react'
import UnsplashImage from './UnsplashImage'

interface GridProps {
  size: string,
  keyword: string,
}
interface GridState {
}
export default class Grid extends Component<GridProps, GridState> {
  size: string
  keyword: string
  
  search = (e) => {
    // change url
  }

  render() {
    return (
      [
        <p className='inputWrapper'>
          <input 
            style={{width: '300px'}}
            placeholder='Type your keyword here (at least 3 characters)'
            value={this.props.keyword}
            onChange={this.search}
          />
        </p>
      ].concat(
        Array.from(Array(12).keys()).map(() => {
          if (this.props.keyword 
          && this.props.keyword.length >= 3) {
            return <UnsplashImage 
                    keyword={this.props.keyword} 
                    size={this.props.size} />
          }
        })
      )
    )
  }
}