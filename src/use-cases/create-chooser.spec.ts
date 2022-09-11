import { describe, expect, it } from "vitest";
import { Chooser } from "../entities/chooser";
import { InMemoryChoosersReporitory } from "../repositories/in-memory/in-memory-appoinments-repository";
import { CreateChooser } from "./create-chooser";

describe("Creating a chooser", () => {
    it("should be able to create a chooser", () => {
        const choosersRepository = new InMemoryChoosersReporitory();
        const createChooser = new CreateChooser(choosersRepository);

        expect(
            createChooser.execute({
                login: "guilherm",
                email: "guilhermeamorim@gmail.com",
                password: "As1@asdf",
                createdAt: new Date(),
            })
        ).resolves.toBeInstanceOf(Chooser);
    });

    it("should not be able to create a chooser", async () => {
        const choosersRepository = new InMemoryChoosersReporitory();
        const createChooser = new CreateChooser(choosersRepository);

        await createChooser.execute({
            login: "guilherm",
            email: "guilhermeamorim@gmail.com",
            password: "As1@asdf",
            createdAt: new Date(),
        });

        expect(
            createChooser.execute({
                login: "guilherm",
                email: "guilhermeamorim@gmail.com",
                password: "As1@asdf",
                createdAt: new Date(),
            })
        ).rejects.toBeInstanceOf(Error);
    });
});
