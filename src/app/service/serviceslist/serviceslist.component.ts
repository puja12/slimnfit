import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviceslist',
  templateUrl: './serviceslist.component.html',
  styleUrls: ['./serviceslist.component.css']
})
export class ServiceslistComponent implements OnInit {

  constructor() { }

  service_list = [
    {id: '1',name:"Weight Loss", imgSrc: "assets/images/services/what-we-offer-2.jpg"},
    {id: '2',name:"Weight Gain", imgSrc: "assets/images/services/what-we-offer-2.jpg"},
    {id: '3',name:"Cholesterol Management", imgSrc:"assets/images/services/what-we-offer-2.jpg"},
    {id: '4',name:"Post Pregnancy Nutrition & Weight Loss",imgSrc:"assets/images/services/what-we-offer-2.jpg"},
    {id: '5',name:"Hypothyroid Management",imgSrc:"assets/images/services/what-we-offer-2.jpg"},
    {id: '6',name:"Personalized Diet",imgSrc:"assets/images/services/what-we-offer-2.jpg"},
    {id: '7',name:"Sports Nutrition",imgSrc:"assets/images/services/what-we-offer-2.jpg"},
    {id: '8',name:"Immunity Boosting",imgSrc:"assets/images/services/what-we-offer-2.jpg"},
    {id: '9',name:"Acidity Management",imgSrc:"assets/images/services/what-we-offer-2.jpg"},
    {id: '10',name:"LBS Management",imgSrc:"assets/images/services/what-we-offer-2.jpg"},
  ];

  ngOnInit(): void {
  }

}
