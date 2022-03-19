import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailymealplan',
  templateUrl: './dailymealplan.component.html',
  styleUrls: ['./dailymealplan.component.css']
})
export class DailymealplanComponent implements OnInit {

  constructor() { }

  mealplan=[
    {mid:'1',imageSrc:'assets/images/meal_plan/early_morning_meethi_seeds.jpg',imgAlt:'',title:'Early Morning'},
    {mid:'1',imageSrc:'assets/images/meal_plan/breakfast_protein-or-carbs.jpg',imgAlt:'',title:'Breakfast'},
    {mid:'1',imageSrc:'assets/images/meal_plan/mid_morning.jpg',imgAlt:'',title:'Mid Morning'},
    {mid:'1',imageSrc:'assets/images/meal_plan/lunch.jpg',imgAlt:'',title:'Lunch'},
    {mid:'1',imageSrc:'assets/images/meal_plan/evening_snacks.jpg',imgAlt:'',title:'Evening Snacks'},
    {mid:'1',imageSrc:'assets/images/meal_plan/before_dinner_detox_juice.jpg',imgAlt:'',title:'Before Dinner'},
    {mid:'1',imageSrc:'assets/images/meal_plan/dinner.jpg',imgAlt:'',title:'Dinner'},
  ];
  
  ngOnInit(): void {
  }

}
