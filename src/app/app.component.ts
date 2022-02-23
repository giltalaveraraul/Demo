import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  starshipData = {} as any;
  private url = 'https://swapi.dev/api/starships/10/';

  constructor(private http: HttpClient) {}

  getStarship() {
    this.http.get(this.url).subscribe(data => {
      this.starshipData = data;
    });
  }
}
