import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import './index.scss';

const ContactForm = () => {
    const [successResult, setSuccessResult] = useState('');
    const [errorResult, setErrorResult] = useState('');

    useEffect(() => {
        emailjs.init("ximLsYJUi8rJDYv7g");
    }, []);

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validate(values) {
            const errors = {};
            if (!values.name) {
                errors.name = 'Required';
            }

            if (!values.subject) {
                errors.subject = 'Required';
            }

            if (!values.message) {
                errors.message = 'Required';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            return errors;
        },
        async onSubmit(values) {
            try {
                await emailjs.send(
                    "service_s053o9z",
                    "template_8vjqala",
                    {
                        from_name: values.name,
                        from_email: values.email,
                        subject: values.subject,
                        message: values.message,
                        to_name: "Sebahattin Ozdemir"
                    },
                    "ximLsYJUi8rJDYv7g"
                );
                form.resetForm();
                setSuccessResult('Thank you! Your message has been successfully sent');
                setTimeout(() => {
                    setSuccessResult('')
                }, 5000)
            } catch (e) {
                console.error('Email error:', e);
                setErrorResult('Something went wrong while sending your message!')
                setTimeout(() => {
                    setErrorResult('')
                }, 5000)
            }
        }
    });

    function FormErrorHandler({name}) {
        return form.errors[name] ? <div className="contact-form__err">{form.errors[name]}</div> : null
    }

    return (
        <form onSubmit={form.handleSubmit}>
            <div className="contact-form">
                <div className="contact-form__control">
                    <input value={form.values.name} onChange={form.handleChange} type="text" placeholder="Full Name" name="name"/>
                    <FormErrorHandler name="name"/>
                </div>
                <div className="contact-form__control">
                    <input value={form.values.email} onChange={form.handleChange} type="text" placeholder="Email Address" name="email"/>
                    <FormErrorHandler name="email"/>
                </div>
                <div className="contact-form__control full-row">
                    <input value={form.values.subject} onChange={form.handleChange} className="subject" type="text" placeholder="Subject" name="subject"/>
                    <FormErrorHandler name="subject"/>
                </div>
                <div className="contact-form__control full-row">
                    <textarea value={form.values.message} onChange={form.handleChange} placeholder="Your Message" name="message"/>
                    <FormErrorHandler name="message"/>
                </div>
            </div>
            <button className="send-message" type="submit">SEND MESSAGE</button>
            <div className="contact-form__result">
                {successResult && <span className="contact-form__scc"> {successResult} </span>}
                {errorResult && <span className="contact-form__err"> {errorResult} </span>}
            </div>
        </form>
    );
};

export default ContactForm;
