import React from 'react';
import axios from 'axios';
import path from 'path';

class App extends React.Component {

  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = async () => {
    let userInfo = await axios.post(path.join(__dirname, 'api', 'users'), this.state)
    let userCollection = userInfo ? await axios.get(path.join(__dirname, 'api', 'users')) : 'user couldn\'t be added...'
    console.log(userCollection || 'ummm... not sure if there are any users just yet...')
  }

  render(){
    return (
      <div className="App">
        <h1>This is new boilerplate for react!</h1>
        <p>username</p><input onChange={this.onChange} type='text' name='username'/>
        <p>random phrase</p><input onChange={this.onChange} type='text' name='phrase'/>
        <br />
        <button onClick={this.onSubmit} >Submit</button>
      </div>
    );
  }
  
}

export default App;
