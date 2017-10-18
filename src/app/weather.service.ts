import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  key = 'f75049e8bde6b11a0c5e11e5901b3f86';


  retrieveWeather(city: string){

    // this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&&appid='+this.key).subscribe(
    //   (response) => {
    //     callback(response.json());
    //   },
    //   (error) => {
    //     console.log(error);
    //     callback(error);
    //   }
    // )

    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&&appid='+this.key)
    .map( data => data.json() )
    .toPromise();
  }

}
