import React, { Children } from 'react'
import { Form,  Formik } from "formik";



import * as Yup from "yup";




const FormikContainer = ({ handleOnSubmit, initialValues, validationSchema, setFieldValue, children }) => {
    const onSubmit = (values, { resetForm }) => {
        return handleOnSubmit(values, { resetForm })
    };

    return (
        <Formik onSubmit={onSubmit}
            initialValues={initialValues} setFieldValue={setFieldValue}
            validationSchema={validationSchema} >
            {
                formik => (
                    <Form className="main-settings w-100" encType="multipart/form-data">
                        {children}
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer
