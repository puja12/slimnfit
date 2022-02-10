import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
  }

}
