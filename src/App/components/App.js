import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction'

class App extends Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          name: ''
        }
      }

    handleChange(e){
        this.setState({
            name: e.target.value
          })
    }

    handleSubmit(e){
        e.preventDefault();
        let contact = {
          name: this.state.name
        }
        this.props.createContact(contact);
    }

    removeContacts(e, index){
        e.preventDefault();
        this.props.deleteContact(index);
    }

    showContacts(data, index){
        return (
        <div>
            <div>
                <li key={index}>{data.name}</li>
            </div>
            <div>
                <button onClick={(e) => this.removeContacts(e, index)}> Remove </button>
            </div>
        </div> 
        )
      }

    render() {
        return(
            <div className="container">
                <h1>Contacts Book</h1>
                <hr/>

                <div>
                    <h3>Add Contact</h3>

                    <form onSubmit={this.handleSubmit}>
                      <input type="text" onChange={this.handleChange} value={this.state.name}/><br />
                      <input type="submit" value="ADD"/>
                    </form>
                    <hr/>

                    <ul className="list-group">
                        {this.props.contacts.map((contact, i) => this.showContacts(contact, i))}
                    </ul> 
                </div>

            </div>)
      }
}

const mapStateToProps = (state) => {
    return {
      contacts: state.contacts
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      createContact: contact => dispatch(contactAction.createContact(contact)),
      deleteContact: index => dispatch(contactAction.deleteContact(index))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);