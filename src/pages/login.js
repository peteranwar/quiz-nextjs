import { useRouter } from "next/router";

import React, { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import FormikContainer from '../components/form/FormikContainer'
import FormikControl from '../components/form/FormikControl'
import * as Yup from "yup";
import { useUserData } from '../context/UserDataState';

const login = () => {
    const router = useRouter()

    const [userData, setUserData] = useUserData();

    const [feedback, setFeedback] = useState()
    const [isLoad, setIsLoad] = useState(false)
    const initialValues = {
        name: "",
        password: "",
        email: ""
    };

    // validation schema yup
    function validationSchema() {
        return Yup.object().shape({
            name: Yup.string()
                .required("This field should not be empty."),
            email: Yup.string().email("Email isn't correct")
                .required("This field should not be empty."),
            password: Yup
                .string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters"),
        });

    }


    function onSubmit(values, { resetForm }) {
        console.log("values from login", values)
        setIsLoad(true);

        setTimeout(() => {
            setIsLoad(false)
            localStorage.setItem("isLogin", JSON.stringify(true));
            localStorage.setItem("userData", JSON.stringify(values))
            setUserData(values)
            resetForm(initialValues)
            router.push('/')

        }, 2000);

    }

    return (
        <div className="container">
            <h1 className="main-header mx-auto pt-4">Login Page</h1>
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7 col-sm-9">
                    <FormikContainer validationSchema={validationSchema} initialValues={initialValues} handleOnSubmit={onSubmit}>
                        <FormikControl control="input" label="User Name" type="text" name="name" placeholder="name" />
                        <FormikControl control="input" label="E-mail " type="email" name="email" placeholder="email" />
                        <FormikControl control="input" label="Your Password" type="password" name="password" placeholder="Password" />
                        <Button variant="primary" className="w-50  d-flex justify-content-center mx-auto  border-0 my-4" type="submit">
                            {!isLoad ? 'Login' : <Spinner
                                animation="border"
                                role="status"
                                aria-hidden="true"
                            />}
                        </Button>
                    </FormikContainer>
                </div>
            </div>
        </div>
    )
}

export default login
