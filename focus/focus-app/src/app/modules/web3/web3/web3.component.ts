import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/services/web3.service';


@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.scss']
})
export class Web3Component implements OnInit {

  constructor(private web3Service: Web3Service) { }

  ngOnInit(): void {
    this.web3Service.GetWeatherForecast().subscribe((results: any)=>{
      console.log(results);
    });
  }
}
