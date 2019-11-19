import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown' 
import axios from 'axios'

class ArticlePage extends Component {

    axiosData = async() => {
        let data = await axios.get(`/api/articles/${this.props.data}`)
        let { article, title } = await data.data
        this.setState({article:article, title:title})
        console.log(this.state)
    }

    componentDidMount(){
        console.log(this.props)
        this.axiosData()
    }

    render(){
        console.log(this.props)

        return(
            <div>
                <h1>{this.state ? this.state.title || 'no title just yet...' : 'loading title...'}</h1>
                <ReactMarkdown source={this.state ? this.state.article || 'no article just yet...' : 'loading article...'}/> 
            </div>
        )
    }
}

export default ArticlePage