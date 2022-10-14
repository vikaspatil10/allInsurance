import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

  constructor(private rt :Router) { }

  ngOnInit(): void {
  }
  previous(){
    this.rt.navigateByUrl('insurance/travel')
  }
  next(){
    this.rt.navigateByUrl('insurance/homeInsurance')
  }
}
