import React, { Component } from 'react';

export class Field extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='contact__input'>
                <input 
                    style = {this.props.style}
                    defaultValue = {this.props.fieldValue}
                    type={this.props.text}
                    onChange={(e)=> this.props.change(this.props.field, e)}
                    className='contact__field'
                    placeholder={this.props.field}
                    required
                    />          
            </div>
        )
    }
}

class ContactsForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputValues: { ...this.props.initModel},
            validate: {
                name: true,
                phone: true,
                mail: true,
            }
        }
    }

    formValidation(field, pattern){
        let validate = new RegExp(pattern,'i');
        let isValid = validate.test(field);
        return isValid;
    }



    handleChange(fieldName,e){
      
        let s = {...this.state};
        s.inputValues[fieldName] = e.target.value; 
        this.setState(s);
    }


    handleSubmit(e){
        e.preventDefault();
       
        let validName = this.formValidation(this.state.inputValues.name, '^\\w+\\s*\\w*$' );
        let validPhone= this.formValidation(this.state.inputValues.phone, '^\\d+$');
        let validMail = this.formValidation(this.state.inputValues.mail, '^\\w+$');

        this.setState({validate:{
            name: validName,
            phone: validPhone,
            mail: validMail
        }})
        
        if(validName && validPhone && validMail){
            
            this.props.handleSubmit(this.state.inputValues);
        }

    }

    setStyle(flag){

        if(!flag){
            return {borderColor: 'red'};
        }
    }
    
    render(){
        return (
            <form
                onSubmit={(e) => this.handleSubmit(e)} 
                className='contacts__form'>
                <Field
                    style = {this.setStyle(this.state.validate.name)}
                    fieldValue = {this.props.initModel.name}
                    type="text" 
                    change={this.handleChange.bind(this)} 
                    field='name'
                    />
                <Field
                    style = {this.setStyle(this.state.validate.phone)}
                    fieldValue = {this.props.initModel.phone}
                    type="text" 
                    change={this.handleChange.bind(this)} 
                    field='phone'
                    />
                <Field
                    style = {this.setStyle(this.state.validate.mail)}
                    fieldValue = {this.props.initModel.mail} 
                    type="text" 
                    change={this.handleChange.bind(this)} 
                    field='mail'
                    />
                <input 
                    type="submit" 
                    value={this.props.buttonName} 
                    className='contact__button'/>
            </form>
        )
    }
}

export default ContactsForm