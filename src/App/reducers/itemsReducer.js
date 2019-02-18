
export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'SEND_CONTACTS_ON_SUBMIT':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'GET_CONTACTS':{
            console.log(action.items.items);
            return action.items.items; //items
        }
        case 'DELETE_ITEM' :{
            
           return state.filter((data) => data._id !== action.id);
        }
        case 'EDIT_ITEM': {
            let currentState  = [...state];
            currentState.forEach((item)=>{
                if(item._id == action.payload.item.id){
                    item.name = action.payload.item.name;
                    item.phone = action.payload.item.phone; 
                    item.mail = action.payload.item.mail;
                }
            });
            return currentState;
        }
        default:
            return state;
    }
}


