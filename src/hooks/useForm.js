import { useEffect, useMemo, useState } from 'react'

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({})

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

       
    const isFormValid = useMemo(() => {

        // [email, password, displayName]

        for (const formValue of Object.keys(formValidation)) {
           if( formValidation[formValue] !== null ) return false
        }

        return true;

    }, [formValidation])

    
    const createValidators = () => {
        const formCheckedValues = {};
        // [email, password, displayName]
        for (const formField of Object.keys(formValidations)) {
            for (const tupla in formValidations[formField]) {              
                // email: [
                //     [(value) => value.includes("@"), "El correo debe tener un @"], 
                //     [(value) => value.includes("@"), "El correo debe tener un @"]
                // ]

            const [ fn, errorMessage ] = formValidations[formField][tupla];

            formCheckedValues[ `${ formField }Valid` ] = fn( formState[formField] ) ? null : errorMessage;
            // {
            //     emailValid: null,
            //     passwordValid: "El password debe tener al menos 6 caracteres",
            //     displayNameValid: null,
            // }
            if(!fn(formState[formField])) break;                
            }        
           
        }
        setFormValidation( formCheckedValues )
    }

    useEffect(() => {
        createValidators();
    }, [formState])
    

    return {
        ...formState,
        ...formValidation,
        formState,
        onInputChange,
        onResetForm,
        isFormValid
    }
};