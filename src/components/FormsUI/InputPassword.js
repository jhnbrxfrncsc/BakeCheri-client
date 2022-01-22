import React from 'react';
import { FilledInput, FormControl, InputLabel } from '@material-ui/core';
import { useField } from 'formik';

const InputPassword = ({
    name,
    ...otherProps
}) => {
    const [field, meta] = useField(name);

    const configTextfield =  {
        ...field,
        ...otherProps,
        variant: "filled",
        color: "primary",
    };

    if(meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <FormControl fullWidth variant="filled">
            <InputLabel>Password</InputLabel>
            <FilledInput
                {...configTextfield}
            />
        </FormControl>
    )
}

export default InputPassword;