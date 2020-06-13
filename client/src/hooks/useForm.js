// write your custom hook here to control your checkout form
import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from 'react';


const useForm = (key, initialValues) => {
    const [ values, setValues ] = useLocalStorage(key, initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    const clearForm = e => {
        e.preventDefault();
        setValues(initialValues)
    }

    return [values, handleSubmit, handleChanges, clearForm];
}

export default useForm;