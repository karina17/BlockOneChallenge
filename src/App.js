import "./App.css";
import React, { useEffect, useState } from "react";
//import { ListTrans } from "./ListTrans";
import AddNewTransaction from "./AddNewTransaction";
import TransactionTable from "./transactionTable";

class App extends React.Component { 
  constructor(props) {
    super (props)
    this.state = {
      data: [],
    }
    //this.hideComponent = this.hideComponent.bind(this);
  }

  componentDidMount() {
    fetch('http://my-json-server.typicode.com/alexradulescu/transactions-fake-api/transactions')
    .then((response) => response.json())
    .then(dataList => {
        this.setState({ 
          data: dataList.sort( (a, b) => a.timestamp < b.timestamp),
      });
    });
  }

  state = { showing: true};

  render () {
    const { showing } = this.state;
    return (
      <div className="App">
        <h1>Transactions Table</h1>
        <button onClick={() => this.setState({ showing: !showing })}>
          Add Transaction
        </button>
        <br/>
        {showing && <AddNewTransaction/>}
        <TransactionTable 
          data = {this.state.data}
        />
      </div>
    );
  }
}

export default App;