import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  recipes=[
    {rid:'1',imageSrc:'assets/images/meal_plan/early_morning_meethi_seeds.jpg',imgAlt:'',title:'Early Morning',total_time:'',serving:'',ingredients:'',steps:''},
    {mid:'1',imageSrc:'assets/images/meal_plan/breakfast_protein-or-carbs.jpg',imgAlt:'',title:'Breakfast',total_time:'',serving:'',ingredients:'',steps:''},
    {mid:'1',imageSrc:'assets/images/meal_plan/mid_morning.jpg',imgAlt:'',title:'Mid Morning',total_time:'',serving:'',ingredients:'',steps:''},
  ];

  ngOnInit(): void {
  }

}
