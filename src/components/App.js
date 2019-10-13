import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import ToDoForm from './ToDoForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageHeader: "Make some To's to Do's",
      showList: false
    }

    // this.ifnteriorfuction = this.interiorfuction.bind(this)
  }

  

  render () {
    return (
        <div className="App">
          <Header headerMessage={this.pageHeader}/> 
          <ToDoForm />
        </div>
      );
  }

  
}

export default App;
