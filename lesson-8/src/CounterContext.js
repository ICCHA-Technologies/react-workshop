import React, { createContext, useReducer } from 'react'

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state
    }
}

export const CounterContext = createContext()

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider