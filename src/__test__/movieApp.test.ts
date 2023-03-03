/**
 * @jest-environment jsdom
 */

import { IMovie } from "./../ts/models/Movie";
import * as movieApp from './../ts/movieApp';
import * as movieservice from './../ts/services/movieservice';

jest.mock("./../ts/services/movieservice.ts");

beforeEach (() => {
    document.body.innerHTML="";
});

describe("Testing function createHtml", () => {
  test("Should create HTML", () => {
      
      document.body.innerHTML = `
      <div id="movie-container"></div>
      `;

      let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;
      
      let movies: IMovie[] = [
          {Title: "Aegon", imdbID: "111", Type: "Movie", Poster: "None", Year: "1994"},
          {Title: "Aenys", imdbID: "222", Type: "Movie", Poster: "None", Year: "1995"},
          {Title: "Jaehaerys", imdbID: "333", Type: "Movie", Poster: "None", Year: "1996"}
      ];
  
  
  movieApp.createHtml(movies, container);
  
  expect(movies[0].Title).toBe("Aegon");
  expect(movies[1].Title).toBe("Aenys");
  expect(movies[2].Title).toBe("Jaehaerys");
  });
});

describe("Testing displayNoResult", () => {
  test ("Should call displayNoResult without movie available", async () => {         
    document.body.innerHTML = ` 
        <input type="text" id="searchText" placeholder="Skriv titel här"/>
        <div id="movie-container"></div>
        `;  
        
        const searchText = document.getElementById("searchText") as HTMLInputElement;
        searchText.value = "";
        const getDataMock = jest.spyOn(movieservice, "getData").mockReturnValue(Promise.reject());
        const displayNoResultMock = jest.spyOn(movieApp, "displayNoResult");

        await movieApp.handleSubmit();
   
        expect(getDataMock).toBeCalledTimes(1);
        expect(displayNoResultMock).toBeCalledTimes(1);

        getDataMock.mockRestore();
        displayNoResultMock.mockRestore();
      });
    });
