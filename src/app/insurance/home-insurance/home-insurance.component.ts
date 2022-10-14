import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-insurance',
  templateUrl: './home-insurance.component.html',
  styleUrls: ['./home-insurance.component.css']
})
export class HomeInsuranceComponent implements OnInit {

  constructor(private rt :Router) { }

  ngOnInit(): void {
  }
previous(){
  this.rt.navigateByUrl('insurance/life')
}
next(){
  this.rt.navigateByUrl('insurance/business')
}
}
