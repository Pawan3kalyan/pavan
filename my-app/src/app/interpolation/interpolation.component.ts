import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name="pavankalyan";
balance=NaN;
number=1234;
boolean=true;
undefined=undefined;
array=[1,2,3,4];
object=null;
person={
  name:"pawan",
  age:20};

dob="06/17/1997"

}
