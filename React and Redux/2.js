class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
handleChange = (e) =>{
  this.setState({
    input:e.target.value
  })
}
  submitMessage() {
    this.setState(({messages, input}) => ({ 
      input: "",
      messages: [...messages, input]
    }))
  }
// submitMessage = () =>{
//   const state = this.state
//   state.messages.push(state.input)
//     this.setState({
//       input: '',
//       messages: state.messages
//   })
// }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <button onClick={() => this.submitMessage()}>Add message</button>
        <ul>{this.state.messages.map(s => {
          return(<li>{s}</li>)
        })}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};