import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("No name is provided")
        .min(2, "Name is to short - should be minimun 2 characters"),
    lastName: yup
        .string()
        .required("No name is provided")
        .min(2, "Name is to short - should be minimun 2 characters"),
    email: yup
        .string()
        .required("No Email provided")
        .email("Enter a valid E-mail"),
    mess: yup
        .string()
        .required("No Message provided")
        .min(10, "Message is to short - should be minimun 10 characters"),
});

function ContactForm() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
               
                <Form.Control
                    name='firstName'
                    placeholder='firstName'
                    ref={register}
                />
                {errors.firstName && (
                    <p class='text-danger'>{errors.firstName.message}</p>
                )}
            </Form.Group>
            <Form.Group>
               
                <Form.Control
                    name='lastName'
                    placeholder='lastName'
                    ref={register}
                />
                {errors.lastName && (
                    <p class='text-danger'>{errors.lastName.message}</p>
                )}
            </Form.Group>
            <Form.Group>
                
                <Form.Control
                    name='email'
                    placeholder='email'
                    ref={register}
                />
                {errors.email && (
                    <p class='text-danger'>{errors.email.message}</p>
                )}
            </Form.Group>
            <Form.Group>
                
                <Form.Control
                    as='textarea'
                    name='mess'
                    placeholder='message'
                    ref={register}
                />
                {errors.mess && (
                    <p class='text-danger'>{errors.mess.message}</p>
                )}
            </Form.Group>

            <Button type='submit'>Submit</Button>
        </Form>
    );
}
export default ContactForm;
