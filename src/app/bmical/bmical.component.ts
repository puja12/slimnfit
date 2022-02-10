import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmical',
  templateUrl: './bmical.component.html',
  styleUrls: ['./bmical.component.css']
})
export class BmicalComponent implements OnInit {

  constructor() { }
  calimageSrc = 'assets/images/calculate-img.png'
  calimageAlt = 'calculate BMI'

  ngOnInit(): void {
  }

}
