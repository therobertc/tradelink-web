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
      alert('An invite link will be sent shortly: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form style={{  }}onSubmit={this.handleSubmit}>
          
            <input style={{ borderWidth: 0, borderRadius: 20, height: 40, width: 300, fontSize: '16px', paddingLeft: 20, paddingRight: 20}} placeholder=' Enter a phone number' type="text" value={this.state.value} onChange={this.handleChange}/>
            
            

          <input style={{ color: '#fff', fontWeight: '500', borderRadius: 20, height: 40, width: 100, marginLeft: '20px', fontSize: 16, backgroundColor: '#147efb', borderWidth: 0, marginRight: 5, textAlign: 'center', alignItems: 'center'}} type="submit" value="Sign Up"/>
        </form>
      );
    }
  }

  /* Use this link for documentation on the form */ 

  /* https://reactjs.org/docs/forms.html */ 



  export default NameForm;