import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviceslist',
  templateUrl: './serviceslist.component.html',
  styleUrls: ['./serviceslist.component.css']
})
export class ServiceslistComponent implements OnInit {

  constructor() { }

  service_list = [
    {id: '1',name:"Weight Loss", imgSrc: "assets/images/services/weight-loss.jpg"},
    {id: '2',name:"Weight Gain", imgSrc: "assets/images/services/weight-gain.jpg"},
    {id: '3',name:"Cholesterol Management", imgSrc:"assets/images/services/cholesterol_management.jpg"},
    {id: '5',name:"Hypothyroid Management",imgSrc:"assets/images/services/hypothyroid_management.jpg"},
    {id: '6',name:"Personalized Diet",imgSrc:"assets/images/services/diet_plan.jpg"},
    {id: '7',name:"Sports Nutrition",imgSrc:"assets/images/services/sports-nutrition.jpg"},
    {id: '8',name:"Immunity Boosting",imgSrc:"assets/images/services/immunity-salad.jpg"},
    {id: '9',name:"Acidity Management",imgSrc:"assets/images/services/acidity-management.jpg"},
    {id: '10',name:"IBS Management",imgSrc:"assets/images/services/rritable-Bowel-Syndrome.png"},
    {id: '4',name:"Post Pregnancy Nutrition & Weight Loss",imgSrc:"assets/images/services/postpartum-diet-plan-for-weight-loss.jpg"},
  ];

  ngOnInit(): void {
  }

}
