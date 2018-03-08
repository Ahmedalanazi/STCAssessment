import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../Movies.Service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() movies;
moService: MoviesService;

  constructor() { }

  ngOnInit() {
    this.moService.fetchMovies();
  }

}
