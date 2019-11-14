import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown' 

class Create extends Component {

  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {article:'no article'}
  }
  onChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = e => {
    console.log(this.state)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Create a New Article</h1>
        <p>Articles need to be written!!! 🤯</p>
        <form>
          <p>Title</p>
          <input type='text' onChange={this.onChange}/>
          <p>Article</p>
          <textarea name='article' onChange={this.onChange}/>
          <br />
          <input onClick={this.onSubmit} type='submit' />
        </form>
        < ReactMarkdown source={this.state.article || 'no article present'}/>
      </div>
    )
  }
}

export default Create