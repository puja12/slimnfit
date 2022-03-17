import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bmical',
  templateUrl: './bmical.component.html',
  styleUrls: ['./bmical.component.css']
})
export class BmicalComponent implements OnInit {
  @ViewChild('f') calbmiForm!: NgForm;
  constructor() {
   }
  calimageSrc = 'assets/images/weight-loss.png';
  calimageAlt = 'calculate BMI';
  
  /*param = {
    height: null,
    weight: '',
    bmi:'',
    mheight:null
  };*/

  height: any;
  mheight:any;
  bmi:any;
  weight:any;
  result:any;

  submitted = false;
  ngOnInit(): void {
  }

  /*onSubmit(form: NgForm){
    console.log(form)
  }*/

  onSubmit(){
    //console.log(this.calbmiForm);
    this.submitted=true;
    /*this.param.height=this.calbmiForm.value.height;
    this.mheight=this.param.height/100;
    this.param.weight=this.calbmiForm.value.weight;
    this.param.bmi=this.param.height + this.param.weight;*/
    this.height=this.calbmiForm.value.height;
    this.mheight=this.height/100;

    this.weight=this.calbmiForm.value.weight;
    this.bmi= this.weight / (this.mheight * this.mheight) ;
    this.result=parseFloat(this.bmi).toFixed(2);
}
}
