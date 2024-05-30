import { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';

export function Form() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const form = useRef();

    const validPhone = new RegExp(
        '^[0-9]*$'
    );

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.name.trim().length === 0) {
            errors.name = "Name required";
        }
        if (inputValues.phone.trim().length === 0 || !validPhone.test(inputValues.phone)) {
            errors.phone = "Valid phone number required";
        }
        if (inputValues.email.trim().length === 0 || !validEmail.test(inputValues.email)) {
            errors.email = "Valid email required";
        }
        if (inputValues.message.trim().length === 0) {
            errors.message = "Message required";
        }
        return errors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(formData));
        setSubmitting(true);
    }

    const finishSubmit = () => {
        emailjs.sendForm('service_u8ui6z7', 'template_fop1wua', form.current, 'mk3evHz0kqGIuqFx0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors, submitting]);


    return (
        <div>
            {Object.keys(errors).length === 0 && submitting ? (
                <span>The message has been sent!</span>
            ) : null}
            <form ref={form} onSubmit={handleSubmit} className='form'>
                <label htmlFor="name"><b>Name:</b></label><br />
                <input type="text" className="form-input" id="name" name="name" value={formData.name} onChange={handleChange} />
                {errors.name ? (
                    <p>Please enter your name.</p>
                ) : null}<br />

                <label htmlFor="phone"><b>Phone number:</b></label><br />
                <input type="tel" className="form-input" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                {errors.phone ? (
                    <p>Please enter a valid phone number.</p>
                ) : null}<br />

                <label htmlFor="email"><b>Email:</b></label><br />
                <input type="email" className="form-input" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email ? (
                    <p>Please enter a valid e-mail address.</p>
                ) : null}<br />

                <label htmlFor="message"><b>Message:</b></label><br />
                <textarea className="form-input" id="message" name="message" value={formData.message} onChange={handleChange} />
                {errors.message ? (
                    <p>Please enter a message.</p>
                ) : null}<br />

                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
}