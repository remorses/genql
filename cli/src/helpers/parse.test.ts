import { parseColonSeparatedStrings } from "./parse";

describe("parse empty", () => {
    test("undefined", () => {
        const header = parseColonSeparatedStrings();
        expect(header).toEqual({});
    });
    test("empty array", () => {
        const header = parseColonSeparatedStrings([]);
        expect(header).toEqual({});
    })
})

describe("header parsing", () => {
    test("Bearer Token", () => {
        const header = parseColonSeparatedStrings(["Authorization: Bearer 1234"]);
        expect(header).toEqual({
            Authorization: "Bearer 1234",
        });
    });

    test("Referer", () => {
        const header = parseColonSeparatedStrings(["Referer: https://www.xyz.com"]);
        expect(header).toEqual({
            Referer: "https://www.xyz.com",
        });
    });

    test("Multiple", () => {
        const header = parseColonSeparatedStrings(["Referer: https://www.xyz.com", "Accept: application/json"]);
        expect(header).toEqual({"Accept": "application/json", "Referer": "https://www.xyz.com"});
    });
});

describe("scalar parsing", () => {
    test("DateTime:string", ()=> {
        const scalar = parseColonSeparatedStrings(["DateTime:string"]);
        expect(scalar).toEqual({
            DateTime: "string",
        });
    });
});
