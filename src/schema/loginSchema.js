import * as yup from 'yup';

const loginSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email()
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, "Password must be at least 8 characters")
        .required('Password is required')
});

export default loginSchema;