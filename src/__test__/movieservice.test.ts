/**
 * @jest-environment jsdom
 */


import { movieArray } from "../ts/services/__mocks__/movieservice";
import { getData } from '../ts/services/movieservice';

// Mock axios
jest.mock("axios", () => ({
    get: async (url: string) => {
        return new Promise((resolve, reject) => {
            if(url.endsWith("error")) {
                reject({data: []});
            } else {
                resolve({data: {Search: movieArray}})
            }
        });
    }
}));

describe("Testing function getData", () => {
    test("Should get data correctly", async () => {
        let result = await getData("Aegon");
    
        expect(result.length).toBe(3);
        expect(result[0].Title).toBe("Aegon");
    });

    test("Should not get data", async () => {
        try {
            await getData("error");
        } catch (error: any) {
            expect(error.length).toBe(0);
        }
    });
});

