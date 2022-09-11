import { Chooser } from "../entities/chooser";

interface ChoosersRepository {
    create(chooser: Chooser): Promise<void>;
    loginAlreadyExists(login: string): Promise<Chooser | null>;
    emailAlreadyExists(email: string): Promise<Chooser | null>;
    isThisPasswordValid(password: string): Promise<boolean>;
    isThisEmailValid(email: string): Promise<boolean>;
    isThisLoginValid(login: string): Promise<boolean>;
}

export { ChoosersRepository };
