import { Movie } from "./movie";

class MovieImpl implements Movie {
  movieName: string;
  startTime: string;
  endTime: string;

  constructor() {
    //this.bookMovie();
    this.cancelMovie();
  }

  bookMovie() {
    this.movieName = "RRR";
    this.startTime = "9:00PM";
    this.endTime = "12:00AM";
    console.log("Movie Booked Successfully");
    console.log(`${this.movieName} ${this.startTime} ${this.endTime}`);
  }
  cancelMovie() {
    console.log("Movie Cancelled Successfully");
  }

  getUserProfile() {}
}

new MovieImpl();
