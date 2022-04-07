import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
test1()
{
  alert("click");
}
test2()
{
  alert("dbclick");
}
test3()
{
  alert("keypress");
}
test4()
{
  alert("keydown");
}
test5()
{
  alert("keyup");
}
test6()
{
  alert("focus");
}
test7()
{
  alert("mouseenter");
}
}
