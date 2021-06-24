    import { Component, OnInit } from '@angular/core';&#xD;&#xA;    import { MovieRequestService } from '../../shared/services/movie-request.service';&#xD;&#xA;    import { HttpClient} from '@angular/common/http';&#xD;&#xA;    import { Movies } from '../../shared/models/movies.model';&#xD;&#xA;    @Component({&#xD;&#xA;      selector: 'app-movie-list',&#xD;&#xA;      templateUrl: './movie-list.component.html',&#xD;&#xA;      styleUrls: ['./movie-list.component.css']&#xD;&#xA;    })&#xD;&#xA;    export class MovieListComponent implements OnInit {&#xD;&#xA;      localData: {movies: Movies};&#xD;&#xA;      constructor(private movieService: MovieRequestService, private http: HttpClient) {&#xD;&#xA;        this.localData = this.movieService.moviesData;&#xD;&#xA;      }&#xD;&#xA;      ngOnInit() {&#xD;&#xA;      }&#xD;&#xA;    }