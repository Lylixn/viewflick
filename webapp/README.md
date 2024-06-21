useForm(LoginForm)

const loginForm = new Form(
    func: () => {}
    data: {
        username: String
        password: String
        grant_type: String
    }
)

const { form, handleSubmit, isValid, isLoading, response } = useForm(loginForm)
