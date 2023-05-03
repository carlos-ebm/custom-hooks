import { useState } from 'react'

export const useForm = (initialForm = {}) => {

    // useState para el formulario
    const [formState, setFormState] = useState(initialForm);

    // Función que permite la modificación de los campos mediante setState as setFormState
    // Se utiliza el concepo de spread ... y del concepto de propiedades computadas de los objetos []: 
    // [name]: value
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
