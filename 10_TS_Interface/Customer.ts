import { Movie } from "./movie";

class Customer implements Movie {
  movieName: string;
  startTime: string;
  endTime: string;
  bookMovie() {}
  cancelMovie() {}

  getUserProfile() {}
}
