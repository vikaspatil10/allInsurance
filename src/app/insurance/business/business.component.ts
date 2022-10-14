import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private rt:Router) { }

  ngOnInit(): void {
  }
  previous(){
    this.rt.navigateByUrl('insurance/homeInsurance')
  }
  next(){
    this.rt.navigateByUrl('insurance/health')
  }
}
