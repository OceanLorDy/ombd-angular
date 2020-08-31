import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utils/services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies;

  constructor(private apiService: ApiService) { }



  ngOnInit(): void {
    this.apiService.getMovie().subscribe((data) => {
      console.log("movies", data);
      this.movies = data['Search'];
    });
  }

}
