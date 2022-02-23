import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  who = {} as any;

  private helloUrl = 'http://localhost:8999/me';

  constructor(private http: HttpClient) {}

  whoAreYou(){
    this.http.get(this.helloUrl).subscribe(data => {
      this.who =data;
    },
    error => {
      console.log(error);
      this.who = {"name":"world"};
    })
  }
}
