import React, { Component } from 'react'
import UnsplashImage from './UnsplashImage'

interface Props {
  size: string,
  keyword: string,
}
interface State {
}

export default class Grid extends Component<Props, State> {
  size: string
  keyword: string

  render() {
    return (
      Array.from(Array(3).keys()).map(() => {
        return Array.from(Array(3).keys()).map(() => {
          return <UnsplashImage 
                    keyword={this.props.keyword} 
                    size={this.props.size} />
        })
      })
    )
  }
}