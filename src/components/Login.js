import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default () => {

    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}

                validate={values => {
                    let errors = {};
                    if (!values.username) {
                        errors.username = "Required";
                    }
                    if (!values.password) {
                        errors.password = "Required";
                    }
                    return errors;
                }}

                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                }}
            >
                {({ errors }) => 
                    <Form>
                        <div>
                            <label htmlFor="username">Username</label>
                            <Field name="username" type="text" />
                            <ErrorMessage name="username" component={() => <div>{errors.username}</div>} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" />
                            <ErrorMessage name="password" component={() => errors.password} />
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                }
            </Formik>
        </div>
    );
}