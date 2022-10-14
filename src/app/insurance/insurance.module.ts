import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeInsuranceComponent } from './home-insurance/home-insurance.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { TravelComponent } from './travel/travel.component';
import { CarComponent } from './car/car.component';
import { LifeComponent } from './life/life.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'business',component:BusinessComponent},
  {path:'car',component:CarComponent},
  {path:'health',component:HealthComponent},
  {path:'homeInsurance',component:HomeInsuranceComponent},
  {path:'life',component:LifeComponent},
  {path:'travel',component:TravelComponent},
]


@NgModule({
  declarations: [
    HomeInsuranceComponent,
    BusinessComponent,
    HealthComponent,
    TravelComponent,
    CarComponent,
    LifeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class InsuranceModule { }
