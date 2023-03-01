import { IMovie } from "../../models/Movie";

export let movieArray: IMovie[] = [
    {
        Title: 'Aegon',
        imdbID: '111',
        Type: 'Movie',
        Poster: 'None',
        Year: '1994',
    },
    {
        Title: 'Aenys',
        imdbID: '222',
        Type: 'Movie',
        Poster: 'None',
        Year: '1995',
    },
    {
        Title: 'Jaehareys',
        imdbID: '333',
        Type: 'Movie',
        Poster: 'None',
        Year: '1996',
    }
];

export async function getData(): Promise<IMovie[]> {
    return new Promise((resolve, reject) => {
        if (movieArray.length > 0) {
            resolve(movieArray);
        } else {
            reject('No movies available');
        }
    }); 
};