import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bmical',
  templateUrl: './bmical.component.html',
  styleUrls: ['./bmical.component.css']
})
export class BmicalComponent implements OnInit {
  @ViewChild('f') calbmiForm!: NgForm;
  constructor() { }
  calimageSrc = 'assets/images/weight-loss.png'
  calimageAlt = 'calculate BMI'

  ngOnInit(): void {
  }

  /*onSubmit(form: NgForm){
    console.log(form)
  }*/

  onSubmit(){
    console.log(this.calbmiForm)
  }
}
