// write your custom hook here to control your checkout form
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


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
        if ( !values === true ) {
            setShowSuccessMessage(false)
        }else {
          return showSuccessMessage;

        }
    };

    return [values, handleSubmit, handleChanges];
}

export default useForm;