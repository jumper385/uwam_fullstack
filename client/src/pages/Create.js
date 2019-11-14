import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown' 
import path from 'path'
import axios from 'axios'

class Create extends Component {

  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {article:'no article'}
  }
  onChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = async (e) => {
    e.preventDefault()
    console.log(path.join(__dirname, '/api/articles'))
    let data = await axios.post(path.join(__dirname, '/api/articles'), this.state)
    let allArticles = await axios.get(path.join(__dirname, '/api/articles'))
    console.log(allArticles)
  }

  render() {
    return (
      <div>
        <h1>Create a New Article</h1>
        <p>Articles need to be written!!! 🤯</p>
        <form>
          <p>Title</p>
          <input name='title' type='text' onChange={this.onChange}/>
          <p>Article</p>
          <textarea name='article' onChange={this.onChange}/>
          <br />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        < ReactMarkdown source={this.state.article || 'no article present'}/>
      </div>
    )
  }
}

export default Create