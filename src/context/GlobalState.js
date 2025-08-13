import React,{ createContext, useReducer} from "react";
import AppReducer from './AppReducer';

//Initialstate
export const Initialstate = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 1, text: 'Salary', amount: 300 },
        { id: 1, text: 'Book', amount: -10 },
        { id: 1, text: 'Camera', amount: 150 },
    ]
}

//Create context
export const GlobalContext = createContext(Initialstate);

//Provider component
export const GlobalProvier = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, Initialstate);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions

    }}>
        {children}
    </GlobalContext.Provider>)


}
