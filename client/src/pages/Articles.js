import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Articles extends Component {

  componentDidMount = async() => {
    let articles = await axios.get('/api/articles')
    this.setState({articles:articles.data})
    console.log(this.state)
  }

  onClick = async e => {
    let deleteData = await axios.delete('/api/articles',{data:{id:e.target.name}})
    let articles = await axios.get('/api/articles')
    this.setState({articles:articles.data})
    console.log(deleteData)
  }

  render() {
    return (
      <div>
        <h1>Current Articles</h1>
        <div>
          {this.state ? this.state.articles.map((article, index) => {
            return(
              <div key={article._id}>
                <Link to={`/client/articles/${article._id}`}>{article.title} || {article._id}</Link>
                <button name={article._id} onClick={this.onClick}>x</button>
              </div>
            )
          }) : 'no articles just yet...' }
        </div>
      </div>
    )
  }
}

export default Articles