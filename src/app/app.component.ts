// import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit, AfterViewInit {
  movies = [{title: 'test' }];
  selectedMovie;
  

  constructor(private api: ApiService) {
  this.getMovies();
  this.selectedMovie = { id: '-1', title:'', desc:'', year : 0 };


  // @ViewChild(MatSort,{static: false}) sort: MatSort;
  // @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;


}

ngOnInit() {
  this.api.getAllMovies();
}

ngAfterViewInit(): void {
  this.selectedMovie.sort = this.movies;
  this.selectedMovie.paginator = this.movies;
}

public getAllMovies = () => {
  this.api.getAllMovies()
  .subscribe(res => {
    this.selectedMovie.data = res as [];
  },
  (error) => {
    this.selectedMovie.handleError(error);
  })
}










getMovies = () => {
  this.api.getAllMovies().subscribe(
    data => {
      this.movies = data; 
      

    },
    error => {
      console.log(error);
    }
  );
  }
  movieClicked = (movie) => {
    console.log(movie.id);
    this.api.getOneMovies(movie.id).subscribe(
      data => {
        // console.log(data);
        this.selectedMovie = data;
        // this.desc = data.desc;
        // this.year = data.year;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateMovie = () =>{
    this.api.updateMovie(this.selectedMovie).subscribe(
      data => {
        // console.log(data);
        // this.selectedMovie = data;
        // this.desc = data.desc;
        // this.year = data.year;
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }
  createMovie = () =>{
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        // console.log(data);
        this.movies.push(data);
        // this.desc = data.desc;
        // this.year = data.year;
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteMovie = () =>{
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        // console.log(data);
        // this.movies.push(data);
        // this.desc = data.desc;
        // this.year = data.year;
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }  
}


