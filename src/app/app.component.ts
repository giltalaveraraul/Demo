import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config, ConfigService } from './config/config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error: any;
  who = {} as any;
  config: Config |any;

  

  constructor(private http: HttpClient, private configService: ConfigService) {}

  whoAreYou(){

    this.configService.getConfig()
    .subscribe({
      next: (data: Config) => {
        this.config = { ...data };
        this.http.get(this.config.whoUrl).subscribe(data => {
          this.who =data;
        },
        error => {
          console.log(error);
          this.who = {"name":"world"};
          this.config = {"instance":"Imaginary instance","whoUrl":"anyUrl"};
        })
      }, // error path // success path
      error: error => {
        this.error = error;
        console.log(error);
        this.who = {"name":"world"};
      }
    });
    
  }
}
