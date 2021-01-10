import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
    userName: yup.string().required("UserName name is required"),
    password: yup
        .string()
        .required("No Password provided")
        .min(4, "Password to short - should be minimum 4 chars"),
});

function LoginForm() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>UserName</Form.Label>
                <Form.Control
                    name='userName'
                    placeholder='Enter userName'
                    ref={register}
                />
                {errors.userName && (
                    <p class='text-danger'>{errors.userName.message}</p>
                )}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name='password'
                    placeholder='Enter password'
                    ref={register}
                />
                {errors.password && (
                    <p class='text-danger'>{errors.password.message}</p>
                )}
            </Form.Group>

            <Button type='submit'>Submit</Button>
        </Form>
    );
}
export default LoginForm;
