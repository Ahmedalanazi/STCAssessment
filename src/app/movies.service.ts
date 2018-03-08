import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';



@Injectable()
export class MoviesService {
  private movies = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  http: Http;

  constructor( http: Http) {

    this.http = http;
  }

  fetchMovies() {
    this.http.get('https://api.themoviedb.org/3/movie/550?api_key=c47c27344aeab3d64001e9a364fb9f19')
      .map((response: Response) => {
        const data = response.json();
        const extractedChars = data.results;
        const chars = extractedChars.map((char) => {
          return {name: char.GameID, side: ''};
        });
        return chars;
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.movies = data;

        }
      );
  }

}
