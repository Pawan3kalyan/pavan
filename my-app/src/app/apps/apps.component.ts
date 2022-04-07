import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
num1=0;
num2=0;
num3=0;
sum()
{
  alert(this.num1+this.num2)
}
add()
{
  alert(this.num1-this.num2)
}
area()
{
  this.num3=(this.num1*this.num2)
}
names=[""];
name="";
register()
{
  this.names.push(this.name)
}
users:any=[];
product="";
quantity="";
price="";
ADDTOCART()
{
  var obj:any={}
  obj.product=this.product;
  obj.quantity=this.quantity;
  obj.price=this.price;
  this.users.push(obj)
}
nums:any=[];
city="";
email="";
phone="";
SIGNUP()
{
  var obj:any={}
  obj.city=this.city;
  obj.email=this.email;
  obj.phone=this.phone;
  this.nums.push(obj)
}

}
