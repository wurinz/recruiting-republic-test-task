import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import '../css/main.css';

const Form = () => {

    const INITIAL_VALUES = {
        name: '',
        email: '',
        dateOfBirth: '',
        message: ''
    
    }
    const VALIDATION_SCHEMA = yup.object().shape({
        name: yup.string().required('Enter your name please').min(1, "Your name can't be thath short"),
        email: yup.string().email('Invalid email').required('Enter your email please'),
        dateOfBirth: yup.string().required('Enter your date of birth please'),
        message: yup.string().required('Enter a message please')
    })

    return(
        <div>
            <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={VALIDATION_SCHEMA}
                validateOnBlur
                onSubmit={value => {alert(`Name: ${value.name}, Email: ${value.email}, Date of Birth: ${value.dateOfBirth}, Message: ${value.message}`)}}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className="form">
                        <p>
                            <input 
                                className='input'
                                type='text'
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder="Name*"
                            />
                        { touched.name && errors.name && <p className="error">{errors.name}</p>}
                        </p>
                        <p>
                            <input 
                                className='input'
                                type='text'
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="Email"
                            />
                        { touched.email && errors.email && <p className="error">{errors.email}</p>}
                        </p>
                        <p>
                            <input 
                                className='input'
                                type='text'
                                name='dateOfBirth'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dateOfBirth}
                                placeholder="Date of Bidth*"
                                
                            />
                        { touched.dateOfBirth && errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
                        </p>
                        <p>
                            <input 
                                className='input'
                                type='text'
                                name='message'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                                placeholder="Message*"
                            />
                        { touched.message && errors.message && <p className="error">{errors.message}</p>}
                        </p>
                        <button 
                            className="request_btn form_btn"
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type='submit'
                        >Request Info</button>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Form;