import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  who = {} as any;

  

  constructor(private http: HttpClient) {}

  whoAreYou(){
    this.http.get(environment.url).subscribe(data => {
      this.who =data;
    },
    error => {
      console.log(error);
      this.who = {"name":"world"};
    })
  }
}
