import React, { Component } from "react";
import { connect } from 'react-redux';
import {Title} from './App'
import ContactsForm from "./ContactsForm";
import * as contactAction from '../actions/contactAction'


class Modal extends Component{
    constructor(props){
        super(props);
        this.localData = {...this.props.updatedModel }
    }
    
    handleSubmit(id, model){
        this.props.editContact(model, id);
        this.props.closeModal();
    }
    
    render(){
        return(
            <div className="modal__background">
                <Title class="title_big_modal" title ="Contact Book"></Title>
                <h2 className="title_small modal__title">Edit Contact</h2>
                <ContactsForm
                    initModel = {this.localData}
                    handleSubmit = {(e) => this.handleSubmit(this.localData.id, e)}
                    buttonName = {'Submit'}
                />
                <button className ='contact__button' onClick={()=>{this.props.closeModal()}} >Cancel</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      editContact: (contact, id) =>  dispatch(contactAction.editItem(contact, id))
    }
};
 
export default connect(null, mapDispatchToProps)(Modal);