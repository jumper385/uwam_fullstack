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

  onUploadChange = async (e) => {
    this.setState({file: e.target.files[0]})
  }

  onSubmitFile = async(e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('photo', this.state.file)
    let axiosData = await axios.post('/api/images', formData)
    console.log(axiosData.data.filename)
    this.setState({recentFilename:axiosData.data.filename})
  }

  render() {
    return (
      <div>
        <h1>Create a New Article</h1>
        <p>Articles need to be written!!! 🤯</p>
        <br />
        <p>Submit an Image</p>
        <form>
          <input name='photo' onChange={this.onUploadChange} type='file' />
          <input type='submit' onClick={this.onSubmitFile}/>
        </form>
        <p>{`copy this URL for the last img: /api/images/${this.state.recentFilename}` || 'no recent image id'}</p>
        <br />
        <form>
          <p>Title</p>
          <input name='title' type='text' onChange={this.onChange}/>
          <p>Article</p>
          <textarea name='article' onChange={this.onChange}/>
          <br />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        < ReactMarkdown className='Article' source={this.state.article || 'no article present'}/>
      </div>
    )
  }
}

export default Create