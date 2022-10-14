import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private rt:Router) { }

  ngOnInit(): void {
  }
  previous(){
    this.rt.navigateByUrl('insurance/health')
  }
  next(){
    this.rt.navigateByUrl('insurance/travel')
  }
}
