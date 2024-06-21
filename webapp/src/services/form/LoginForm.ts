import Form from "@/src/libs/Form.ts";

export const LoginForm = new Form(
  (data) => {
    console.log('Login form submitted');
    console.log(data);
    return true;
  },
  {
    email: 'string',
    password: 'string',
  }
);