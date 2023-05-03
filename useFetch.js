import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    //Primer renderizado
    const [state, setState] = useState ({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        //Segundo renderizado
        setState({
            ...state,
            isLoading: true,
        }) 

        const resp = await fetch(url);
        const data = await resp.json();
        
        //Tercer renderizado
        setState({
            data,
            isLoading: false,
            hasError: null
        })

    }

    useEffect(() => {
        getFetch();
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
