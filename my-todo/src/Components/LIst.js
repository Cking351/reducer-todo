import React, { useState, useReducer } from 'react';

const List = () => {
    const [listText, setListText] = useState('');
    const [state, dispatch] = useReducer(reducer, intitialState);

    const handleChanges = event => {
        setListText(event.target.value)
    }


    return null
}