import React, { Component } from 'react';
import InputTextArea from './InputTextArea';
import ResultArea from './ResultArea';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      currentItem: {text:'',date:'',key:0}
    }
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentDate = new Date();
    const currentItem = {
      text: itemText,
      date: currentDate.toString(),
      key: this.state.currentItem.key
    }
    this.setState({currentItem});
  }

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    newItem.key = this.state.currentItem.key + 1;
    if(newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({items, currentItem:{text:'',key:this.state.currentItem.key, date:''}})
    }
  }
  removeItem = item => {
    const oldItems = this.state.items
    var items = oldItems.filter(function(value){
      return value.key !== item.key;
    });
    this.setState({items, currentItem:{text:'',key:this.state.currentItem.key, date:''}})
  }

  render() {
    return (
      <div className="App">
        <InputTextArea 
          addItem={this.addItem}
          currentItem ={this.state.currentItem}
          handleInput = {this.handleInput}
          inputElement = {this.inputElement}
        />
        <br/>
        <ResultArea entries={this.state.items} removeItem = {this.removeItem} />
      </div>
    );
  }
}

export default App;
