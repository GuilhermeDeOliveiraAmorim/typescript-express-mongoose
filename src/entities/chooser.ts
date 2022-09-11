interface ChooserProps {
    login: string;
    email: string;
    password: string;
    createdAt: Date;
}

class Chooser {
    private props: ChooserProps;

    constructor(props: ChooserProps) {
        const { login, email, password, createdAt } = props;

        this.props = props;
    }

    get login() {
        return this.props.login;
    }

    get email() {
        return this.props.email;
    }

    get password() {
        return this.props.password;
    }

    get createdAt() {
        return this.props.createdAt;
    }
}

export { Chooser };
