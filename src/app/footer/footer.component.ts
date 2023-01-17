import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  imageSrc = 'assets/images/theweightguru-logo-b-w.png'
  imageAlt = 'weightguru-nutrition-weightloss'
  ngOnInit(): void {
  }

}
