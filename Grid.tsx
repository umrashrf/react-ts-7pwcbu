import React, { Component } from 'react'
import UnsplashImage from './UnsplashImage'

interface GridProps {
  size: string,
  keyword: string,
}
interface GridState {
  keyword?: string,
}
export default class Grid extends Component<GridProps, GridState> {
  size: string
  keyword: string
  
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
    const keyword = this.state.keyword || this.props.keyword
    return (
      [
        <p>
          <input 
            style={{width: '300px'}}
            placeholder='Type your keyword here (at least 3 characters)'
            value={keyword}
            onChange={this.search}
          />
        </p>
      ].concat(
        Array.from(Array(12).keys()).map(() => {
          if (keyword 
          && keyword.length >= 3) {
            return <UnsplashImage 
                    keyword={keyword} 
                    size={this.props.size} />
          }
        })
      )
    )
  }
}