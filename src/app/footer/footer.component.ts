import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  imageSrc = 'assets/images/logo.png'
  imageAlt = 'slimnfit-nutrition-weightloss'
  ngOnInit(): void {
  }

}
