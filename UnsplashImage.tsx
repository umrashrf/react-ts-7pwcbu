import uuid from 'uuid'
import React, { Component } from 'react'

interface Props {
  size: string,
  keyword: string,
}
interface State {
}

export default class UnsplashImage extends Component<Props, State> {
  size: string
  keyword: string

  render() {
    const { size, keyword } = this.props
    const sizes = size + 'x' + size
    return (
      <img 
        src={`https://source.unsplash.com/random/${sizes}?${keyword},${uuid.v4()}`}
        max-width={this.size}
      />
    )
  }
}