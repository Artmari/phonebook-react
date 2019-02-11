import * as actionTypes from '../actions/actionType';
let lastId = 0;
let contacts = [];
export default (state = [], action) => {
    switch (action.type){
      
        case actionTypes.CREATE_NEW_CONTACT:{       
            
           if(!contacts.includes(action.contact)){
                console.log(contacts.includes(action.contact));
                contacts.push(action.contact);
                return [
                    ...state,
                    {...action.contact, id: lastId++}
                ];
            }
        }
        

        case actionTypes.REMOVE_CONTACT:
        return state.filter((data) => data.id !== action.id);

        case actionTypes.EDIT_CONTACT:{
            let currentState  = [...state];
            currentState.forEach((item)=>{
                if(item.id == action.payload.contact.id){
                    item.name = action.payload.contact.name;
                    item.phone = action.payload.contact.phone; 
                    item.mail = action.payload.contact.mail;
                }
            });
            return currentState;
        }

      default:
            return state;
    }
  };