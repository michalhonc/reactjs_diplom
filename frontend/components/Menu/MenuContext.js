import React from 'react';
import {  } from 'prop-types';

const MenuContext = React.createContext();

const initialState = {
    opened: false,
}

const reducer = (state, action) => {
	console.log('TCL: reducer -> action', action)
	console.log('TCL: reducer -> state', state)
    switch (action.type) {
        case 'close':
            return initialState;
        case 'open':
            return { ...state, opened: true }
    
        default:
            return initialState;
    }
};

const MenuProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider> 
};

const MenuConsumer = MenuContext.Consumer;

export { MenuContext, MenuProvider, MenuConsumer };