// write your custom hook here to control your checkout form
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const useForm = (key, initialValues, cb) => {
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
        setShowSuccessMessage(true)
    };

    const clearForm = e => {
        e.preventDefault();
        setValues(initialValues);
    };

    return [values, clearForm, handleSubmit, handleChanges];
}

export default useForm;