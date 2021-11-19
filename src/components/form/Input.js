import React from 'react'
import { Field, ErrorMessage, useField } from 'formik'



function SharedInput(props) {
    const {  label, name,  placeholder,  ...rest } = props;
    // const [field, meta, helpers] = useField(name);

    return (
        <>
            <div className="w-100 mt-4 mb-2 auth-input">
                <label htmlFor={name} > {label} </label>
               <Field autoComplete="off" id={name} placeholder={placeholder}  name={name} {...rest} />

            </div> 
            
            <ErrorMessage className="error" component="div" name={name} />
        </>
    )
}

export default SharedInput
