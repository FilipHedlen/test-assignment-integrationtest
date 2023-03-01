/**
 * @jest-environment jsdom
 */

import { movieSort } from './../ts/functions';
import { IMovie } from './../ts/models/Movie';


describe("Testing sorting of movies", () => {
test ("Should sort movies in ascending order", () => {   
    // Arrange
    const movies: IMovie[] = [
        {Title: 'Aegon', imdbID: '111', Type: 'Movie', Poster: 'None', Year: '1994'},
        {Title: 'Aerys', imdbID: '222', Type: 'Movie', Poster: 'None', Year: '1995'},
        {Title: 'Jaehaerys', imdbID: '333', Type: 'Movie', Poster: 'None', Year: '1996'}]
        
    // Act
    const result = movieSort(movies, true);

    // Assert
    expect(result[0].Title).toBe("Aegon");
    expect(result[1].Title).toBe("Aerys");
    expect(result[2].Title).toBe("Jaehaerys");
});


test("Should sort movies in descending order", () => {
    // Arrange
    const movies: IMovie[] = [
        {Title: 'Aegon', imdbID: '111', Type: 'Movie', Poster: 'None', Year: '1994'},
        {Title: 'Aerys', imdbID: '222', Type: 'Movie', Poster: 'None', Year: '1995'},
        {Title: 'Jaehaerys', imdbID: '333', Type: 'Movie', Poster: 'None', Year: '1996'}]
    
    //Act
    const result = movieSort(movies, false);

    //Assert
    expect(result[0].Title).toBe("Jaehaerys");
    expect(result[1].Title).toBe("Aerys");
    expect(result[2].Title).toBe("Aegon");
});
});

