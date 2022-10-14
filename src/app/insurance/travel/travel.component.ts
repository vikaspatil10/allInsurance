import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(private rt:Router) { }

  ngOnInit(): void {
  }
  previous(){
    this.rt.navigateByUrl('insurance/car')
  }
  next(){
    this.rt.navigateByUrl('insurance/life')
  }
}
