import { expect, test } from "vitest";
import { Chooser } from "./chooser";

test("add chooser", () => {
    const chooser = new Chooser({
        login: "guilherm",
        email: "guilhermeamorim@gmail.com",
        password: "As1@asdf",
        createdAt: new Date(),
    });

    expect(chooser).toBeInstanceOf(Chooser);
    expect(chooser.login).toEqual("guilherm");
    expect(chooser.email).toEqual("guilhermeamorim@gmail.com");
    expect(chooser.password).toEqual("As1@asdf");
});
