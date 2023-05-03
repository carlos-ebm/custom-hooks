import { useState } from "react"

export const useCounter = ( initialValue = 0 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        //console.log('funciona el increment?')
        setCounter(counter+value);
    }

    const decrement = ( value = 1 ) => {
        //console.log('funciona el increment?')
        if (counter === 0) { return }
        setCounter(counter-value);
    }

    const reset = () => {
        //console.log('funciona el increment?')
        setCounter(initialValue);
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}
