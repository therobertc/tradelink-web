import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form style={{ paddingBottom: 25 }}onSubmit={this.handleSubmit}>
          
            <input style={{ borderWidth: 0, borderRadius: 20, height: 40, width: 300, fontSize: '16px', paddingLeft: 20, paddingRight: 20}} placeholder=' Enter a phone number' type="text" value={this.state.value} onChange={this.handleChange}/>
            
            

          <input style={{ borderRadius: 20, height: 40, width: 100, marginLeft: '20px', fontSize: 16, backgroundColor: '#147efb', borderWidth: 0, marginRight: 5, textAlign: 'center'}} type="submit" value="Download"/>
        </form>
      );
    }
  }

  /* Use this link for documentation on the form */ 

  /* https://reactjs.org/docs/forms.html */ 



  export default NameForm;