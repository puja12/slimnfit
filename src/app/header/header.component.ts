import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  imageSrc = 'assets/images/logo.png'
  imageAlt = 'slimnfit-nutrition-weightloss'
  ngOnInit(): void {
  }

}
