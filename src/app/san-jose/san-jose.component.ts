import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  constructor(
    private _weatherService: WeatherService,
    // private _route: ActivatedRoute,
  ) {
    // this._route.paramMap.subscribe( params => {
    //   console.log(params.get);
    // })
  }

  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  clouds;

  ngOnInit() {

    this.weather = this._weatherService.retrieveWeather('sanjose')
    .then(city => {
      this.humidity = city.main.humidity;
      this.temp = city.main.temp;
      this.temp = Math.floor(this.temp * (9/5) - 459.67); 
      this.maxTemp = city.main.temp_max;
      this.maxTemp = Math.floor(this.maxTemp * (9/5) - 459.67); 
      this.minTemp = city.main.temp_min;
      this.minTemp = Math.floor(this.minTemp * (9/5) - 459.67); 
      this.clouds = city.weather[0].description;
    })
    .catch( err => {
      console.log(err);
    })
  }
}