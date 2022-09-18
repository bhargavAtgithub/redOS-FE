import { useState } from 'react';

const useFormFields = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        event.stopPropagation();
        event.persist();
        const { target } = event;
        const { name, value } = target;
        setValues({ ...values, [name]: value });
    };

    return [values, handleChange];
};

export default useFormFields;
