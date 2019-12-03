// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
// import { AppComponent } from '../app.component';


// @Component({
//   selector: 'app-movie-details',
//   templateUrl: './movie-details.component.html',
//   styleUrls: ['./movie-details.component.css']
// })
// export class MovieDetailsComponent implements OnInit {

//   @Input() movie: AppComponent;

//   constructor() { }

//   ngOnInit() {
//   // }
//   // updateActive(isActive: boolean) {
//   //   this.ApiService.updateCustomer(this.movie.id,
//   //     { title: this.movie.title, age: this.movie.year, active: isActive })
//   //     .subscribe(
//   //       data => {
//   //         console.log(data);
//   //         this.movie = data as Customer;
//   //       },
//   //       error => console.log(error));
//   // }


//   updateMovie = () =>{
//     this.api.updateMovie(this.selectedMovie).subscribe(
//       data => {
//         // console.log(data);
//         // this.selectedMovie = data;
//         // this.desc = data.desc;
//         // this.year = data.year;
//         this.getMovies();
//       },
//       error => {
//         console.log(error);
//       }
//     );



// }
