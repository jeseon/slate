import React, { Component } from 'react'
import { TopMenu, CommentList } from './components'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <CommentList className="App-body"/>
      </div>
    );
  }
}

export default App;
