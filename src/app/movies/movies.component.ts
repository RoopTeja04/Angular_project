import { Component} from '@angular/core';

interface Movie {
  id:number;
  MovieImg:string;
}


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(){}
  MarvelMovies: Movie[] =[
    { id: 1, MovieImg:"https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg"},
    { id: 2, MovieImg:"https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg"},
    { id: 3, MovieImg:"https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"},
    { id: 4, MovieImg:"https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg"},
    { id: 5, MovieImg:"https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg"},
    { id: 6, MovieImg:"https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"},
    { id: 7, MovieImg:"https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg"},
    { id: 8, MovieImg:"https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg"},
    { id: 9, MovieImg:"https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg"},
    { id: 10, MovieImg:"https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg"},
    { id: 11, MovieImg:"https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"},
  ];
  ActionMovies: Movie[] =[
    { id: 12, MovieImg:"https://i.pinimg.com/originals/75/2d/29/752d29e9d9cb839a8fc8fb5acd064bad.jpg"},
    { id: 13, MovieImg:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/krishnamma-et00333238-1715265762.jpg"},
    { id: 14, MovieImg:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/operation-valentine-et00361961-1705650734.jpg"},
    { id: 15, MovieImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtsgVhITmy8HYpsR38sQ8n_vhfkIz4JK2Kw&s"},
    { id: 16, MovieImg:"https://m.media-amazon.com/images/M/MV5BMTVmNzY0NWItYjkxYS00NjMwLThhMTAtNGQ4NzNkOTgwMzZkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg"},
    { id: 17, MovieImg:"https://m.media-amazon.com/images/M/MV5BYzU0YTgwOWEtYmVhNC00ODBhLWJkYTYtZGY5ZmJhOGMyMDc5XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg"},
    { id: 18, MovieImg:"https://m.media-amazon.com/images/M/MV5BZWYwNWFmZGMtZmNlYi00MGFmLWJmOTYtYTgyMGY2MTM0NWJkXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg"},
    { id: 19, MovieImg:"https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg"},
    { id: 20, MovieImg:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/indian-2-et00064311-1720515688.jpg"},
    { id: 21, MovieImg:"https://m.media-amazon.com/images/M/MV5BMmU4ZTM0MTctZTQ3Ny00YjZmLWFhNzEtOGYzMDk0ZjcyNmYzXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg"},
  ];
  ComedyMovies: Movie[] =[
    { id: 22, MovieImg:"https://m.media-amazon.com/images/M/MV5BNzkzYWVkOTYtODc5OS00ZjhlLThhY2UtZjY4ZGIyZWFhZWE4XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_FMjpg_UX1000_.jpg"},
    { id: 23, MovieImg:"https://m.media-amazon.com/images/M/MV5BZGZlZDBiYTAtZjU0Mi00YzAwLWIwNjMtNjQ0ODAwOGY4ZDk3XkEyXkFqcGdeQXVyNjIzNTQ5NjU@._V1_.jpg"},
    { id: 24, MovieImg:"https://m.media-amazon.com/images/M/MV5BZDFkMzZmNTYtYjUyOS00NzFiLWI3ZjYtZDE2ZDNhMzdhZTIyXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg"},
    { id: 25, MovieImg:"https://upload.wikimedia.org/wikipedia/en/3/35/Mad_%28film%29.jpg"},
    { id: 26, MovieImg:"https://upload.wikimedia.org/wikipedia/en/c/c5/Premalu_film_poster.jpg"},
    { id: 27, MovieImg:"https://m.media-amazon.com/images/M/MV5BNWE5NGZkOWYtODlkZS00Mzk5LWIzZjgtMjk4NzAxNzFmODA3XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg"},
    { id: 28, MovieImg:"https://upload.wikimedia.org/wikipedia/en/7/71/Bro_Teaser.png"},
    { id: 29, MovieImg:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/aa-okkati-adakku-et00389037-1710314797.jpg"},
    { id: 30, MovieImg:"https://m.media-amazon.com/images/M/MV5BN2FmZjBmOGYtNTJkNy00M2E3LWE1N2UtOTRlMjU1MTU1ZTkwXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"},
    { id: 31, MovieImg:"https://m.media-amazon.com/images/M/MV5BODE2YzRmOGYtYTRiZC00NTZkLWFkOTUtZmNiMzM3ZWRhODc0XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg"},
  ];
  DTM: Movie[] =[
    { id: 32, MovieImg:"https://m.media-amazon.com/images/M/MV5BOGJmMmRmN2UtYjI2MS00OGEyLTk0MzAtNjc4Yzc2ZjdmODI4XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"},
    { id: 33, MovieImg:"https://m.media-amazon.com/images/S/pv-target-images/7643b2482e3eb78fa73fb78efd83490845299062f1c5ca472f7a25a3beaca91a.jpg"},
    { id: 34, MovieImg:"https://m.media-amazon.com/images/M/MV5BZDg1Y2M3NGEtZDg1ZC00YTFjLWEyYjMtYmYzNjZlZGM2NDJhXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg"},
    { id: 35, MovieImg:"https://m.media-amazon.com/images/S/pv-target-images/d70433c1868c2959a0899ab97893a243c3b59600b8d3c4d6e18a308433ec0f97.jpg"},
    { id: 36, MovieImg:"https://m.media-amazon.com/images/M/MV5BOWQwNWRlNmUtY2FkZC00YmQ3LTlkNzUtOTUyZmExMDNkYjE2XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg"},
    { id: 37, MovieImg:"https://m.media-amazon.com/images/M/MV5BMmM5YTZjZjQtODhlMy00YzQyLWI5OGEtNGQ4MjhjZTQ5YzNlXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg"},
    { id: 38, MovieImg:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ooru-peru-bhairavakona-et00357656-1681883459.jpg"},
    { id: 39, MovieImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJY9pWcpZptc5KtMUrWPcAyJG-ll2cd_oVw&s"},
    { id: 40, MovieImg:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/butta-bomma-et00344121-1675058823.jpg"},
    { id: 41, MovieImg:"https://m.media-amazon.com/images/M/MV5BZGIxZjY4NTYtNjdhNC00NmNmLTg5OWYtNzlkZDQyYjkyN2QwXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg"},
  ];  

  WatchList: Movie[] = [];
  WatchListImages: string[] = [];

  AllMovies: Movie[] = [
    ...this.MarvelMovies,
    ...this.ActionMovies,
    ...this.ComedyMovies,
    ...this.DTM
  ];

  addWatchList(movieId: number) {
    const movie = this.AllMovies.find(movie => movie.id === movieId);
    if (movie && !this.WatchList.find(m => m.id === movieId)) {
      this.WatchList.push(movie);
    }
  }

  removeWatchList(movieId: number) {
    const movieIndex = this.WatchList.findIndex(movie => movie.id === movieId);
    if (movieIndex !== -1) {
      this.WatchList.splice(movieIndex, 1);
    }
  }
}
