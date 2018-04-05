const redux = require('redux');

// Build a contact management system using Redux in a vanilla JavaScript environment (no React)
// You should be able to dispatch actions that add a new person and remove an existing person from an array of contacts.
// The contact objects can have whatever properties you want. For example:
// {
//     name: "Tommy Oliver",
//     phone: "925-867-5309",
//     email: "thegreenranger@powerrangers.com"
// }

const initialState = {
    contacts: []
}

const reducer = (state = initialState, action) => {//
    switch (action.type) {
        case 'EDIT_CONTACT':
            return {
                contacts: state.contacts.map(contact => {
                    
                    if (contact.name === action.contact.name) {
                        if (action.contact.phone) {
                            contact.phone = action.contact.phone;
                        }
                        if (action.contact.email) {
                            contact.email = action.contact.email;
                        }
                    }
                    //console.log(contact);
                     return contact
                })
            }
        case 'ADD_CONTACT':
            return {
                contacts: [...state.contacts, action.contact]
            }
        case 'REMOVE_CONTACT':
            return {
                contacts: [state.contacts.filter(contact.name !== action.contact.name)]
            }
        default:
            return state;
    }
}
const store = redux.createStore(reducer)
store.subscribe(() => console.log(store.getState()));

const addContact = (contact) => {
    store.dispatch({
        type: 'ADD_CONTACT',
        contact
    });
}
const removeContact = name => {
    store.dispatch({
        type: "REMOVE_CONTACT",
        name
    })
}

const editContact = contact => { //after we define the edit, we make the function to dispatch
    store.dispatch({
        type: 'EDIT_CONTACT',
        contact
    });
}
addContact({
    name: "Tommy Oliver",
    phone: "925-867-5309",
    email: "thegreenranger@powerrangers.com"
});

editContact({// define the contact that we want to edit 
    name: "Tommy Oliver",
    phone: "000-000-0000",
    email: 'tommy@bodok.com'
})



//====================================================================


