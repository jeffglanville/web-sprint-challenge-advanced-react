// write your custom hook here to control your checkout form

import useLocalStorage from '../hooks/useLocalStorage';

const useContact = (key, contactData) => {
    const [values, setValues] = useLocalStorage([key], contactData);

    const contactValue = e => {
        setValues({
            ...values
        })
    }
    return [contactValue];
}

export default useContact;