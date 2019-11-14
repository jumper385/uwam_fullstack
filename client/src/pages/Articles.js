import React, { Component } from 'react'
import axios from 'axios'

class Articles extends Component {

  componentDidMount = async() => {
    let articles = await axios.get('/api/articles')
    this.setState({articles:articles.data})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>Current Articles</h1>
        <div>
          {this.state ? this.state.articles.map((article, index) => {
            return(
              <div key={article._id}>
                {article.title} || {article._id}
              </div>
            )
          }) : 'no articles just yet...' }
        </div>
      </div>
    )
  }
}

export default Articles