import React, { Component } from 'react';

export class Field extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='contact__input'>
                <input 
                    defaultValue = {this.props.fieldValue}
                    type={this.props.text}
                    onChange={(e)=> this.props.change(this.props.field,e)}
                    className='contact__field'
                    placeholder={this.props.field}/>
                     
            </div>
        )
    }
}

class ContactsForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputValues: { ...this.props.initModel },
            validate: {
                isValidName: true,
                isValidPhone: true,
                isMailName: true,
            }
        }
    }

    formValidation(field, pattern){
       
        let validate = new RegExp(pattern,'i');
        let isValid = validate.test(field);
        return isValid;
    }

    
    handleChange(fieldName,e){
        let s = {...this.state}; // copying state obj
        s.inputValues[fieldName] = e.target.value; 
        this.setState(s);
    }
    handleSubmit(e){
        e.preventDefault();

        this.props.handleSubmit(this.state.inputValues);
    }
    
    render(){
        return (
            <form
                onSubmit={(e) => this.handleSubmit(e)} 
                className='contacts__form'>
               
                <Field
                    pattern = {'^\\w+\\s*\\w*$'}
                    fieldValue = {this.props.initModel.name}
                    type="text" 
                    change={this.handleChange.bind(this)} 
                    field='name'/>
                <Field
                    pattern = {'^\\w+\\d*.*$'}
                    fieldValue = {this.props.initModel.phone}
                    type="text" 
                    change={this.handleChange.bind(this)} 
                    field='phone'/>
                <Field
                    pattern = {'^\\d+$'}
                    fieldValue = {this.props.initModel.mail} 
                    type="text" 
                    change={this.handleChange.bind(this)} 
                    field='mail'/>
                <input 
                    type="submit" 
                    value={this.props.buttonName} 
                    className='contact__button'/>
            </form>
        )
    }
}


export default ContactsForm