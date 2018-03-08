import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  movies =[

    { name:'saw', side: '' },
    { name:'STC', side: '' }

  ];

  favoriteList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side){

     this.favoriteList = side;
  }

  getMovies(){

    if (this.favoriteList === 'all'){

    return   this.movies.slice();
    }
    return this.movies.filter((char) => {

    return   char.side === this.favoriteList;
    })

  }

}
