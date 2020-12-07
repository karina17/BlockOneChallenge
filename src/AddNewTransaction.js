import React from 'react'

class AddNewTransaction extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "debit",
        showForm: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {  
      fetch('http://my-json-server.typicode.com/alexradulescu/transactions-fake-api/transactions', {
          method: 'POST',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(this.state)
        }).then(function(response) {
          console.log(response)
          return response.json();
        });
      
      alert("The form was submitted successfully!")
      event.preventDefault();
      event.target.reset();
    }
    
    render() {
      return (
        <div class = "container">
            <form onSubmit={this.handleSubmit}>
            <label>
                Action:
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="DEBIT">Debit</option>
                <option value="CREDIT">Credit</option>
            </select>
            </label>
            <label>
                Description:
                <input type = "text"></input>
            </label>
            <label>
                Amount:
                <input type = "number" min="0"></input>
            </label>
            <label>
                Currency:
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="SGD">SGD</option>
                  <option value="HKD">HKD</option>
                  <option value="USD">USD</option>
                </select>
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        </div>
        
        )
    }
}
export default AddNewTransaction;