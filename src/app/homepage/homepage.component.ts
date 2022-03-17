import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  mealplanimageSrc = 'assets/images/healthy-life-img-3.jpg'
  mealplanimageAlt = 'healthy'

  abtslimnfitimageSrc = 'assets/images/about-img-5.jpg'
  abtslimnfitimageAlt = 'slimnfit-weightloss'

  customOptions: OwlOptions = {
    loop: true,
    items:1,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoWidth: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  id : any;
    slides = [
      {id: '1',author:"Aditi Khawle", img: "Shailaja Mam's diet plans were flexible and not monotonous and were easy to follow in my hectic work schedule. It helped me in balancing the health issues in my early 40s."},
      {id: '2',author:"Aashlesha Modak", img: "Shailaja Mam's diet plans helped me in post covid recovery. It helped me lose weight gradually. The plans were flexible and were easy to follow in an Indian household."},
      {id: '3',author:"Kiran Deokare", img: "I am 36 years old Guy living in Mumbai.Recently I faced issues with my digestive system. I was getting Acid Refluxes at night and sometimes during the mid day and sometimes suffering from heavy vomiting also. I did Endoscopy few months back and Doctor resonated that I am suffering from acute ulcers in stomach and food pipe. According to my  medical condition, Dietitian Shailaja gave me diet and results are far better.I am finding the changes in my condition and want to thank her for her diet and consultation."}
    ];

  ngOnInit(): void {
  }

}
