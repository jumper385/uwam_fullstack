import React, { Component } from 'react'
import axios from 'axios'

class Articles extends Component {

  componentDidMount = async() => {
    let articles = await axios.get('/api/articles')
    this.setState({articles:articles})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>Current Articles</h1>
      </div>
    )
  }
}

export default Articles