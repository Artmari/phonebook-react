import React, { Component } from 'react';
import Contacts from './Contacts';
import ReduxThunk from 'redux-thunk' 


export const Title = (props) =>{
    return(
        <h1 className={props.class}>{props.title}</h1>
    )  
}

class App extends Component{

    constructor(props){
        super(props); 
    }

    render() {
        return(
            <div>
                <Title class="title_big" title ="Contact Book"></Title>
                <h2 className="title_small">Add Contact</h2>
                <Contacts></Contacts>
            </div>
        )
    }
}

export default App;