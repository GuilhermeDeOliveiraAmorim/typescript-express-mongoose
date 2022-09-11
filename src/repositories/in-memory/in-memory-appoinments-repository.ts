import { Chooser } from "../../entities/chooser";
import { ChoosersRepository } from "../choosers-repository";

class InMemoryChoosersReporitory implements ChoosersRepository {
    public arrChoosers: Chooser[] = [];

    async create(chooser: Chooser): Promise<void> {
        this.arrChoosers.push(chooser);
    }

    async loginAlreadyExists(login: string): Promise<Chooser | null> {
        const chooser = this.arrChoosers.find((chooser) => {
            return chooser.login === login;
        });

        if (!chooser) {
            return null;
        }

        return chooser;
    }

    async emailAlreadyExists(email: string): Promise<Chooser | null> {
        const chooser = this.arrChoosers.find((chooser) => {
            return chooser.email === email;
        });

        if (!chooser) {
            return null;
        }

        return chooser;
    }

    async isThisEmailValid(email: string): Promise<boolean> {
        const strongRegexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!email.match(strongRegexEmail)) {
            return false;
        }

        return true;
    }

    async isThisPasswordValid(password: string): Promise<boolean> {
        if (password.length !== 8) {
            return false;
        }

        const strongRegexPassword = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );

        if (strongRegexPassword.test(password) === false) {
            return false;
        }

        return true;
    }

    async isThisLoginValid(login: string): Promise<boolean> {
        if (!(login.length >= 4 && login.length <= 8)) {
            return false;
        }

        const lowerCaseLetters = /[a-z]/g;

        if (!login.match(lowerCaseLetters)) {
            return false;
        }

        if (login.trim().length === 0) {
            return false;
        }

        return true;
    }
}

export { InMemoryChoosersReporitory };
