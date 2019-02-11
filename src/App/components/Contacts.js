import React, { Component } from 'react';
import ContactsForm from './ContactsForm';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction'
import Modal from './Modal'


class Contacts extends Component{
  
    constructor(props){
        super(props);

        this.state = {
          name: '',
          phone: '',
          mail: '',
          modal: false
        }
    }


    handleSubmit(data){
        let contact = {
          name: data.name,
          phone: data.phone,
          mail: data.mail
        }
        this.props.createContact(contact);
    }

    removeContacts(e, id){
        e.preventDefault();
        this.props.deleteContact(id);
    }

    editContacts(e, contact){
        e.preventDefault();
        this.setState({
            modal:true,
            updatedContact: contact
        });
    }

    showContacts(data){
        return (
        <div key={data.id}>
            <div className="list__container">
                <div className="list__items">
                    <li>{data.name}</li>
                    <li>{data.phone}</li>
                    <li>{data.mail}</li>
                </div>
                <div className="buttons__container">
                    <button className="contact__button contact__button_remove" onClick={(e) => this.removeContacts(e, data.id)}>Remove</button>
                    <button className="contact__button contact__button_edit" onClick={(e) => this.editContacts(e , data)}>Edit</button>
                </div>
            </div> 
        </div>
        )
    }

    openModal(){
        if(this.state.modal){
           return <Modal
                    closeModal ={()=>this.closeModal()}
                    updatedModel={this.state.updatedContact}/>;
        }
    }

    closeModal(){
        this.setState({
            modal: false
        })
    }
    
    render(){
      
        return(
            <div className="container">
                <div>{this.openModal()}</div>
                <ContactsForm
                    initModel = {{name: this.state.name, phone: this.state.phone, mail: this.state.mail}} 
                    handleSubmit={this.handleSubmit.bind(this)}
                    buttonName ={'ADD'} /> 
                <div className='table'>
                    <div className ='table-items__container'>
                        <div className="table-item">User Name</div>
                        <div className="table-item">User Phone</div>
                        <div className="table-item">User Mail</div>
                    </div>
                    <div className="table__hidden"></div>
                </div> 
                <ul className="contact__items">
                    {this.props.contacts.map((contact, i) =>  this.showContacts(contact, i))}
                </ul>
            </div>
        )
    } 
}
const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      createContact: contact =>  dispatch(contactAction.createContact(contact)),
      deleteContact: id => dispatch(contactAction.deleteContact(id))
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);


