import { Chooser } from "../entities/chooser";
import { ChoosersRepository } from "../repositories/choosers-repository";

interface CreateChooserRequest {
    login: string;
    email: string;
    password: string;
    createdAt: Date;
}

type CreateChooserResponse = Chooser;

class CreateChooser {
    constructor(private choosersRepository: ChoosersRepository) {}

    async execute({
        login,
        email,
        password,
        createdAt,
    }: CreateChooserRequest): Promise<CreateChooserResponse> {
        const chooserLoginExists =
            await this.choosersRepository.loginAlreadyExists(login);

        if (chooserLoginExists) {
            throw new Error(`The login ${login} has already been registered`);
        }

        const isThisLoginValid = await this.choosersRepository.isThisLoginValid(
            login
        );

        if (isThisLoginValid === false) {
            throw new Error("login must be lowercase and 4-8 characters long");
        }

        const chooserEmailExists =
            await this.choosersRepository.emailAlreadyExists(email);

        if (chooserEmailExists) {
            throw new Error(`The email ${email} has already been registered`);
        }

        const isEmailValid = await this.choosersRepository.isThisEmailValid(
            email
        );

        if (isEmailValid === false) {
            throw new Error("Email is not valid");
        }

        const isPasswordValid =
            await this.choosersRepository.isThisPasswordValid(password);

        if (isPasswordValid === false) {
            throw new Error(
                "the password must contain at least 1 lowercase alphabetical character; must contain at least 1 uppercase alphabetical character; must contain at least 1 numeric character; must contain at least one special character (!@#$%^&*); must be eight characters or longer."
            );
        }

        const chooser = new Chooser({
            login,
            email,
            password,
            createdAt,
        });

        await this.choosersRepository.create(chooser);

        return chooser;
    }
}

export { CreateChooser };
